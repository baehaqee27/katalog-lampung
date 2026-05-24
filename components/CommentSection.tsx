"use client";

import { useState, useEffect, useRef } from "react";
import { db, auth, googleProvider } from "@/lib/firebase";
import { ref, onValue, push } from "firebase/database";
import { signInWithPopup, signOut, onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Send, User, LogIn, LogOut } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { id as localeId } from "date-fns/locale";

interface Comment {
  id: string;
  name: string;
  text: string;
  timestamp: number;
  parentId?: string;
  avatarUrl?: string;
}

function RelativeTime({ timestamp }: { timestamp: number }) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTimeStr(formatDistanceToNow(new Date(timestamp), { addSuffix: true, locale: localeId }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [timestamp]);

  return <span>{timeStr}</span>;
}

export function CommentSection({ pageId }: { pageId: string }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState<Comment | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    const commentsRef = ref(db, `comments/${pageId}`);
    
    const unsubscribeDb = onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const parsedComments = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        })).sort((a, b) => a.timestamp - b.timestamp);
        setComments(parsedComments);
      } else {
        setComments([]);
      }
    });

    return () => unsubscribeDb();
  }, [pageId]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [comments]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Gagal login dengan Google.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setReplyingTo(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !text.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const commentsRef = ref(db, `comments/${pageId}`);
      await push(commentsRef, {
        name: user.displayName || "Anonim",
        avatarUrl: user.photoURL || "",
        text: text.trim(),
        timestamp: Date.now(),
        ...(replyingTo ? { parentId: replyingTo.id } : {})
      });
      setText("");
      setReplyingTo(null);
    } catch (error) {
      console.error("Error adding comment: ", error);
      alert("Gagal mengirim komentar!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const topLevelComments = comments.filter((c) => !c.parentId);
  const repliesByParentId = comments.reduce((acc, c) => {
    if (c.parentId) {
      if (!acc[c.parentId]) acc[c.parentId] = [];
      acc[c.parentId].push(c);
    }
    return acc;
  }, {} as Record<string, Comment[]>);

  const [expandedComments, setExpandedComments] = useState<Record<string, boolean>>({});
  
  const toggleExpand = (id: string) => {
    setExpandedComments(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderComment = (c: Comment, isReply: boolean = false) => {
    const hasReplies = !isReply && repliesByParentId[c.id] && repliesByParentId[c.id].length > 0;
    const isExpanded = expandedComments[c.id];

    return (
      <div key={c.id} className={`flex flex-col gap-2 ${isReply ? "ml-4 md:ml-8 border-l-[3px] border-foreground/30 pl-3 md:pl-4" : ""}`}>
        <Card className={`border-[3px] border-foreground transition-all duration-200 ${isReply ? 'bg-muted/10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}`}>
          <CardContent className="p-3 flex gap-2.5">
            <Avatar className="w-8 h-8 border-[2px] border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
              {c.avatarUrl ? (
                <AvatarImage src={c.avatarUrl} alt={c.name} />
              ) : null}
              <AvatarFallback className="bg-secondary text-secondary-foreground font-black text-xs">
                {c.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-0.5 gap-2">
                <p className="font-black text-xs uppercase break-words">{c.name}</p>
                <span className="text-[9px] font-bold text-muted-foreground whitespace-nowrap">
                  {c.timestamp ? <RelativeTime timestamp={c.timestamp} /> : "Baru saja"}
                </span>
              </div>
              <p className="text-xs font-medium leading-relaxed bg-muted/30 p-2.5 rounded-md border-[2px] border-foreground/10 mt-1 break-words">
                {c.text}
              </p>
              <div className="flex items-center gap-3 mt-2">
                {!isReply && user && (
                  <button 
                    onClick={() => setReplyingTo(c)} 
                    className="text-[10px] font-black text-foreground hover:text-primary transition-colors flex items-center gap-1 uppercase px-2 py-1 rounded bg-foreground/5 hover:bg-primary/10 w-fit"
                  >
                    <MessageSquare className="w-2.5 h-2.5" /> Balas
                  </button>
                )}
                {hasReplies && (
                  <button 
                    onClick={() => toggleExpand(c.id)}
                    className="text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors uppercase px-2 py-1 rounded bg-muted/50"
                  >
                    {isExpanded ? "Sembunyikan" : `Lihat ${repliesByParentId[c.id].length} balasan`}
                  </button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {hasReplies && isExpanded && (
          <div className="flex flex-col gap-3 mt-1 mb-2">
            {repliesByParentId[c.id].map(reply => renderComment(reply, true))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="px-5 py-8 bg-background border-t-[3px] border-foreground mt-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary text-primary-foreground p-2 rounded-lg border-[3px] border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <MessageSquare className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Komentar</h2>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        {comments.length === 0 ? (
          <div className="text-center p-8 bg-muted/50 rounded-xl border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-dashed flex flex-col items-center justify-center gap-3">
            <MessageSquare className="w-8 h-8 text-muted-foreground/50" />
            <p className="text-muted-foreground font-bold text-sm">Belum ada komentar.<br/>Jadilah yang pertama!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-5 max-h-[500px] overflow-y-auto pr-2 pb-2">
            {topLevelComments.map((c) => renderComment(c, false))}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {!user ? (
        <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-card overflow-hidden text-center p-6 flex flex-col items-center gap-4">
          <div className="bg-muted p-4 rounded-full border-[3px] border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-black text-lg uppercase tracking-tight mb-1">Ikut Berdiskusi</h3>
            <p className="text-sm font-medium text-muted-foreground">Login terlebih dahulu untuk meninggalkan komentar atau membalas.</p>
          </div>
          <button 
            onClick={handleLogin}
            className="w-full bg-primary text-primary-foreground border-[3px] border-foreground rounded-lg px-4 py-3 font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all flex items-center justify-center gap-2 mt-2"
          >
            <LogIn className="w-5 h-5" />
            Login via Google
          </button>
        </Card>
      ) : (
        <Card className={`border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-colors ${replyingTo ? 'bg-primary/5' : 'bg-card'}`}>
          <div className={`px-4 py-3 border-b-[3px] border-foreground flex items-center justify-between ${replyingTo ? 'bg-primary' : 'bg-secondary'}`}>
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6 border-[2px] border-foreground shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                {user.photoURL ? <AvatarImage src={user.photoURL} alt={user.displayName || "User"} /> : null}
                <AvatarFallback className="text-[8px] font-black">{user.displayName?.substring(0,2).toUpperCase() || "U"}</AvatarFallback>
              </Avatar>
              <h3 className={`font-black uppercase tracking-wide text-xs md:text-sm ${replyingTo ? 'text-primary-foreground' : 'text-secondary-foreground'}`}>
                {replyingTo ? `Membalas ${replyingTo.name}` : user.displayName}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              {replyingTo && (
                <button 
                  onClick={() => setReplyingTo(null)} 
                  className="text-[10px] font-black uppercase tracking-wider bg-background text-foreground px-2 py-1.5 rounded border-[2px] border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
                >
                  Batal
                </button>
              )}
              <button 
                onClick={handleLogout}
                className="text-[10px] font-black uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                title="Logout"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Keluar</span>
              </button>
            </div>
          </div>
          <CardContent className="p-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <textarea
                placeholder={replyingTo ? `Balasan untuk ${replyingTo.name}...` : "Ketik komentar di sini..."}
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                rows={3}
                className="w-full bg-background border-[3px] border-foreground rounded-lg px-4 py-3 font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background border-[3px] border-foreground rounded-lg px-4 py-3 font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? "Mengirim..." : (
                  <>
                    <Send className="w-5 h-5" />
                    {replyingTo ? "Kirim Balasan" : "Kirim Komentar"}
                  </>
                )}
              </button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
