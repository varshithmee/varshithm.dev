import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative w-screen flex flex-col items-center justify-center p-16 pt-36 z-[20] ">
            <div className="w-full h-full absolute top-0 left-0 bg-bg-black z-40" />
            <main className="flex flex-col w-full max-w-[1350px] gap-12 z-50 font-mono  ">
                <section className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <h1 className="font-serif  text-3xl">Get In Touch</h1>
                        <p className="font-mono  text-xl opacity-50 hover:animate-bounce cursor-pointer">varshith.meesala@gmail.com</p>
                    </div>

                    <div className="flex flex-col items-end justify-end text-2xl">
                        <span className="flex flex-row gap-2 items-center justify-center">LinkedIn <ArrowUpRight /></span>
                        <span className="flex flex-row gap-2 items-center justify-center">Github <ArrowUpRight /></span>

                    </div>
                </section>

                <section className="flex flex-row items-center justify-between text-lg">
                    <span>@ 2024 Varshith Meesala</span>
                    <span>Let's solve a problem 🫡</span>
                    <span>Melbourne, Australia</span>
                </section>
            </main>
        </footer>
    )
}