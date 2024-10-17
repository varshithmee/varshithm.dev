import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen flex flex-col justidy-start items-center  w-screen font-serif overflow-scroll overflow-x-hidden">
      <div className="z-20 relative bg-blue-200 flex flex-col h-[calc(100vh-300px)] w-full items-center ">
        {/* <div className="absolute top-0  flex max-w-[1350px] w-full ">
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
        </div> */}
      </div>

      <section className="w-screen  flex flex-col bg-white">
          hello
          <p>hjello</p>
          <p>hjello</p>
          <p>hjello</p>
          <p>hjello</p>
          <p>hjello</p>
          <p>hjello</p>
          <p>hjello</p>
          <p>hjello</p>
          <p>hjello</p>
          <p>hjello</p>
          <p>hjello</p>
      </section>

      
    </main>
  );
}
