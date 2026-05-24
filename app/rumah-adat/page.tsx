import { BackButton } from "@/components/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Info, LayoutTemplate, Image as ImageIcon } from "lucide-react";
import { CommentSection } from "@/components/CommentSection";

export default function RumahAdatPage() {
  return (
    <div className="flex flex-col flex-1 bg-background min-h-screen">
      <div className="sticky top-0 z-50 bg-background border-b-[3px] border-foreground px-4 py-3">
        <BackButton />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Brutalist Hero */}
        <div className="bg-primary px-6 py-10 border-b-[3px] border-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/10 rounded-bl-full pointer-events-none" />
          <div className="relative z-10">
            <Badge variant="outline" className="mb-4 bg-background text-foreground border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
              Arsitektur Tradisional
            </Badge>
            <h1 className="text-4xl font-black text-primary-foreground tracking-tight uppercase leading-none mb-3">
              Nuwo Sesat
            </h1>
            <p className="text-primary-foreground/90 font-medium max-w-[90%]">
              Rumah adat panggung kebanggaan masyarakat Lampung.
            </p>
          </div>
        </div>

        <div className="px-5 py-6 flex-1 flex flex-col gap-6">
          {/* Sketchfab 3D Embed */}
          <div className="w-full aspect-video bg-muted rounded-xl overflow-hidden border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative group">
            <iframe 
              title="Nuwo Sesat" 
              className="w-full h-full"
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; fullscreen; xr-spatial-tracking" 
              src="https://sketchfab.com/models/1558ff3c6748414295bb7b8f9efeb96d/embed?autostart=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0"
            />
            <div className="absolute bottom-3 right-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
               <Badge variant="outline" className="bg-background/90 text-foreground border-[2px] border-foreground font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                 Model 3D (Bisa Digeser)
               </Badge>
            </div>
          </div>
          <p className="text-[11px] font-bold text-muted-foreground text-center -mt-3">
            <a href="https://sketchfab.com/3d-models/nuwo-sesat-1558ff3c6748414295bb7b8f9efeb96d" target="_blank" rel="nofollow" className="hover:text-primary transition-colors">Nuwo Sesat</a> by <a href="https://sketchfab.com/asyraaf" target="_blank" rel="nofollow" className="hover:text-primary transition-colors">Asyraaf Ahmadi</a> on Sketchfab
          </p>

          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-3 border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-background h-12 mb-4">
              <TabsTrigger value="info" className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none border-r-[3px] border-foreground last:border-r-0"><Info className="w-4 h-4 mr-2 hidden sm:block" /> Info</TabsTrigger>
              <TabsTrigger value="detail" className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none border-r-[3px] border-foreground last:border-r-0"><LayoutTemplate className="w-4 h-4 mr-2 hidden sm:block" /> Detail</TabsTrigger>
              <TabsTrigger value="galeri" className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none"><ImageIcon className="w-4 h-4 mr-2 hidden sm:block" /> Galeri</TabsTrigger>
            </TabsList>
            
            <TabsContent value="info">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="p-5 space-y-4">
                  <p className="text-foreground font-medium leading-relaxed text-sm">
                    Nuwo Sesat pada mulanya berfungsi sebagai balai pertemuan adat atau tempat berkumpulnya para penyimbang (tokoh adat) untuk mengadakan musyawarah (Pusiban). 
                  </p>
                  <p className="text-foreground font-medium leading-relaxed text-sm">
                    Desain panggungnya yang khas tidak hanya memberikan kesan megah, tetapi juga berfungsi historis untuk melindungi penghuni dari hewan buas dan menghindari banjir.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="detail">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="p-5 space-y-5">
                  <div>
                    <h3 className="font-black text-foreground uppercase mb-1">Pusiban</h3>
                    <p className="text-muted-foreground text-sm font-medium">Ruang utama tempat para penyimbang adat bermusyawarah.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-foreground uppercase mb-1">Tetabuhan</h3>
                    <p className="text-muted-foreground text-sm font-medium">Ruang khusus untuk menyimpan alat musik tradisional pengiring upacara.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-foreground uppercase mb-1">Ukiran Ornamen</h3>
                    <p className="text-muted-foreground text-sm font-medium">Motif ukiran yang sarat makna filosofis tentang kehidupan, alam, dan nilai-nilai luhur masyarakat Lampung.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="galeri">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded flex items-center justify-center font-bold text-muted-foreground">Foto 1</div>
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded flex items-center justify-center font-bold text-muted-foreground">Foto 2</div>
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded flex items-center justify-center font-bold text-muted-foreground">Foto 3</div>
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded flex items-center justify-center font-bold text-muted-foreground">Foto 4</div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

        </div>
      </div>
      <CommentSection pageId="rumah-adat" />
    </div>
  );
}
