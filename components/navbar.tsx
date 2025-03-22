"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Settings, X } from "lucide-react";


export default function Navbar() {
  const path = usePathname();

  const [hoverIndex, setHoverIndex] = useState<0 | 1>(path === "/" ? 0 : 1);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [is3DEnabled, setIs3DEnabled] = useState(true);

  useEffect(() => {
    setHoverIndex(path === "/" ? 0 : 1)
  }, [path])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="fixed z-[999] left-[50%] top-[40px] text-[14px] translate-x-[-50%] flex flex-row items-center justify-start h-[50px] w-fit rounded-full py-2 px-[10px] bg-black/35 border border-accent  text-white">
      {navItems.map((item, index) => (
        <Link
          key={item.href}
          className="px-6 py-1 rounded-full relative z-10"
          href={item.href}
          onMouseEnter={() => setHoverIndex(index as 0 | 1)}
          onMouseLeave={() => setHoverIndex(path === "/" ? 0 : 1)}
        >
          {item.label}
        </Link>
      ))}

      <motion.div
        className={`absolute border  border-accent bg-black before:bg-transparent before:bg-repeat before:bg-contain before:content-none before:absolute before:w-full before:h-full before:opacity-[0.12] ${hoverIndex === 0
            ? "before:rounded-l-[18px]"
            : "before:rounded-r-[18px]"
          }`}
        initial={false}
        id="floating-nav"
        animate={{
          left: hoverIndex === 0 ? "10px" : "94px",
          width: hoverIndex === 0 ? "84px" : "88px",
          borderRadius: hoverIndex === 0
            ? "18px 8px 8px 18px"
            : "8px 18px 18px 8px",
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

      <div className="h-[33px] min-w-[1px] mx-6  bg-gradient-to-t from-transparent via-white to-transparent" />

      <button
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        className="size-8 mr-3 relative flex items-center justify-center rounded-full  hover:bg-white/10 hover:border hover:border-white/10 transition-colors"
      >
        <AnimatePresence mode="wait">
          {isSettingsOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0.5}}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="size-5 stroke-1" />
            </motion.div>
          ) : (
            <motion.div
              key="settings"
              initial={{ rotate: -90, opacity: 0.5 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Settings className="size-5 stroke-1" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>


      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div
            id="settings-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute right-0 top-[60px] w-[200px] p-4 rounded-xl border border-accent bg-black/35 will-change-transform"
          >
            <div className="space-y-4 w-full h-full ">
              <div className="flex items-center rounded-full justify-between">
                <span>3D Objects</span>
                <button
                  id="floating-toggle"
                  onClick={() => setIs3DEnabled(!is3DEnabled)}
                  className={`w-14 h-7 rounded-full p-2 transition-colors relative ${is3DEnabled === true ? 'bg-black/35' : 'bg-black'
                    }`}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full bg-white absolute top-1 left-1"
                    animate={{ x: is3DEnabled === true ? 26 : 2 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span>Dark Mode</span>
                <button
                  id="floating-toggle"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={`w-14 h-7 rounded-full p-2 transition-colors relative ${theme === "dark" ? 'bg-black/35' : 'bg-black'
                    }`}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full bg-white absolute top-1 left-1"
                    animate={{ x: theme === "dark" ? 26 : 2 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
