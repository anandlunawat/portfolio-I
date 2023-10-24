import { Poppins, Raleway } from "next/font/google"
import skills from "@/data/data";


const poppins = Poppins({
    weight: "500",
    display: "swap",
    preload: false
});

const raleway = Raleway({    
    display: "swap",
    preload: false
});


export default function Home() {
    return (
        <div className="overflow-y-auto gap-3 bg-white h-[75vh] 2xl:w-[70%] rounded-lg p-3 flex flex-col">
            <span className={`text-[40px] text-center font-medium ${poppins.className}`}>Bio</span>
            <span className={`${raleway.className} text-lg font-medium`}>I am a Electronics and Telecommunication Engineering Undergraduate at Pune Institute of Computer Technology with a keen interest in the field of  Web Development, UI UX Development and Graphic Designing.</span>
            <span className={`text-[40px] text-center font-medium ${poppins.className}`}>Skills</span>
            <div className='grid grid-cols-7 gap-6 text-lg font-medium max-lg:grid-cols-4 max-md:grid-cols-2'>
                {
                    skills.map((skill,index) => {
                        const Component = skill.component;
                        return (
                            <div key={index} className='flex bg-[#f5f5f5] flex-col h-24 p-4 items-center justify-center gap-2 hover:shadow-[#000000] hover:border-transparent hover:border hover:shadow-[0px_0px_5px_2px] rounded-xl'>
                                <Component style={{color : skill.color}}/>
                                <span className={`${raleway.className}`}>{skill.name}</span>                            
                            </div>
                        )
                    })
                }                
            </div>     
        </div>
    )
}