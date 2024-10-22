import { Construction } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <main className="absolute top-[40px] inset-x-0 font-mono flex flex-row items-center justify-between h-[50px] w-full text-[14px] text-white/50 ">
      <section className="h-[20px] flex flex-row gap-1 items-center justify-start">
        <div className="relative h-full aspect-square flex items-center justify-center">
          <div className="w-1/2 h-1/2 absolute aspect-square rounded-full bg-yellow-600 " />
          <div className="w-1/2 h-1/2 absolute aspect-square rounded-full bg-yellow-600 animate-ping" />
        </div>
        <Construction />
        Under Construction
      </section>
      <section className="">AEST 00:00</section>
    </main>
  );
}
