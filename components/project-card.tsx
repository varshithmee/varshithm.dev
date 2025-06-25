"use client";
import { ArrowRightIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProjectCard({
	name,
	description,
	image,
	video,
	playbackRate,
}: {
	name: string;
	description: string;
	image?: string;
	video?: string;
	playbackRate?: number;
}) {
	const router = useRouter();
	const [isHovered, setIsHovered] = useState(false);
	const [cardCoords, setCardCoords] = useState({
		x: 0,
		y: 0,
	});

	const videoRef = useRef<HTMLVideoElement | null>(null);
	const isInView = useInView(videoRef);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = playbackRate || 3;

			if (isInView) {
				videoRef.current.play();
			} else {
				videoRef.current.pause();
			}
		}
	}, [playbackRate, isInView]);

	const cardRef = useRef<HTMLElement | null>(null);

	const handleClick = () => {
		const slug = name.toLowerCase().replace(/\s+/g, "-");
		router.push(`/projects/${slug}`);
	};

	return (
		<main className="w-[calc(50%-10px)] flex flex-col items-start justify-center">
			<section
				className=" w-full  aspect-video  flex items-center justify-center rounded-2xl bg-white/10 "
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
				<div className="w-full h-full flex items-center justify-center rounded-[inherit] relative overflow-hidden m-0  ">
					<div
						className={`blur-3xl absolute z-20 size-[200px] rounded-full bg-white ${
							isHovered ? "opacity-100 " : "opacity-0"
						} `}
						style={{
							top: isHovered ? cardCoords.y - 100 : 0,
							left: isHovered ? cardCoords.x - 100 : 0,
						}}
					/>
					<div
						className={`absolute top-[1px] left-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] z-40 bg-black/90 flex items-center rounded-[inherit] justify-center transition-opacity duration-300 ${
							isHovered ? "opacity-100" : "opacity-0"
						}`}
					>
						<motion.button
							onClick={handleClick}
							type="button"
							className="px-6 py-3 group flex items-center gap-2 bg-white text-black rounded-full font-mono font-medium hover:bg-white/90"
							animate={{
								x: isHovered
									// biome-ignore lint/style/noNonNullAssertion: <explanation>
									? (cardCoords.x - cardRef.current?.offsetWidth! / 2) * 0.2
									: 0,
								y: isHovered
									// biome-ignore lint/style/noNonNullAssertion: <explanation>
									? (cardCoords.y - cardRef.current?.offsetHeight! / 2) * 0.2
									: 0,
							}}
							transition={{
								type: "spring",
								stiffness: 150,
								damping: 15,
								mass: 0.1,
							}}
						>
							Read More
							<ArrowRightIcon className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-200" />
						</motion.button>
					</div>
					<div className="w-[calc(100%-2px)] overflow-hidden h-[calc(100%-2px)] flex items-center justify-center z-30 rounded-[inherit] bg-black ">
						{video ? (
							<video
								ref={videoRef}
								src={video}
								autoPlay
								muted
								loop
								className="w-[calc(100%-2px)] h-[calc(100%-2px)] rounded-[inherit]  object-cover"
							/>
						) : (
							<Image
								src={image || ""}
								alt={name}
								style={{
									width: "calc(100%)",
									height: "auto",
								}}
								width={1920}
								height={1080}
								className="  rounded-[inherit]"
							/>
						)}
					</div>
				</div>
			</section>
			<section className="w-full h-full p-6 pb-10 flex items-start justify-between ">
				<div className="flex gap-1 flex-col">
					<h1 className="font-serif text-4xl">{name}</h1>
					<p className="font-mono text-pretty text-base opacity-80">
						{description}
					</p>
				</div>
			</section>
		</main>
	);
}
