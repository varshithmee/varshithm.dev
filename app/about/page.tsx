import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import Image from "next/image";
import Footer from "@/components/footer";

interface ExperienceCardProps {
    title: string;
    company: string;
    period: string;
    description: string;
}

const ExperienceCard = ({ title, company, period, description }: ExperienceCardProps) => (
    <div id="experience-card" className="bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-[rgba(255,255,255,0.06)] transition-all">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-400 mb-2">{company} • {period}</p>
        <p className="font-mono text-sm">{description}</p>
    </div>
);

export default function About() {
    return (
        <main
            id="home"
            className="pt-[120px] w-screen min-h-screen flex flex-col justify-start items-center font-serif"
        >
            <section className="flex flex-row gap-12 p-12  leading-tight ">
                <div className="rounded-full size-40 overflow-hidden">
                    <Image src="/profile_photo.jpeg" alt="about" width={160} height={160} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col text-base w-full max-w-[300px] font-mono gap-5">
                    <h1 className="text-3xl font-serif italic font-medium leading-none "> How's it going? <p className="not-italic inline-block">🫡</p> </h1>
                    <p> I'm Varshith, a creative Software Engineer with a strong passion for problem solving and design instincts. </p>
                    <p> I absolutely enjoy designing and building products from scratch using cutting edge technologies.
                        I love making beautiful modern websites using NextJS and
                        ThreeJS, as well as making scalable backends using NodeJS and PostgreSQL. </p>

                    <p>I am always looking for new challenges and problems to solve. Hit me up if you wanna chat about anything!</p>
                </div>
            </section>

            {/* Experience Section */}
            <section className="w-full max-w-4xl p-12">
                <h2 className="text-3xl font-serif italic font-medium mb-8">Experience</h2>
                <div className="flex flex-col gap-6">
                    
                    <ExperienceCard
                        title="Lead Software Engineer - Founding Engineer"
                        company="Sindy Labs"
                        period="2024 - 2025"
                        description="Lead a team of 6 engineers to coceptualize and develop the customer facing webapp for Sindy, leading to us winning a spot in the prestigious Skydeck Accelerator 2024 and 300,000 USD"
                    />
                    <ExperienceCard
                        title="DevOps Engineer - Research Placement"
                        company="Walter and Eliza Hall Institute of Medical Research, Melbourne"
                        period="2025 - 2025"
                        description="Developed a CI/CD pipeline for the institute's Data Registry Platform's Demo environment, leading to a massive increase in the speed of development as there is no need to manually test and deploy."
                    />
                    <ExperienceCard
                        title="Software Engineer - Intern"
                        company="HEX - Hacker Exchange"
                        period="2023 - 2024"
                        description="Designed and developed the edTech platform for HEX, a platform that allows students to learn new skills from the huge catalogue of courses offered by HEX. Students could also view their progress and get recommendations on what to learn next."
                    />
                </div>
            </section>

            {/* Spare Time Section */}
            <section className="w-full max-w-4xl p-12">
                <h2 className="text-3xl font-serif italic font-medium mb-6">In My Spare Time</h2>
                <div className="font-mono text-base space-y-4">
                    <p>
                        When I'm not coding, you'll find me playing video games with friends, going on hikes and playing sports. I have been playing a lot of volleyball lately. I also love to rewatch The Office.
                    </p>
                    
                </div>
            </section>
            
            <div className="min-h-[1px] w-[1350px]  bg-gradient-to-r from-transparent via-white to-transparent" />
            
            <Footer />

        </main>
    );
}