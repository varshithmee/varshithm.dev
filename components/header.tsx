"use client";

import Link from "next/link";

export default function Header() {
  return (
    <main className="absolute top-[40px] inset-x-0  flex flex-row  items-center justify-between h-[50px] w-full text-[14px] text-white/50 ">
      <section className="flex flex-row gap-3 items-center justify-start">
        Latest Visit
        <div className="py-2 px-4 rounded-full border border-accent flex">
          Melbourne, Australia
        </div>
      </section>
      <section className="">AEST 00:00</section>
    </main>
  );
}
