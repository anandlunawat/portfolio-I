'use client'

import { Raleway } from "next/font/google"
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaGithub, } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"
import { AiOutlineDownload, AiOutlinePlus } from "react-icons/ai"
import { FcPhone } from "react-icons/fc"
import { useState } from "react";

const raleway = Raleway({
    display: "swap",
    preload: false
});

export default function Profile() {

    const [floatingButton, setFloatingButton] = useState(false)

    return (
        <div className={`${raleway.className}fixed max-lg:fixed flex flex-col right-2 bottom-16 lg:h-[75vh] lg:w-[25%] 2xl:w-[30%]`}>
            {
                floatingButton && <div className="flex gap-6 lg:hidden flex-col">
                    <Link href="https://www.linkedin.com/in/anand-lunawat-aa220622b/" className="p-3">
                        <FaLinkedinIn style={{ color: "#0072b1" }} />
                    </Link>
                    <Link href="https://github.com/anandlunawat" className="p-3">
                        <FaGithub />
                    </Link>
                    <Link href={"https://www.instagram.com/anand__lunawat/?hl=en"} className="p-3">
                        <FaInstagram style={{ color: "#fa7e1e" }} />
                    </Link>
                    <Link href="tel:+918390854549" className="p-3">
                        <FcPhone />
                    </Link>                    
                    <Link href="mailto:aplunawat@gmail.com" className="p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 48 48">
                            <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                        </svg>
                    </Link>
                </div>
            }
            <button onClick={() => { setFloatingButton(!floatingButton) }} className="rounded-full lg:hidden fixed right-2 bottom-2 w-fit mt-auto bg-white p-2 border-2">
                <AiOutlinePlus />
            </button>
            <img src="./profile.jpg" className="justify-self-center max-lg:hidden absolute top-[12%] self-center rounded-xl w-[12%] h-[24%] 2xl:w-[14%] 2xl:h-[28%]" />
            <div className="flex flex-col items-center justify-center rounded-lg max-lg:hidden bg-opacity-40 gap-2 bg-[#ffff] overflow-hidden h-full p-4">
                <div className={`flex mr-4 ml-4 mt-[40%] text-center flex-col gap-2`}>
                    <span className={`${raleway.className} font-bold text-[20px] 2xl:text-[28px]`}>Anand Lunawat</span>
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
                <div className="flex flex-col p-2 bg-[#f2f5f9] 2xl:m-2 w-full rounded-lg">
                    <Link href="tel:+918390854549" className="flex pl-3 flex-row border-b-[1px] border-b-[#CDCDCD] py-1 2xl:py-2 items-center gap-4 w-full">
                        <FcPhone />
                        <div className="flex font-semibold text-sm flex-col">
                            <span className="text-[#1a100396]">Phone</span>
                            <span>+918390854549</span>
                        </div>
                    </Link>
                    <Link href="mailto:aplunawat@gmail.com" className="flex pl-3 flex-row border-b-[1px] border-b-[#CDCDCD] py-1 2xl:py-2 items-center gap-4 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 48 48">
                            <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                        </svg>
                        <div className="flex font-semibold text-sm flex-col">
                            <span className="text-[#1a100396]">Email</span>
                            <span>aplunawat@gmail.com</span>
                        </div>
                    </Link>
                    <div className="flex pl-3 flex-row border-b-[1px] border-b-[#CDCDCD] py-1 2xl:py-2 items-center gap-4 w-full">
                        <IoLocationOutline style={{ color: "#9bbff4" }} />
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
    )
}