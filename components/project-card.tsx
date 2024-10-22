"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ProjectCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [cardCoords, setCardCoords] = useState({
    x: 0,
    y: 0,
  });

  const cardRef = useRef<HTMLElement | null>(null);
  return (
    <main className="w-[calc(50%-10px)] flex flex-col items-start justify-center">
      <section
        className=" w-full h-full aspect-video  flex items-center justify-center rounded-2xl bg-white/10 "
        onMouseMove={(e) => {
          const cardRect = cardRef?.current?.getBoundingClientRect();
          setCardCoords({
            x: e.clientX - (cardRect ? cardRect.left : 0),
            y: e.clientY - (cardRect ? cardRect.top : 0),
          });
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={cardRef}
      >
        <div className="w-full h-full flex items-center justify-center rounded-[inherit] relative overflow-hidden  ">
          <div
            className={`blur-3xl absolute z-20 w-[200px] h-[200px] rounded-full bg-white ${
              isHovered ? "opacity-100 " : "opacity-0"
            } `}
            style={{
              top: isHovered ? cardCoords.y - 100 : 0,
              left: isHovered ? cardCoords.x - 100: 0,
            }}
          />

          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] z-30 rounded-[inherit] bg-background ">
            <Link href={"/blog/project1"} />
          </div>
        </div>
      </section>
      <section className="w-full h-full p-6 pb-10 flex items-start justify-between ">
        <div className="flex gap-2 flex-col">
          <h1 className="font-serif text-4xl">Project 1</h1>
          <p className="font-mono">
            An online multiplayer 3D chess game built with React Three Fiber,
            Socket.IO, and Zustand. Share your code to play with friends.
          </p>
        </div>
      </section>
    </main>
  );
}
