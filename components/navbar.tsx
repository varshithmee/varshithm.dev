"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"; 
import { useTheme } from "next-themes";

export default function Navbar() {
  const path = usePathname();

  const [hoverIndex, setHoverIndex] = useState<0 | 1 | 2>(path === "/" ? 0 : path === "/about" ? 1 : 2);

  useEffect(() => {
    setHoverIndex(path === "/" ? 0 : path === "/about" ? 1 : 2)
  }, [path])
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
  ];

  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed z-[999] left-[50%] top-[40px] text-[14px] translate-x-[-50%] flex flex-row items-center justify-start h-[50px] w-fit rounded-full py-2 px-[10px] bg-black/35 border border-accent text-white">
      {navItems.map((item, index) => (
        <Link
          key={item.href}
          className="px-6 py-1 rounded-full relative z-10"
          href={item.href}
          onMouseEnter={() => setHoverIndex(index as 0 | 1 | 2)}
          onMouseLeave={() => setHoverIndex(path === "/" ? 0 : path === "/about" ? 1 : 2)}
        >
          {item.label}
        </Link>
      ))}

      <motion.div
        className={` absolute border border-accent bg-background  before:bg-transparent before:bg-repeat before:bg-contain before:content-none before:absolute before:w-full before:h-full before:opacity-[0.12] ${
          hoverIndex === 0
            ? "before:rounded-l-[18px]"
            : hoverIndex === 2
            ? "before:rounded-r-[18px]"
            : "before:rounded-[8px]"
        }`}
        initial={false}
        id="floating-nav"
        animate={{
          left: hoverIndex === 0 ? "10px" : hoverIndex === 1 ? "94px" : "184px",
          width:
            hoverIndex === 1 ? "88px" : hoverIndex === 0 ? "84px" : "126px",
          borderRadius:
            hoverIndex === 0
              ? "18px 8px 8px 18px"
              : hoverIndex === 2
              ? "8px 18px 18px 8px"
              : "8px",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          duration: 600,
        }}
        style={{
          height: "33px",
          zIndex: 1,
        }}
      />
    </nav>
  );
}
