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


export default function page() {
    return (
        <div className="overflow-y-auto gap-3 bg-white 2xl:mt-[3%] rounded-lg p-3 flex flex-col">
            <span className={`text-[40px] text-center font-medium ${poppins.className}`}>Bio</span>
            <span className={`${raleway.className} text-lg font-medium`}>I am a Electronics and Telecommunication Engineering undergraduate at Pune Institute of Computer Technology, currently working in the fields of Web App Development, Cloud and DevOps, System Design and Distributed Systems.

                A creative Graphic Designer and Developer. Skilled at writing well-designed, testable and efficient code using current best practices.

                A fast learner, natural leader, hard worker and a team player who is proficient in an array of various technologies.
            </span>
            <span className={`text-[40px] text-center font-medium ${poppins.className}`}>Skills</span>
            <div className='grid grid-cols-7 gap-8 px-10 text-3xl max-lg:text-xl max-lg:grid-cols-4'>
                {
                    skills.map((skill,index) => {
                        const Component = skill.component;
                        return (
                            <div key={index} className='flex bg-[#f5f5f5] flex-col h-24 hover:h-24 items-center justify-center gap-3 py-2 hover:shadow-[#09099f] hover:border-transparent hover:border hover:shadow-[0px_0px_5px_2px] rounded-xl'>
                                <Component />
                                <span className='text-xl max-lg:text-xs'>{skill.name}</span>                            
                            </div>
                        )
                    })
                }                
            </div>     
        </div>
    )
}