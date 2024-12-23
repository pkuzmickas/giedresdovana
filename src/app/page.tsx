"use client";

import { LockedPage } from "@/components/LockedPage/LockedPage";
import { useState } from "react";

export default function Home() {
  const [isLocked, setIsLocked] = useState(true);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const unlock = () => {
    console.log("unlocked");
    setIsLocked(false);
  };
  const incorrect = () => {
    setIsIncorrect(true);
  };
  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen min-w-screen flex items-center justify-center bg-black flex-col">
      {isLocked ? <LockedPage incorrect={incorrect} unlock={unlock} /> : <h1>unlocked!</h1>}
      {isIncorrect && <div className="text-red-700">incorrect!</div>}
    </div>
  );
}
