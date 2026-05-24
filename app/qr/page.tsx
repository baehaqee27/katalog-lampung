"use client";

import QRCode from "react-qr-code";
import { Printer, ArrowLeft, QrCode } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function QRPage() {
  const [url, setUrl] = useState("https://katalog-lampung.vercel.app/");

  useEffect(() => {
    setUrl("https://katalog-lampung.vercel.app/");
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden print:p-0 print:bg-white">
        
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:32px_32px] print:hidden"></div>

        {/* Navigation & Controls */}
        <div className="w-full max-w-4xl flex justify-between items-center mb-6 md:mb-10 z-10 print:hidden">
          <Link href="/">
            <Button variant="outline" className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white text-foreground font-black uppercase transition-all flex gap-2">
              <ArrowLeft className="w-5 h-5" />
              Kembali
            </Button>
          </Link>

          <Button 
            onClick={handlePrint}
            className="border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-secondary text-secondary-foreground hover:bg-secondary/90 font-black uppercase transition-all flex gap-2"
          >
            <Printer className="w-5 h-5" />
            Print
          </Button>
        </div>

        {/* Main QR Card */}
        <div className="z-10 w-full max-w-[360px] md:max-w-md lg:max-w-lg">
          <div className="relative w-full">
            
            {/* Floating 'SCAN ME' badge */}
            <div className="absolute -top-5 -right-4 md:-top-8 md:-right-8 bg-secondary border-[3px] md:border-[4px] border-foreground p-3 md:p-4 rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20">
              <div className="flex items-center gap-2">
                <QrCode className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-black text-lg md:text-2xl uppercase tracking-wider">SCAN ME!</span>
              </div>
            </div>

            <Card className="bg-white border-[4px] md:border-[6px] border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col w-full">
              
              {/* Header Section */}
              <div className="bg-primary p-8 md:p-10 flex flex-col items-center justify-center border-b-[4px] md:border-b-[6px] border-foreground">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-primary-foreground text-center leading-none drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  Katalog
                  <br />
                  Digital
                </h1>
                <div className="bg-foreground text-background px-4 py-1.5 md:py-2 mt-5 -rotate-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                  <p className="text-sm md:text-lg lg:text-xl font-bold uppercase tracking-widest whitespace-nowrap">
                    Budaya Lampung
                  </p>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col items-center bg-white">
                <div className="bg-white p-4 md:p-6 rounded-2xl border-[4px] md:border-[6px] border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="relative w-full max-w-[200px] md:max-w-[280px] aspect-square">
                    <QRCode
                      value={url}
                      size={280}
                      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                      viewBox={`0 0 256 256`}
                      level="H"
                      fgColor="#000000"
                      bgColor="#ffffff"
                    />
                  </div>
                </div>
                
                <div className="mt-8 md:mt-12 bg-muted/30 px-6 py-3 rounded-lg border-[3px] border-foreground border-dashed">
                  <p className="font-black text-sm md:text-lg lg:text-xl tracking-wider text-center text-foreground uppercase">
                    Arahkan Kamera HP Anda
                  </p>
                </div>
              </div>

            </Card>
          </div>
        </div>
        
      </div>
    </>
  );
}
