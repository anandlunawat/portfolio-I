import { Poppins } from "next/font/google"

const poppins = Poppins({
    weight: "500",
    display: "swap",
    preload: false
});

export default function Resume() {
    return (
        <div className="w-full flex flex-col gap-3 bg-white rounded-lg h-[75vh]">            
            <span className={`text-[40px] text-center font-medium ${poppins.className}`}>Resume</span>
            <iframe title="Anand Lunawat | Resume" className="w-full rounded-lg overflow-y-auto h-full bg-white" src="https://drive.google.com/file/d/17gITpRlSwimM7RQzmxL81dXckCBzEsuS/preview"></iframe>
        </div>
    )
}