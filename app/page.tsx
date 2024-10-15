import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen flex flex-col w-full py-[300px] font-serif overflow-scroll">
      <section className="flex flex-row gap-8 text-[96px] leading-tight">
        <p> Varshith</p>
        <p className="italic"> Meesala</p>
      </section>
      <section className="text-[24px] text-white/55 flex flex-row gap-0 font-mono w-2/3 h-fit flex-wrap">
        Hey! I'm
        <span className="pl-3 text-white underline decoration-blue-900">Varshith</span>, a full-stack engineer 
        <span>with a passion for problem solving.</span>
      </section>

      <section className="h-[200vh] absolute top-[530px] left-0 w-full">
        <section className="w-full min-h-[600px] rounded-[30px] bg-black/95 ">
          Test
        </section>
      </section>
    </main>
  );
}
