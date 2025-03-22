"use client";

import Footer from "@/components/footer";
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";

export default function ErrorPage() {
	return (
		<OverlayScrollbarsComponent
			defer
			options={{
				scrollbars: {
					theme: "os-theme-dark",
				},
			}}
		>
			<main className="h-screen w-screen flex flex-col  justify-start items-center  ">
				<section className={"w-full min"}>
					<div className="flex items-center justify-center min-w-screen overflow-hidden   text-[512px] font-bold  z-[40]">
						404
					</div>
				</section>
				<Footer />
			</main>
		</OverlayScrollbarsComponent>
	);
}
