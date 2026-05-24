import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  Landmark,
  Crown,
  Utensils,
  ChevronRight,
  Info,
  MapPin,
  Sparkles,
  User,
  Music,
  Type,
  Coins,
  Map,
} from "lucide-react";

export default function HomePage() {
  const menus = [
    {
      title: "Nuwo Sesat",
      description: "Arsitektur panggung & ruang adat.",
      href: "/rumah-adat",
      icon: Home,
      color: "text-primary",
      bg: "bg-primary/20",
      tag: "Arsitektur",
    },
    {
      title: "Islamic Center Tubaba",
      description: "Masjid modern tanpa kubah.",
      href: "/masjid",
      icon: Landmark,
      color: "text-secondary-foreground",
      bg: "bg-secondary",
      tag: "Religi",
    },
    {
      title: "Siger & Kain Tapis",
      description: "Mahkota & tenun emas tradisional.",
      href: "/artefak",
      icon: Crown,
      color: "text-accent-foreground",
      bg: "bg-accent",
      tag: "Seni Budaya",
    },
    {
      title: "Tradisi Nyeruit",
      description: "Kelezatan hidangan sambal ikan.",
      href: "/makanan",
      icon: Utensils,
      color: "text-muted-foreground",
      bg: "bg-muted",
      tag: "Kuliner",
    },
    {
      title: "Tari Cangget",
      description: "Tarian agung pada upacara adat.",
      href: "/tari",
      icon: Music,
      color: "text-primary-foreground",
      bg: "bg-primary",
      tag: "Seni Tari",
    },
    {
      title: "T.N. Way Kambas",
      description: "Konservasi alam dan gajah sumatera.",
      href: "/way-kambas",
      icon: MapPin,
      color: "text-secondary-foreground",
      bg: "bg-secondary",
      tag: "Pariwisata",
    },
    {
      title: "Aksara Kaganga",
      description: "Warisan sistem tulisan asli Lampung.",
      href: "/aksara",
      icon: Type,
      color: "text-accent-foreground",
      bg: "bg-accent",
      tag: "Sastra",
    },
    {
      title: "Pakaian Adat",
      description: "Ragam busana tradisional Pepadun & Saibatin.",
      href: "/pakaian-adat",
      icon: User,
      color: "text-primary",
      bg: "bg-primary/20",
      tag: "Busana",
    },
    {
      title: "Mata Uang Kuno",
      description: "Sejarah uang logam bersejarah di Lampung.",
      href: "/mata-uang",
      icon: Coins,
      color: "text-secondary-foreground",
      bg: "bg-secondary",
      tag: "Sejarah",
    },
    {
      title: "Peta Provinsi",
      description: "Jelajahi batas wilayah Lampung.",
      href: "/peta",
      icon: Map,
      color: "text-accent-foreground",
      bg: "bg-accent",
      tag: "Geografi",
    },
  ];

  const highlights = [
    { title: "Siger Emas", bg: "bg-primary", icon: Crown, href: "/artefak" },
    {
      title: "Tari Cangget",
      bg: "bg-secondary",
      icon: Sparkles,
      href: "/tari",
    },
    {
      title: "Gajah Way Kambas",
      bg: "bg-accent",
      icon: MapPin,
      href: "/way-kambas",
    },
  ];

  return (
    <div className="flex flex-col flex-1 pb-10 bg-background overflow-x-hidden">
      {/* Brutalist Hero Section */}
      <div className="px-5 pt-8 pb-4">
        <Card className="bg-primary text-primary-foreground border-[3px] border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl relative overflow-hidden">
          {/* Decorative Brutalist Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary border-[3px] border-foreground rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
          <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-accent border-[3px] border-foreground rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-12" />
          <div className="absolute top-12 right-24 text-foreground/80">
            <Sparkles className="w-8 h-8 animate-pulse" />
          </div>

          <CardContent className="p-6 relative z-10">
            <Badge
              variant="outline"
              className="mb-4 bg-background text-foreground border-[2px] border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black text-xs uppercase"
            >
              Tugas Presentasi
            </Badge>
            <h1 className="text-4xl font-black mb-4 tracking-tighter uppercase leading-[1.1] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Katalog
              <br />
              Budaya
              <br />
              Lampung
            </h1>
            <div className="bg-background/95 text-foreground p-3 rounded-lg border-[2px] border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] max-w-[90%]">
              <p className="text-xs font-bold leading-relaxed">
                Jelajahi keindahan, kekayaan, dan pesona warisan budaya Provinsi
                Lampung secara interaktif.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Carousel Highlight Section */}
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold tracking-tight">Sorotan Budaya</h2>
          <Badge
            variant="secondary"
            className="font-bold border-2 border-foreground"
          >
            Populer
          </Badge>
        </div>
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-2">
            {highlights.map((item, i) => (
              <CarouselItem key={i} className="pl-2 basis-[80%]">
                <Link
                  href={item.href}
                  className="block active:scale-95 transition-transform touch-manipulation"
                >
                  <div
                    className={`p-1 border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg ${item.bg}`}
                  >
                    <Card className="border-0 bg-transparent shadow-none pointer-events-none">
                      <CardContent className="flex flex-col items-center justify-center aspect-video p-6">
                        <item.icon className="w-12 h-12 mb-3 text-foreground" />
                        <span className="font-bold text-foreground bg-background px-3 py-1 border-2 border-foreground rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          {item.title}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <Separator className="my-2 border-foreground border-t-2" />

      {/* Menu Section */}
      <div className="px-5 py-4 flex-1 flex flex-col gap-5">
        <h2 className="text-xl font-bold tracking-tight">Eksplorasi Katalog</h2>
        <div className="grid grid-cols-1 gap-4">
          {menus.map((menu, index) => (
            <Link href={menu.href} key={index} className="block group">
              <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-card text-card-foreground">
                <CardHeader className="p-4 pb-2 flex flex-row items-center gap-4 space-y-0 relative">
                  <div
                    className={`p-3 rounded-lg border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${menu.bg} ${menu.color} flex-shrink-0`}
                  >
                    <menu.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-black uppercase">
                      {menu.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="mt-1 text-[10px] uppercase font-bold border-foreground"
                    >
                      {menu.tag}
                    </Badge>
                  </div>
                  <ChevronRight className="w-6 h-6 text-foreground absolute right-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </CardHeader>
                <CardContent className="px-4 pb-4 pt-1">
                  <CardDescription className="text-sm font-medium text-foreground/80 leading-relaxed">
                    {menu.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Separator className="my-2 border-foreground border-t-2" />

      {/* Fakta Unik (Accordion) */}
      <div className="px-5 py-4">
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold tracking-tight">Tahukah Anda?</h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full border-[3px] border-foreground rounded-lg bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
        >
          <AccordionItem
            value="item-1"
            className="border-b-[3px] border-foreground px-4"
          >
            <AccordionTrigger className="font-bold hover:no-underline hover:text-primary transition-colors text-left">
              Falsafah Piil Pesenggiri
            </AccordionTrigger>
            <AccordionContent className="text-foreground font-medium text-sm leading-relaxed pb-4">
              Piil Pesenggiri adalah pedoman hidup masyarakat Lampung yang
              mengajarkan tentang harga diri, gotong royong, dan keramahan
              terhadap tamu.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-b-[3px] border-foreground px-4"
          >
            <AccordionTrigger className="font-bold hover:no-underline hover:text-primary transition-colors text-left">
              Aksara Kaganga
            </AccordionTrigger>
            <AccordionContent className="text-foreground font-medium text-sm leading-relaxed pb-4">
              Lampung adalah salah satu dari sedikit daerah di Indonesia yang
              memiliki aksara sendiri, dikenal dengan nama Had Lampung atau
              aksara Kaganga.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-0 px-4">
            <AccordionTrigger className="font-bold hover:no-underline hover:text-primary transition-colors text-left">
              Bumi Ruwa Jurai
            </AccordionTrigger>
            <AccordionContent className="text-foreground font-medium text-sm leading-relaxed pb-4">
              Julukan ini berarti dua golongan masyarakat yang bersatu (Pepadun
              dan Saibatin) dalam satu kesatuan wilayah Provinsi Lampung.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Footer / Presenter Profile */}
      <div className="px-5 pt-4 pb-8 mt-4">
        <Card className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-ring p-4 flex flex-row items-center gap-4">
          <Link
            href="https://www.instagram.com/rzlbaihaqi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar className="w-12 h-12 border-[3px] border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform cursor-pointer">
              <AvatarImage
                src="/keyy.jpeg"
                alt="Keysha Sudrajat Puteri"
                className="object-cover"
              />
              <AvatarFallback className="bg-background text-foreground font-black">
                <User className="w-6 h-6" />
              </AvatarFallback>
            </Avatar>
          </Link>
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">
              Presented By
            </p>
            <Link
              href="https://www.instagram.com/rzlbaihaqi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-black text-foreground hover:underline hover:text-secondary transition-colors"
            >
              Keysha Sudrajat Puteri
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
