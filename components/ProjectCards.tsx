import { Raleway } from "next/font/google"
import Link from "next/link";
import projects from "@/data/projects";
import { BsCodeSlash, BsFillRocketTakeoffFill } from "react-icons/bs"

const raleway = Raleway({
    display: "swap",
    preload: false
});

export default function ProjectCards() {
    return (
        <div className="grid lg:grid-cols-3 gap-4">
            {
                projects.map((project, index) => {
                    return (
                        <div key={index} className={`bg-[#E1E8EF] items-center justify-center h-full flex flex-col rounded-lg pb-2 shadow-xl ${raleway.className}`}>
                            <img src={project.imgUrl} alt={project.imgUrl} className="h-[180px] rounded-t-lg w-full"/>
                            <span className={`text-2xl font-bold pt-2 text-[#0072b1]`}>{project.title}</span>
                            <span className={`text-xs text-center p-2`}>{project.description}</span>
                            <div className="flex flex-wrap gap-2 mt-auto justify-center p-1 w-[95%]">
                                {
                                    project.techStacks.map((techStack,index)=>{
                                        return (
                                            <div key={index} className={`bg-white whitespace-pre rounded-lg p-2`}>{techStack}</div>                                 
                                        )
                                    })
                                }                                
                            </div>
                            <div className="flex gap-10 mt-auto border-t-2 border-white w-[95%] justify-center items-center p-2">
                                <Link href={project.repoLink} className="rounded-full bg-white p-2 border-[1px] border-white"><BsCodeSlash /></Link>
                                <Link href={project.deployedLink} className="rounded-full bg-white p-2 border-[1px] border-white"><BsFillRocketTakeoffFill /></Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}