"use client";

import { LockedPage } from "@/components/LockedPage/LockedPage";
import { UnlockedPage } from "@/components/UnlockedPage/UnlockedPage";
import { useState } from "react";

export default function Home() {
  const [isLocked, setIsLocked] = useState(true);
  const unlock = () => {
    console.log("unlocked");
    setIsLocked(false);
  };
  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen min-w-screen flex items-center justify-center bg-black flex-col gap-8">
      {isLocked ? (
        <LockedPage unlock={unlock} />
      ) : (
        <UnlockedPage />
      )}
      
    </div>
  );
}
