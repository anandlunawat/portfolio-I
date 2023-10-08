import { Raleway } from "next/font/google"
import Link from "next/link";
import {FaLinkedinIn, FaInstagram, FaGithub, FaPhone, FaMailBulk} from "react-icons/fa"
import {BiLogoGmail, BiLocationPlus} from "react-icons/bi"
import {IoLocationOutline} from "react-icons/io5"

const raleway = Raleway({
    weight: "400",
    display: "swap",
    preload: false
});

export default function SideNav() {
    return (
        <div className={`${raleway.className} flex flex-col w-[20%] mt-8`}>
            <img src="./profile.png" className="relative z-40 justify-self-center self-center"/>
            <div className="fixed bg-[#1a0b2e3e] rounded-lg top-[220px] p-4 overflow-y-auto w-[20%]">
                <div className="flex flex-col items-center justify-center rounded-lg bg-opacity-40 gap-2">
                    <div className={`flex max-xl:hidden mt-24 p-3 mr-4 ml-4 text-center flex-col gap-2 pb-4`}>
                        <span className={`${raleway.className} font-bold text-[28px]`}>Anand Lunawat</span>
                        <span className={`font-medium ${raleway.className} text-center gap-4 text-base`}>FullStack Developer</span>
                    </div>
                    <div className="flex flex-row gap-2 ml-4 max-xl:hidden 2xl:gap-4">
                        <Link href="https://www.linkedin.com/in/anand-lunawat-aa220622b/" className="bg-[#251C31] border-[2px] text-2xl rounded-lg p-3 border-[#251C31]">                           
                            <FaLinkedinIn />
                        </Link>                         
                        <Link href="https://github.com/anandlunawat" className="bg-[#251C31] border-[2px] text-2xl rounded-lg p-3 border-[#251C31]">                           
                            <FaGithub />
                        </Link>                         
                        <Link href={"/"} className="bg-[#251C31] border-[2px] text-2xl rounded-lg p-3 border-[#251C31]">                           
                            <FaInstagram />
                        </Link>         
                    </div>
                    <div className="flex flex-col p-2 bg-[#1A0B2E] m-2 w-full rounded-lg">
                        <div className="flex pl-3 flex-row border-b-[1px] border-b-[#9857D3] py-2 items-center gap-4 w-full">
                            <FaPhone />
                            <div className="flex font-semibold text-sm flex-col">
                                <span className="text-[#9857D3]">Phone</span>
                                <span>+918390854549</span>
                            </div>
                        </div>                        
                        <div className="flex pl-3 flex-row border-b-[1px] border-b-[#9857D3] py-2 items-center gap-4 w-full">
                            <BiLogoGmail />
                            <div className="flex font-semibold text-sm flex-col">
                                <span className="text-[#9857D3]">Email</span>
                                <span>aplunawat@gmail.com</span>
                            </div>
                        </div>                        
                        <div className="flex pl-3 flex-row border-b-[1px] border-b-[#9857D3] py-2 items-center gap-4 w-full">
                            <IoLocationOutline />
                            <div className="flex font-semibold text-sm flex-col">
                                <span className="text-[#9857D3]">Location</span>
                                <span>Pune, Maharashtra</span>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}