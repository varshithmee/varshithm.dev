"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ProjectCard from "@/components/project-card";
import "overlayscrollbars/overlayscrollbars.css";
import Wildflower from "@/components/wildflower";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export default function Home() {
	return (
		<Suspense fallback={<Loader />}>
			<main
				id="home"
				className="h-screen w-screen  flex flex-col  justify-start items-center font-serif  "
			>
				<Wildflower />
				<div className="relative flex flex-col h-[calc(100vh-300px)] min-w-full items-center ">
					<div className="fixed top-0 flex max-w-[1350px] w-full ">
						<Header />
						<div className="relative h-full w-full py-[300px] flex justify-start flex-col ">
							<section className="flex flex-row gap-4 text-[96px] leading-tight ">
								<p> Varshith</p>
								<p className="italic"> Meesala</p>
							</section>
							<section className="text-[24px] pl-2 text-white/55 flex flex-row gap-0 font-mono w-1/2 h-fit flex-wrap ">
								Hey! I'm
								<span className="pl-3 text-white underline decoration-blue-900 ">
									Varshith
								</span>
								, a full-stack engineer
								<span className="">with a passion for </span>
								<span className="pl-3 text-white underline decoration-blue-900">
									problem solving.
								</span>
							</section>
						</div>
					</div>
				</div>

				<section
					id="project-section"
					className="w-screen min-h-screen flex flex-col py-[calc(100vh-300px)] items-center relative  z-[998]"
				>
					<div className="w-screen flex flex-col items-center relative">
						<div
							id="project-gradient"
							className="  w-screen min-h-36 bg-gradient-to-t from-black via-black/70 to-transparent  "
						/>
						<div
							id="project-gradient"
							className=" absolute top-36 w-screen min-h-36 bg-gradient-to-b from-black via-black/70 to-transparent  "
						/>

						<div className="w-screen bg-black/20 backdrop-blur-xl flex flex-row items-start pt-5 justify-center">
							<div className="w-full max-w-[1350px] flex flex-row flex-wrap gap-5  ">
								<ProjectCard
									name={"Rally"}
									image="/rally_mockup.png"
									description="A mobile app where you can get matched with your perfect sportsmate and teams and organize events."
								/>
								<ProjectCard
									name={"Sindy"}
									image="/sindy_mockup.png"
									description="An enterprise level edTech assistant that allows educators to focus only on teaching their students."
								/>
								<ProjectCard
									name={"Clover"}
									image="/clover_mockup.png"
									description="An incredibly useful tool to help apply for jobs by adjusting your resume and cover letter to the jobs needs."
								/>
								<ProjectCard
									name={"Realtime Algorithms"}
									video="/visualizerGif.mp4"
									description="An app where you can visualize your favourite algorithms in realtime using clean animations."
								/>
							</div>
						</div>
					</div>
					<div className="w-full bg-black/50 backdrop-blur-2xl flex flex-row items-center justify-center">
						<div className="min-h-[0.5px] w-[1350px]  bg-gradient-to-r from-transparent via-white to-transparent" />
					</div>
					<Footer />
				</section>
			</main>
		</Suspense>
	);
}
