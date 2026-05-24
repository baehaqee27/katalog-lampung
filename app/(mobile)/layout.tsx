import React from "react";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-background text-foreground shadow-xl overflow-hidden flex flex-col relative border-x border-border">
      {children}
    </div>
  );
}
