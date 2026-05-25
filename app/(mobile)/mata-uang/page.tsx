import Image from "next/image";
import { BackButton } from "@/components/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, LayoutTemplate, Image as ImageIcon, Coins } from "lucide-react";
import { CommentSection } from "@/components/CommentSection";

export default function MataUangPage() {
  return (
    <div className="flex flex-col flex-1 bg-background min-h-screen">
      <div className="sticky top-0 z-50 bg-background border-b-[3px] border-foreground px-4 py-3">
        <BackButton />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Brutalist Hero */}
        <div className="bg-secondary px-6 py-10 border-b-[3px] border-foreground relative overflow-hidden text-secondary-foreground">
          <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/10 rounded-bl-full pointer-events-none" />
          <div className="relative z-10">
            <Badge
              variant="outline"
              className="mb-4 bg-background text-foreground border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold uppercase"
            >
              Artefak Sejarah
            </Badge>
            <h1 className="text-4xl font-black tracking-tight uppercase leading-none mb-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Mata Uang Kuno
            </h1>
            <p className="font-medium max-w-[90%] text-foreground/80">
              Jejak pertukaran dan perdagangan kuno Nusantara.
            </p>
          </div>
        </div>

        <div className="px-5 py-6 flex-1 flex flex-col gap-6">
          <div className="w-full aspect-video bg-muted flex items-center justify-center rounded-xl overflow-hidden border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
            <Image
              src="/mata-uang/uangkuno1.jpg"
              alt="Mata Uang Kuno"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>

          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-2 border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-background h-12 mb-4">
              <TabsTrigger
                value="info"
                className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none border-r-[3px] border-foreground"
              >
                <Info className="w-4 h-4 mr-2 hidden sm:block" /> Info Sejarah
              </TabsTrigger>
              <TabsTrigger
                value="galeri"
                className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none"
              >
                <ImageIcon className="w-4 h-4 mr-2 hidden sm:block" /> Galeri
                Artefak
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="p-5 space-y-4">
                  <p className="text-foreground font-medium leading-relaxed text-sm">
                    Sebagai wilayah perdagangan lada yang sibuk pada masa lalu,
                    Lampung memiliki banyak temuan artefak berupa mata uang
                    kuno, baik dari masa Kesultanan Banten, uang logam VOC,
                    maupun koin-koin Tiongkok (kepeng).
                  </p>
                  <p className="text-foreground font-medium leading-relaxed text-sm">
                    Uang koin ini tidak hanya berfungsi sebagai alat tukar,
                    tetapi oleh masyarakat lokal lampau sering kali dirangkai
                    menjadi hiasan atau bagian dari pakaian adat penari.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="galeri">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded-lg overflow-hidden relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02] transition-transform">
                    <Image src="/mata-uang/uangkuno1.jpg" alt="Galeri Koin 1" fill className="object-cover" sizes="(max-width: 768px) 50vw, 250px" />
                  </div>
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded-lg overflow-hidden relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02] transition-transform">
                    <Image src="/mata-uang/uangkuno2.jpg" alt="Galeri Koin 2" fill className="object-cover" sizes="(max-width: 768px) 50vw, 250px" />
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <CommentSection pageId="mata-uang" />
    </div>
  );
}
