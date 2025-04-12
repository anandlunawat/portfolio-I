import { Poppins, Raleway } from "next/font/google"
import Timeline from "@/components/Timeline";


const poppins = Poppins({
    weight: "500",
    display: "swap",
    preload: false
});

const raleway = Raleway({
    weight: "400",
    display: "swap",
    preload: false
});


export default function About() {
    return (
        <div className="overflow-y-auto gap-3 w-full rounded-lg p-3 flex flex-col">
            <span className={`text-[40px] text-center font-medium ${poppins.className}`}>Education</span>
            <div className="h-fit max-md:w-fit">
                <Timeline type={"education"}/>
            </div>
            <span className={`text-[40px] text-center font-medium ${poppins.className}`}>Experience</span>
            <div className="h-fit">
                <Timeline type={"experience"}/>
            </div>
        </div>
    )
}