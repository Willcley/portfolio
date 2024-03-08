import Image from "next/image";
import { AboutTexts } from "./AboutTexts";
import { AboutTech } from "./AboutTech";
import { AboutIntroduction } from "./AboutIntroduction";
import { AboutAbilities } from "./AboutAbilities";
import { useRef, useState } from "react";
import { AboutNavButton } from "./AboutNavButton";

export const About = () => {
    const [ screenAbout, setScreenAbout ] = useState("intro");
    const aboutScroll = useRef<null | HTMLUListElement>(null)

    return (
        <section id="about" className="
            relative
            flex
            min-w-full min-h-[600px]
        ">
            <ul 
                ref={aboutScroll}
                className="
                    z-10
                    flex gap-8
                    p-8
                    overflow-x-hidden
                    snap-x snap-mandatory
                "
            >
                <AboutIntroduction />
                <AboutTexts />
                <AboutTech />
                <AboutAbilities />
            </ul>
            <nav className="
                z-10
                absolute bottom-0
                w-full
            ">
                <ul className="
                    flex flex-col items-start
                    sm:flex-row sm:justify-center sm:gap-4
                ">
                    <AboutNavButton
                        text="início"
                        value="intro"
                        position={0}
                        scrollRef={aboutScroll}
                        screenAbout={screenAbout}
                        setScreenAbout={setScreenAbout}
                    />
                    <AboutNavButton
                        text="sobre"
                        value="about"
                        position={1}
                        scrollRef={aboutScroll}
                        screenAbout={screenAbout}
                        setScreenAbout={setScreenAbout}
                    />
                    <AboutNavButton
                        text="tecnologias"
                        value="tech"
                        position={2}
                        scrollRef={aboutScroll}
                        screenAbout={screenAbout}
                        setScreenAbout={setScreenAbout}
                    />
                    <AboutNavButton
                        text="habilidades"
                        value="ability"
                        position={3}
                        scrollRef={aboutScroll}
                        screenAbout={screenAbout}
                        setScreenAbout={setScreenAbout}
                    />
                </ul>
            </nav>
            <div className="
                absolute top-0 right-0
                z-0
                w-2/5 h-full
            ">
                <div className="
                    relative
                    duration-200
                    w-full h-full
                ">
                    <Image
                        src="/imgs/codeWallpaper.jpg"
                        alt="code"
                        layout="fill"
                        objectFit="cover"
                        sizes="full"
                    />
                    <div className="
                        absolute top-0 right-0
                        min-w-full min-h-full z-10
                        bg-gradient-to-r from-grey-850 to-transparent
                    "></div>
                </div>
            </div>
        </section>
    );
};