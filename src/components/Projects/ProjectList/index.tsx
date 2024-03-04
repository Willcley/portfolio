"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { TProject } from "@/interfaces/projects.interfaces";

export const ProjectList = ({ projectList }: any) => {
    const [ cardNumber, setCardNumber ] = useState(0);
    const [ seeMore, setSeeMore ] = useState(false);
    const [ cardSpacig, setCardSpacing ] = useState(234);

    useEffect(() => {
        setTimeout(() => {
            const scrollProjects = document.getElementById("scrollProjects");
            scrollProjects?.scroll({
                left: (cardNumber) * (192 + cardSpacig), 
                behavior: "smooth",
            });
        }, seeMore ? 400 : 0);
    }, [cardNumber]);

    useEffect(() => {
        setCardSpacing(
            document.getElementById("projectCard0")?.clientWidth
            || 234
        );
    }, [document.getElementById("projectCard0")?.clientWidth]);

    return (
        <div className="
            relative
            flex flex-col items-center
            w-full
        ">
            <ul id="scrollProjects" className={`
                relative
                duration-300
                flex gap-48
                px-[40%]
                w-screen
                overflow-x-hidden
                snap-x snap-mandatory
                list-none
            `}>
                {projectList.length > 0 ? projectList.map(
                    (project: TProject, i: number) => (
                        <ProjectCard
                            key={i}
                            cardNumber={cardNumber}
                            setCardNumber={setCardNumber}
                            setSeeMore={setSeeMore}
                            id={i}
                            img={project.img}
                            isNew={project.isNew}
                            title={project.title}
                            type={project.type}
                            kenzie={project.kenzie}
                            framework={project.framework}
                            techList={project.techList}
                            description={project.description}
                            finishedAt={project.finishedAt}
                            linkGithub={project.linkGithub}
                            publicGithub={project.publicGithub}
                            linkApplication={project.linkAppliaction}
                            online={project.online}
                        />
                    )
                ) : <p>Lista vazia...</p>}
            </ul>
            <div className="
                relative
                flex justify-center items-center
                p-0 m-0 mt-4 mb-12 sm:mb-0
                w-full max-w-6xl h-12
            ">
                <button
                    className="
                        w-full h-full
                        bg-gradient-to-l from-grey-900
                        outline-none
                        hover:bg-grey-300 hover:bg-opacity-20
                    "
                    onClick={() => {
                        if (cardNumber > 0) {
                            setCardNumber(cardNumber - 1);
                        } else {
                            setCardNumber((projectList.length - 1));
                        };
                    }}
                >
                    {`<`}
                </button>
                <ul className="
                    absolute sm:relative
                    top-12 sm:top-0
                    flex justify-center items-center flex-wrap
                    w-full h-full
                ">
                    {projectList.length > 0 ? projectList.map(
                        (project: TProject, i: number) => (
                            <li key={`radio${i}`} className="flex">
                                <input
                                    id={`radio${i}`}
                                    type="radio"
                                    name="radio"
                                    hidden={true}
                                    className="peer"
                                    checked={cardNumber === i ? true : false}
                                    onClick={() => setCardNumber(i)}
                                />
                                <label
                                    htmlFor={`radio${i}`}
                                    className="
                                        cursor-pointer
                                        duration-200
                                        p-2 m-2 peer-checked:m-1
                                        rounded-full
                                        border-2 border-grey-900
                                        ring-2 ring-blue-400
                                        hover:bg-blue-400
                                        peer-checked:bg-blue-400 peer-checked:p-3
                                    "
                                ></label>
                            </li>
                        )
                    ) : null}
                </ul>
                <button
                    className="
                        w-full h-full
                        bg-gradient-to-r from-grey-900
                        outline-none
                        hover:bg-grey-300 hover:bg-opacity-20
                    "
                    onClick={() => {
                        if (cardNumber < (projectList.length - 1)) {
                            setCardNumber(cardNumber + 1);
                        } else {
                            setCardNumber(0);
                        };
                    }}
                >
                    {`>`}
                </button>
            </div>
        </div>
    );
};