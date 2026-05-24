"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <Button 
      variant="ghost" 
      onClick={() => router.back()}
      className="gap-2 px-2 text-muted-foreground hover:text-foreground transition-colors"
    >
      <ArrowLeft className="w-5 h-5" />
      <span>Kembali</span>
    </Button>
  );
}
