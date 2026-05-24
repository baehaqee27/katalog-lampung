import Image from "next/image";
import { BackButton } from "@/components/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Info, LayoutTemplate, Image as ImageIcon } from "lucide-react";
import { CommentSection } from "@/components/CommentSection";

export default function WayKambasPage() {
  return (
    <div className="flex flex-col flex-1 bg-background min-h-screen">
      <div className="sticky top-0 z-50 bg-background border-b-[3px] border-foreground px-4 py-3">
        <BackButton />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Brutalist Hero */}
        <div className="bg-secondary px-6 py-10 border-b-[3px] border-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/10 rounded-bl-full pointer-events-none" />
          <div className="relative z-10">
            <Badge variant="outline" className="mb-4 bg-background text-foreground border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
              Pariwisata / Alam
            </Badge>
            <h1 className="text-4xl font-black text-secondary-foreground tracking-tight uppercase leading-none mb-3">
              Taman Nasional Way Kambas
            </h1>
            <p className="text-secondary-foreground/90 font-medium max-w-[90%]">
              Pusat konservasi gajah Sumatera yang mendunia.
            </p>
          </div>
        </div>

        <div className="px-5 py-6 flex-1 flex flex-col gap-6">
          <div className="w-full aspect-video bg-muted rounded-xl overflow-hidden border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
            <Image 
              src="/gajahwaykambas/gajahwaykambas.jpeg" 
              alt="Gajah Way Kambas" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>

          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-3 border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-background h-12 mb-4">
              <TabsTrigger value="info" className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none border-r-[3px] border-foreground last:border-r-0"><Info className="w-4 h-4 mr-2 hidden sm:block" /> Info</TabsTrigger>
              <TabsTrigger value="flora" className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none border-r-[3px] border-foreground last:border-r-0"><LayoutTemplate className="w-4 h-4 mr-2 hidden sm:block" /> Satwa</TabsTrigger>
              <TabsTrigger value="galeri" className="font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-none"><ImageIcon className="w-4 h-4 mr-2 hidden sm:block" /> Galeri</TabsTrigger>
            </TabsList>
            
            <TabsContent value="info">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="p-5 space-y-4">
                  <p className="text-foreground font-medium leading-relaxed text-sm">
                    Taman Nasional Way Kambas (TNWK) adalah taman nasional perlindungan alam yang terletak di daerah Lampung Timur, Indonesia.
                  </p>
                  <p className="text-foreground font-medium leading-relaxed text-sm">
                    TNWK sangat terkenal sebagai pusat pelatihan dan konservasi Gajah Sumatera (Elephas maximus sumatranus) pertama di Indonesia.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="flora">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="p-5 space-y-5">
                  <div>
                    <h3 className="font-black text-foreground uppercase mb-1">Badak Sumatera</h3>
                    <p className="text-muted-foreground text-sm font-medium">Selain gajah, Way Kambas juga menjadi rumah bagi Suaka Badak Sumatera (Sumatran Rhino Sanctuary).</p>
                  </div>
                  <div>
                    <h3 className="font-black text-foreground uppercase mb-1">Harimau Sumatera</h3>
                    <p className="text-muted-foreground text-sm font-medium">Kawasan hutan rawa dan dataran rendah Way Kambas juga merupakan habitat alami bagi Harimau Sumatera yang langka.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="galeri">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded-lg overflow-hidden relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02] transition-transform">
                    <Image src="/gajahwaykambas/gajah1.jpeg" alt="Galeri Gajah 1" fill className="object-cover" sizes="(max-width: 768px) 50vw, 250px" />
                  </div>
                  <div className="aspect-square bg-muted border-[2px] border-foreground rounded-lg overflow-hidden relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02] transition-transform">
                    <Image src="/gajahwaykambas/gajah2.jpg" alt="Galeri Gajah 2" fill className="object-cover" sizes="(max-width: 768px) 50vw, 250px" />
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <CommentSection pageId="way-kambas" />
    </div>
  );
}
