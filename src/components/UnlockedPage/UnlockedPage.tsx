"use client";

import { useEffect, useState } from "react";

export const UnlockedPage = () => {
  const [intro, setIntro] = useState(true);
  const [pics, setPics] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 2500);
  }, []);

  const ChristmasTree = (
    <div className="flex flex-col gap-8 text-white items-center">
      <div className="text-4xl font-semibold">Su Kaledom Giedre!</div>
      <img
        className={isBouncing ? "animate-bounce" : ""}
        src="christmas-tree.svg"
        onClick={() => {
          setIsBouncing(true);
          setTimeout(() => setPics(true), 1000);
        }}
        onAnimationEnd={() => setIsBouncing(false)}
        style={{ animationIterationCount: 1 }}
      />
    </div>
  );

  return intro ? <img src="dance.gif" /> : !pics ? ChristmasTree : (
    <div className="text-4xl font-semibold text-white flex flex-col gap-8">
        <div>Giedre 2024</div>
        <div>Giedre 2023</div>
        <div>Giedre 2022</div>
        <div>Giedre 2021</div>
        <div>Giedre 2020</div>
        <div>Giedre 2019</div>
        <div>Giedre 2018</div>
        <div>Giedre 2017</div>
        <div>Giedre 2016</div>
    </div>
  );
};
