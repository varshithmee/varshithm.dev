"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = useState<0 | 1 | 2>(0);

  return (
    <nav className="fixed relative z-[999] left-[50%] top-[40px] text-[14px]  translate-x-[-50%] flex flex-row items-center justify-start h-[50px] w-fit rounded-full p-2 bg-black/35 border border-accent text-white">
      <Link
        className="px-6 py-1 rounded-full "
        href="/"
        onMouseEnter={() => setHoverIndex(0)}
      >
        Home
      </Link>
      <Link
        className="px-6 py-1 rounded-full"
        href="/about"
        onMouseEnter={() => setHoverIndex(1)}
      >
        About
      </Link>
      <Link
        className="px-6 py-1 rounded-full"
        href="/experience"
        onMouseEnter={() => setHoverIndex(2)}
      >
        Experience
      </Link>

      <div
        className={`border-l-[${hoverIndex === 0 ? "18px" : "8px"}] border-r-[${
          hoverIndex === 2 ? "18px" : "8px"
        }] absolute w-[${
          hoverIndex === 1 ? "88px" : "84px"
        }] bg-background before:bg-noise before:content-none before:absolute before:w-full before:h-full before:opacity-[0.12] `}
      />
    </nav>
  );
}
