import { Poppins, Raleway } from "next/font/google"
import skills from "@/data/data";


const poppins = Poppins({
    weight: "400",
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
        <div className="overflow-y-auto gap-3 w-full bg-white h-[75vh] 2xl:w-[70%] rounded-lg p-3 flex flex-col">
            <span className={`text-[40px] text-center font-medium ${poppins.className}`}>Education</span>                            
        </div>
    )
}