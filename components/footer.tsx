import { ArrowUpRight } from "lucide-react";
import HyperText from "@/components/ui/hyper-text";
import Link from "next/link"
import LetterSwapPingPong from "@/fancy/components/text/letter-swap-pingpong-anim"


export default function Footer() {
	return (
		<footer className="relative w-screen flex flex-col items-center justify-center p-16 pt-36 z-[20] ">
			<div className="w-full h-full absolute top-0 left-0 bg-transparent backdrop-blur-xl z-40" />
			<main className="flex flex-col w-full max-w-[1350px] gap-12 z-50 font-mono  ">
				<section className="flex flex-row justify-between">
					<div className="flex flex-col">
						<h1 className="font-serif  text-3xl">Get In Touch</h1>
						<Link href="mailto:varshith.meesala@gmail.com" ><LetterSwapPingPong label="varshith.meesala@gmail.com" className="font-mono opacity-50  cursor-pointer" /></Link>
					</div>

					<div className="flex flex-col items-end justify-end text-2xl">

						<Link className="flex flex-row gap-2 items-center justify-center hover:underline cursor-pointer" href="https://linkedin.com/in/vmeesala7" > <HyperText text={"LinkedIn"} /> <ArrowUpRight /> </Link>

						<Link className="flex flex-row gap-2 items-center justify-center hover:underline cursor-pointer" href="https://github.com/varshithmee" > <HyperText text={"Github"} /> <ArrowUpRight /> </Link>
					</div>
				</section>

				<section className="flex flex-row items-center justify-between text-lg">
					<span>@ {(new Date()).getFullYear()} Varshith Meesala</span>
					<span>Let's solve a problem 🫡</span>
					<span>Melbourne, Australia</span>
				</section>
			</main>
		</footer>
	);
}
