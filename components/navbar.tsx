"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Settings, X } from "lucide-react";
import useSettingsStore from "@/lib/SettingsStore"; // Adjust path as needed

export default function Navbar() {
	const path = usePathname();
	const { theme, setTheme } = useTheme();
	const [hoverIndex, setHoverIndex] = useState<0 | 1>(path === "/" ? 0 : 1);
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);

	// Get state and actions from Zustand store
	const is3DEnabled = useSettingsStore((state) => state.is3DEnabled);
	const setIs3DEnabled = useSettingsStore((state) => state.setIs3DEnabled);

	useEffect(() => {
		setHoverIndex(path === "/" ? 0 : 1);
	}, [path]);

	const navItems = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
	];

	return (
		<nav className="fixed z-[999] left-[50%] top-[40px] text-[14px] translate-x-[-50%] flex flex-row items-center justify-start h-[50px] w-fit rounded-full py-2 px-[10px] bg-black/35 border border-accent  text-white">
			{navItems.map((item, index) => (
				<Link
					key={item.href}
					className="px-6 py-1 rounded-full relative z-10 outline-none focus:outline-none"
					href={item.href}
					onMouseEnter={() => setHoverIndex(index as 0 | 1)}
					onMouseLeave={() => setHoverIndex(path === "/" ? 0 : 1)}
				>
					{item.label}
				</Link>
			))}

			<motion.div
				className={`absolute border outline-none focus:outline-none border-accent bg-black before:bg-transparent before:bg-repeat before:bg-contain before:content-none before:absolute before:w-full before:h-full before:opacity-[0.12] ${
					hoverIndex === 0
						? "before:rounded-l-[18px]"
						: "before:rounded-r-[18px]"
				}`}
				initial={false}
				id="floating-nav"
				animate={{
					left: hoverIndex === 0 ? "10px" : "94px",
					width: hoverIndex === 0 ? "84px" : "88px",
					borderRadius:
						hoverIndex === 0 ? "18px 8px 8px 18px" : "8px 18px 18px 8px",
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
