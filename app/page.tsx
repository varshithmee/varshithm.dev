import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-start items-center  min-w-screen font-serif  ">
      <div className="z-20 relative flex flex-col h-[calc(100vh-300px)] w-full items-center ">
        <div className="fixed top-0  flex max-w-[1350px] w-full ">
          <Header />
          <div className="relative h-full w-full py-[300px] flex justify-start flex-col">
            <section className="flex flex-row gap-4 text-[96px] leading-tight">
              <p> Varshith</p>
              <p className="italic"> Meesala</p>
            </section>
            <section className="text-[24px] pl-2 text-white/55 flex flex-row gap-0 font-mono w-1/2 h-fit flex-wrap">
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

      <section id="project-section" className="w-screen h-screen flex flex-col items-center  z-[998]">
        <div className="w-screen h-32 bg-gradient-to-t from-background to-transparent "/>
        <div className="w-screen h-screen bg-background" />
          
      </section>

      
    </main>
  );
}
