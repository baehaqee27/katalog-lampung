import { BackButton } from "@/components/BackButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CommentSection } from "@/components/CommentSection";
import { Map } from "lucide-react";

export default function PetaPage() {
  return (
    <div className="flex flex-col flex-1 bg-background min-h-screen">
      <div className="sticky top-0 z-50 bg-background border-b-[3px] border-foreground px-4 py-3">
        <BackButton />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Brutalist Hero */}
        <div className="bg-accent px-6 py-10 border-b-[3px] border-foreground relative overflow-hidden text-accent-foreground">
          <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/10 rounded-bl-full pointer-events-none" />
          <div className="relative z-10">
            <Badge variant="outline" className="mb-4 bg-background text-foreground border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold uppercase">
              Peta Interaktif
            </Badge>
            <h1 className="text-4xl font-black tracking-tight uppercase leading-none mb-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Peta Lampung
            </h1>
            <p className="font-medium max-w-[90%] text-foreground/80">
              Jelajahi batas wilayah Sai Bumi Ruwa Jurai.
            </p>
          </div>
        </div>

        <div className="px-5 py-6 flex-1 flex flex-col gap-6">
          <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="bg-primary px-4 py-3 border-b-[3px] border-foreground flex items-center gap-2">
              <Map className="w-5 h-5 text-primary-foreground" />
              <h2 className="font-black text-primary-foreground uppercase tracking-wide">Peta Satelit & Wilayah</h2>
            </div>
            <CardContent className="p-0">
              <div className="w-full aspect-[4/5] sm:aspect-video relative bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1945568.3341300257!2d103.64199677308186!3d-4.929971095606862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b760153ac22a7%3A0x8f3b58c75f89b09a!2sLampung!5e0!3m2!1sid!2sid!4v1779617452154!5m2!1sid!2sid"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="p-5 space-y-4">
              <p className="text-foreground font-medium leading-relaxed text-sm">
                Provinsi Lampung terletak di ujung paling selatan Pulau Sumatera, berbatasan langsung dengan Provinsi Sumatera Selatan dan Bengkulu di utara.
              </p>
              <p className="text-foreground font-medium leading-relaxed text-sm">
                Garis batas berwarna merah pada peta menunjukkan wilayah daratan Provinsi Lampung yang mencakup garis pantai yang panjang, pegunungan, hingga kepulauan di Teluk Lampung.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <CommentSection pageId="peta" />
    </div>
  );
}
