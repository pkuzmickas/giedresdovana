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
        width="420vw"
      />
    </div>
  );

  return intro ? (
    <img src="dance.gif" />
  ) : !pics ? (
    ChristmasTree
  ) : (
    <div className="text-3xl font-semibold text-white flex flex-col gap-8 items-center">
      <div className="w-full h-2 bg-white" />
      <div>Ačiū už draugystę.</div>
      <div>Šį nuotraukų albumą vadinu:</div>
      <div className="font-bold italic">"P & G over the years"</div>
      <div className="w-full h-2 bg-white" />
      <div className="md:p-48 p-8 flex flex-col items-center gap-8 pt-4">
        <div>Aš ir Giedrė 2016</div>
        <img src="2016.jpg" width="100%" />
      </div>
      <div className="md:p-48 p-8 flex flex-col items-center gap-8 pt-4">
        <div>Aš ir Giedrė 2017</div>
        <img src="2017.jpg" width="100%" />
      </div>
      <div className="md:p-48 p-8 flex flex-col items-center gap-8 pt-4">
        <div>Aš ir Giedrė 2018</div>
        <div className="text-5xl font-bold">IEVA</div>
      </div>
      <div className="md:p-48 p-8 flex flex-col items-center gap-8 pt-4">
        <div>Aš ir Giedrė 2019</div>
        <img src="2019.jpg" width="100%" />
      </div>
      <div className="md:p-48 p-8 flex flex-col items-center gap-8 pt-4">
        <div>Aš ir Giedrė 2020</div>
        <img src="2020.jpg" width="100%" />
      </div>
      <div className="md:p-48 p-8 flex flex-col items-center gap-8 pt-4">
        <div>Aš ir Giedrė 2021</div>
        <img src="2021.jpg" width="100%" />
      </div>
      <div className="md:p-48 p-8 flex flex-col items-center gap-8 pt-4">
        <div>Aš ir Giedrė 2022</div>
        <img src="2022.jpg" width="100%" />
      </div>
      <div className="md:p-48 p-8 flex flex-col items-center gap-8 pt-4">
        <div>Aš ir Giedrė 2023</div>
        <img src="2023.jpg" width="100%" />
      </div>
      <div>⭐⭐⭐🎄🎄🎄🎄🎄🎄⭐⭐⭐</div>
      <div className="w-full h-2 bg-white" />
      <div className="md:p-48 p-8 flex flex-col items-center gap-8 pt-4">
        <div>Aš ir Giedrė 2024</div>
        <img src="2024.jpg" width="100%" />
      </div>
      <div className="w-full h-2 bg-white" />
      <div>⭐⭐⭐🎄🎄🎄🎄🎄🎄⭐⭐⭐</div>
    </div>
  );
};
