import {ArrowUpRight} from "lucide-react";
import HyperText from "@/components/ui/hyper-text";

export default function Footer() {
	return (
		<footer className="relative w-screen flex flex-col items-center justify-center p-16 pt-36 z-[20] ">
			<div className="w-full h-full absolute top-0 left-0 bg-black z-40" />
			<div className="w-full  flex flex-row items-center justify-center">
				<div className="min-h-[1px] w-[1350px]  bg-gradient-to-r from-transparent via-white to-transparent" />
			</div>
			<main className="flex flex-col w-full max-w-[1350px] gap-12 z-50 font-mono  ">
				<section className="flex flex-row justify-between">
					<div className="flex flex-col">
						<h1 className="font-serif  text-3xl">Get In Touch</h1>
						<span className="font-mono flex flex-row items-center justify-center gap-1 text-lg opacity-50 cursor-pointer">
							<p>varshith.meesala@gmail.com</p>
						</span>
					</div>

					<div className="flex flex-col items-end justify-end text-2xl">
						<span className="flex flex-row gap-2 items-center justify-center hover:underline cursor-pointer">
							<HyperText text={"LinkedIn"} /> <ArrowUpRight />
						</span>
						<span className="flex flex-row gap-2 items-center justify-center hover:underline cursor-pointer">
							<HyperText text={"Github"} /> <ArrowUpRight />
						</span>
					</div>
				</section>

				<section className="flex flex-row items-center justify-between text-lg">
					<span>@2024 Varshith Meesala</span>
					<span>Let's solve a problem 🫡</span>
					<span>Melbourne, Australia</span>
				</section>
			</main>
		</footer>
	);
}
