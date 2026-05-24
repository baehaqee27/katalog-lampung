import Image from "next/image";
import { BackButton } from "@/components/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Utensils, Info, LayoutTemplate, Image as ImageIcon } from "lucide-react";
import { CommentSection } from "@/components/CommentSection";

export default function MakananPage() {
  return (
    <div className="flex flex-col flex-1 bg-background min-h-screen">
      <div className="sticky top-0 z-50 bg-background border-b-[3px] border-foreground px-4 py-3">
        <BackButton />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Brutalist Hero */}
        <div className="bg-muted px-6 py-10 border-b-[3px] border-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/10 rounded-bl-full pointer-events-none" />
          <div className="relative z-10">
            <Badge variant="outline" className="mb-4 bg-background text-foreground border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
              Kuliner Tradisional
            </Badge>
            <h1 className="text-4xl font-black text-foreground tracking-tight uppercase leading-none mb-3">
              Seruit
            </h1>
            <p className="text-foreground/90 font-medium max-w-[90%]">
              Sajian khas penuh nilai kebersamaan.
            </p>
          </div>
        </div>

        <div className="px-5 py-6 flex-1 flex flex-col gap-6">
          <div className="w-full aspect-video bg-card rounded-xl overflow-hidden border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
            <Image 
              src="/seruit/seruit.jpg" 
              alt="Seruit Khas Lampung" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>

          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-3 border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-background h-12 mb-4">
              <TabsTrigger value="info" className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none border-r-[3px] border-foreground last:border-r-0"><Info className="w-4 h-4 mr-2 hidden sm:block" /> Info</TabsTrigger>
              <TabsTrigger value="bahan" className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none border-r-[3px] border-foreground last:border-r-0"><LayoutTemplate className="w-4 h-4 mr-2 hidden sm:block" /> Bahan</TabsTrigger>
              <TabsTrigger value="galeri" className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none"><ImageIcon className="w-4 h-4 mr-2 hidden sm:block" /> Galeri</TabsTrigger>
            </TabsList>
            
            <TabsContent value="info">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="p-5 space-y-4">
                  <p className="text-foreground font-medium leading-relaxed text-sm">
                    Seruit bukan sekadar makanan, melainkan budaya "Nyeruit" (makan bersama-sama) yang melambangkan keakraban, kekeluargaan, dan gotong royong masyarakat Lampung.
                  </p>
                  <p className="text-foreground font-medium leading-relaxed text-sm">
                    Tradisi ini biasanya dilakukan pada acara-acara besar, upacara adat, atau sekadar kumpul keluarga.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bahan">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="p-5 space-y-5">
                  <div>
                    <h3 className="font-black text-foreground uppercase mb-1">Ikan Sungai</h3>
                    <p className="text-muted-foreground text-sm font-medium">Bahan utama biasanya ikan belida, baung, atau patin yang dibakar / digoreng.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-foreground uppercase mb-1">Sambal Terasi & Mangga</h3>
                    <p className="text-muted-foreground text-sm font-medium">Sambal khas yang pedas dengan campuran irisan mangga muda (kuweni) untuk rasa segar.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-foreground uppercase mb-1">Tempoyak</h3>
                    <p className="text-muted-foreground text-sm font-medium">Fermentasi buah durian yang memberikan rasa asam manis khas Sumatera.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="galeri">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded-lg overflow-hidden relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02] transition-transform">
                    <Image src="/seruit/seruit1.jpeg" alt="Galeri Seruit 1" fill className="object-cover" sizes="(max-width: 768px) 50vw, 250px" />
                  </div>
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded-lg overflow-hidden relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02] transition-transform">
                    <Image src="/seruit/seruit2.jpg" alt="Galeri Seruit 2" fill className="object-cover" sizes="(max-width: 768px) 50vw, 250px" />
                  </div>
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded-lg overflow-hidden relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02] transition-transform">
                    <Image src="/seruit/seruit3.webp" alt="Galeri Seruit 3" fill className="object-cover" sizes="(max-width: 768px) 50vw, 250px" />
                  </div>
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded-lg overflow-hidden relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02] transition-transform">
                    <Image src="/seruit/seruit4.jpg" alt="Galeri Seruit 4" fill className="object-cover" sizes="(max-width: 768px) 50vw, 250px" />
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <CommentSection pageId="makanan" />
    </div>
  );
}
