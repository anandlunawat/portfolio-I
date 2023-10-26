import ProjectCards from "@/components/ProjectCards";
import { Poppins } from "next/font/google"

const poppins = Poppins({
    weight: "500",
    display: "swap",
    preload: false
});

export default function Projects() {
    return (
        <div className="bg-white w-full flex flex-col gap-3 overflow-y-auto h-[75vh] 2xl:w-[70%] rounded-lg p-3">            
            <span className={`text-[40px] text-center font-medium ${poppins.className}`}>Projects</span>
            <ProjectCards />                
        </div>
    )
}