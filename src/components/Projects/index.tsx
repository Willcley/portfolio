import { ProjectList } from "./ProjectList";
import { kenzieProjectList } from "../../databases/kenzieProjectList";

export const Projects = ({ projects }: any) => {
    return (
        <section ref={projects} className="
            flex flex-col items-center gap-8
            px-8 py-12
            bg-grey-blue-100 dark:bg-grey-900
            border-t-2 border-blue-500
            dark:border-blue-400
        ">
            <div className="
                flex flex-col gap-12
                w-full max-w-6xl
            ">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">Alguns projetos:</h2>
                </div>
            </div>
            <ProjectList projectList={kenzieProjectList} />
        </section>
    );
};