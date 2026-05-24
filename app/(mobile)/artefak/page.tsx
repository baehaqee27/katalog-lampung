import Image from "next/image";
import { BackButton } from "@/components/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crown, Info, LayoutTemplate, Image as ImageIcon } from "lucide-react";
import { CommentSection } from "@/components/CommentSection";

export default function ArtefakPage() {
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
              Seni Budaya
            </Badge>
            <h1 className="text-4xl font-black text-accent-foreground tracking-tight uppercase leading-none mb-3">
              Siger & Tapis
            </h1>
            <p className="text-accent-foreground/90 font-medium max-w-[90%]">
              Simbol keagungan martabat perempuan Lampung.
            </p>
          </div>
        </div>

        <div className="px-5 py-6 flex-1 flex flex-col gap-6">
          <Tabs defaultValue="3d" className="w-full">
            <TabsList className="grid w-full grid-cols-3 border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-background h-12 mb-4">
              <TabsTrigger value="3d" className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none border-r-[3px] border-foreground last:border-r-0"><Crown className="w-4 h-4 mr-2 hidden sm:block" /> 3D View</TabsTrigger>
              <TabsTrigger value="info" className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none border-r-[3px] border-foreground last:border-r-0"><Info className="w-4 h-4 mr-2 hidden sm:block" /> Info</TabsTrigger>
              <TabsTrigger value="galeri" className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none"><ImageIcon className="w-4 h-4 mr-2 hidden sm:block" /> Galeri</TabsTrigger>
            </TabsList>
            
            <TabsContent value="3d">
              <div className="w-full aspect-video bg-muted rounded-xl overflow-hidden border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative group">
                <iframe 
                  title="Lampung Siger Tower" 
                  className="w-full h-full"
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; fullscreen; xr-spatial-tracking" 
                  src="https://sketchfab.com/models/175bafa10b364a458550678ab40dfa0e/embed?autostart=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0"
                />
                <div className="absolute bottom-3 right-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                   <Badge variant="outline" className="bg-background/90 text-foreground border-[2px] border-foreground font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                     Model 3D (Bisa Digeser)
                   </Badge>
                </div>
              </div>
              <p className="text-[11px] font-bold text-muted-foreground text-center mt-3">
                <a href="https://sketchfab.com/3d-models/lampung-siger-tower-175bafa10b364a458550678ab40dfa0e" target="_blank" rel="nofollow" className="hover:text-primary transition-colors">Lampung Siger Tower</a> by <a href="https://sketchfab.com/gits3d" target="_blank" rel="nofollow" className="hover:text-primary transition-colors">giga</a> on Sketchfab
              </p>
            </TabsContent>

            <TabsContent value="info">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="p-5 space-y-4">
                  <h3 className="font-black text-foreground uppercase border-b-2 border-foreground pb-2">Filosofi Siger</h3>
                  <p className="text-foreground font-medium leading-relaxed text-sm">
                    Siger adalah mahkota adat yang dikenakan perempuan Lampung. Bentuk lekuk (pucuk) Siger melambangkan marga atau kedudukan adat. Biasanya berjumlah 7 (Saibatin) atau 9 (Pepadun).
                  </p>
                  <h3 className="font-black text-foreground uppercase border-b-2 border-foreground pb-2 mt-4">Kain Tapis</h3>
                  <p className="text-foreground font-medium leading-relaxed text-sm">
                    Kain tenun berhias sulaman benang emas hasil mahakarya tangan penenun lokal. Motif Tapis mengambil inspirasi dari alam dan filosofi ketuhanan.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="galeri">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded-lg overflow-hidden relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02] transition-transform">
                    <Image src="/sigertapis/siger.png" alt="Siger Lampung" fill className="object-cover" sizes="(max-width: 768px) 50vw, 250px" />
                  </div>
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded-lg overflow-hidden relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02] transition-transform">
                    <Image src="/sigertapis/tapis.jfif" alt="Kain Tapis 1" fill className="object-cover" sizes="(max-width: 768px) 50vw, 250px" />
                  </div>
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded-lg overflow-hidden relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02] transition-transform">
                    <Image src="/sigertapis/tapis1.webp" alt="Kain Tapis 2" fill className="object-cover" sizes="(max-width: 768px) 50vw, 250px" />
                  </div>
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded-lg overflow-hidden relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02] transition-transform">
                    <Image src="/sigertapis/tapis2.jpg" alt="Kain Tapis 3" fill className="object-cover" sizes="(max-width: 768px) 50vw, 250px" />
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <CommentSection pageId="artefak" />
    </div>
  );
}
