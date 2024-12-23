"use client";

import { LockedPage } from "@/components/LockedPage/LockedPage";
// import { useState } from "react";

export default function Home() {
  // const [isLocked, setIsLocked] = useState(true);
  const unlock = () => {
    console.log("unlocked");
  };
  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen min-w-screen flex items-center justify-center bg-black">
      <LockedPage unlock={unlock} />
    </div>
  );
}
