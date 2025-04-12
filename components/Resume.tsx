import { Poppins } from "next/font/google"

const poppins = Poppins({
    weight: "500",
    display: "swap",
    preload: false
});

export default function Resume() {
    return (
        <div className="w-full flex flex-col gap-3 rounded-lg p-3">            
            <span className={`text-[40px] text-center font-medium ${poppins.className}`}>Resume</span>
            <iframe title="Anand Lunawat | Resume" className="w-full lg:h-[70vh] h-[60vh] rounded-lg" src="https://drive.google.com/file/d/17gITpRlSwimM7RQzmxL81dXckCBzEsuS/preview"></iframe>
        </div>
    )
}