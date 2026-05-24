import Image from "next/image";
import { BackButton } from "@/components/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Type, Info, LayoutTemplate, Image as ImageIcon } from "lucide-react";
import { CommentSection } from "@/components/CommentSection";

export default function AksaraPage() {
  return (
    <div className="flex flex-col flex-1 bg-background min-h-screen">
      <div className="sticky top-0 z-50 bg-background border-b-[3px] border-foreground px-4 py-3">
        <BackButton />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Brutalist Hero */}
        <div className="bg-accent px-6 py-10 border-b-[3px] border-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/10 rounded-bl-full pointer-events-none" />
          <div className="relative z-10">
            <Badge variant="outline" className="mb-4 bg-background text-foreground border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
              Bahasa & Sastra
            </Badge>
            <h1 className="text-4xl font-black text-accent-foreground tracking-tight uppercase leading-none mb-3">
              Aksara Kaganga
            </h1>
            <p className="text-accent-foreground/90 font-medium max-w-[90%]">
              Sistem penulisan asli kebanggaan Tanah Lada.
            </p>
          </div>
        </div>

        <div className="px-5 py-6 flex-1 flex flex-col gap-6">
          <div className="w-full aspect-video bg-white rounded-xl overflow-hidden border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative p-2">
            <Image 
              src="/aksara.jpeg" 
              alt="Aksara Lampung" 
              fill 
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>

          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-2 border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-background h-12 mb-4">
              <TabsTrigger value="info" className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none border-r-[3px] border-foreground last:border-r-0"><Info className="w-4 h-4 mr-2 hidden sm:block" /> Info</TabsTrigger>
              <TabsTrigger value="struktur" className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none"><LayoutTemplate className="w-4 h-4 mr-2 hidden sm:block" /> Struktur</TabsTrigger>
            </TabsList>
            
            <TabsContent value="info">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="p-5 space-y-4">
                  <p className="text-foreground font-medium leading-relaxed text-sm">
                    Aksara Lampung atau Had Lampung merupakan salah satu bentuk tulisan tradisional Indonesia yang berakar dari aksara Pallawa dari India Selatan.
                  </p>
                  <p className="text-foreground font-medium leading-relaxed text-sm">
                    Aksara ini terdiri dari huruf induk, anak huruf, dan tanda baca. Lampung adalah satu dari sedikit provinsi di Indonesia yang memiliki bahasa dan tulisan sendiri.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="struktur">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="p-5 space-y-5">
                  <div>
                    <h3 className="font-black text-foreground uppercase mb-1">Kelabai Surat</h3>
                    <p className="text-muted-foreground text-sm font-medium">Merupakan 20 huruf induk atau konsonan dasar penyusun kata.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-foreground uppercase mb-1">Benah Surat</h3>
                    <p className="text-muted-foreground text-sm font-medium">Merupakan anak huruf atau tanda vokalisasi yang diletakkan di atas, bawah, atau samping huruf induk.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Galeri tab dihilangkan */}
          </Tabs>
        </div>
      </div>
      <CommentSection pageId="aksara" />
    </div>
  );
}
