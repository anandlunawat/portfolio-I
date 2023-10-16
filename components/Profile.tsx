import { Raleway } from "next/font/google"
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaGithub, FaPhone } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { IoLocationOutline } from "react-icons/io5"
import { AiOutlineDownload } from "react-icons/ai"

const raleway = Raleway({
    weight: "400",
    display: "swap",
    preload: false
});

export default function Profile() {
    return (
        <div className={`${raleway.className}fixed flex flex-col w-[25%] 2xl:w-[27%] 2xl:mt-4`}>
            <img src="./profile.jpg" className="justify-self-center absolute self-center rounded-lg w-[12%] h-[24%] 2xl:w-[14%] 2xl:h-[28%]" />            
            <div className="rounded-lg bg-[#ffff] p-4 2xl:mt-[25%] mt-[20%] overflow-y-auto">
                <div className="flex flex-col items-center mt-[30%] 2xl:mt-[40%] justify-center rounded-lg bg-opacity-40 gap-2">
                    <div className={`flex p-3 mr-4 ml-4 text-center flex-col gap-2 2xl:p-0`}>
                        <span className={`${raleway.className} font-bold text-[14px] 2xl:text-[28px]`}>Anand Lunawat</span>
                        <span className={`font-medium ${raleway.className} text-center gap-4 text-[7px] 2xl:text-base`}>FullStack Developer</span>
                    </div>
                    <div className="flex flex-row gap-2 ml-4 2xl:gap-4">
                        <Link href="https://www.linkedin.com/in/anand-lunawat-aa220622b/" className="bg-[#F2F7FC] border-[2px] 2xl:text-2xl rounded-lg p-3 border-[#F2F7FC]">
                            <FaLinkedinIn style={{ color: "#0072b1" }} />
                        </Link>
                        <Link href="https://github.com/anandlunawat" className="bg-[#F2F7FC] border-[2px] 2xl:text-2xl rounded-lg p-3 border-[#F2F7FC]">
                            <FaGithub />
                        </Link>
                        <Link href={"https://www.instagram.com/anand__lunawat/?hl=en"} className="bg-[#F2F7FC] border-[2px] 2xl:text-2xl rounded-lg p-3 border-[#F2F7FC]">
                            <FaInstagram style={{ color: "#fa7e1e" }} />
                        </Link>
                    </div>
                    {/* <div className="flex flex-col p-2 bg-[#1A0B2E] m-2 w-full rounded-lg"> */}
                    <div className="flex flex-col p-2 bg-[#f2f5f9] 2xl:m-2 w-full rounded-lg">
                        <div className="flex pl-3 flex-row border-b-[1px] border-b-[#CDCDCD] py-1 2xl:py-2 items-center gap-4 w-full">
                            <FaPhone />
                            <div className="flex font-semibold text-sm flex-col">
                                <span className="text-[#1a100396]">Phone</span>
                                <span>+918390854549</span>
                            </div>
                        </div>
                        <div className="flex pl-3 flex-row border-b-[1px] border-b-[#CDCDCD] py-1 2xl:py-2 items-center gap-4 w-full">
                            <BiLogoGmail />
                            <div className="flex font-semibold text-sm flex-col">
                                <span className="text-[#1a100396]">Email</span>
                                <span>aplunawat@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex pl-3 flex-row border-b-[1px] border-b-[#CDCDCD] py-1 2xl:py-2 items-center gap-4 w-full">
                            <IoLocationOutline />
                            <div className="flex font-semibold text-sm flex-col">
                                <span className="text-[#1a100396]">Location</span>
                                <span>Pune, Maharashtra</span>
                            </div>
                        </div>
                        <Link href={"https://docs.google.com/uc?export=download&id=17gITpRlSwimM7RQzmxL81dXckCBzEsuS"} className="flex self-center justify-self-center mt-4 items-center rounded-full gap-4">
                            <AiOutlineDownload />
                            <span>Download Resume</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}