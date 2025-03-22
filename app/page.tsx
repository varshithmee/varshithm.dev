"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProjectCard from "@/components/project-card";
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import Wildflower from "@/components/wildflower";

export default function Home() {
	return (
		<OverlayScrollbarsComponent
			defer
			options={{
				scrollbars: {
					theme: "os-theme-dark",
				},
			}}
		>
			<main
				id="home"
				className="h-screen w-screen flex flex-col  justify-start items-center font-serif  "
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
								, a frontend engineer
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
					className="w-screen min-h-screen flex flex-col py-[calc(100vh-300px)] items-center  z-[998]"
				>
					<div
						id="project-gradient"
						className="relative w-screen min-h-36 bg-gradient-to-t from-black via-black/70 to-transparent "
					/>
					<div className="w-screen bg-black flex flex-row items-start pt-5 justify-center">
						<div className="w-full max-w-[1350px] flex flex-row flex-wrap gap-5  ">
							<ProjectCard
								name={"Sindy"}
								description={
									"An enterprise app that acts as a teacher's assistant from automating admin work to helping students study, all by using cutting-edge natural language processing."
								}
							/>
							<ProjectCard
								name={"Hexflix"}
								description={
									"A webapp that allows anyone to buy and access modular courses from the HEX catalogue. "
								}
							/>
							<ProjectCard
								name={"Clover"}
								description={
									"An AI-powered tool to help apply for jobs at a rapid rate by producing relevant CVs and Cover Letters as well as being able to answer job specific questions."
								}
							/>
							<ProjectCard
								name={"Algorithm Visualizer"}
								description={"A simple visualizer for various algorithms."}
							/>
						</div>
					</div>

					<Footer />
				</section>
			</main>
		</OverlayScrollbarsComponent>
	);
}
