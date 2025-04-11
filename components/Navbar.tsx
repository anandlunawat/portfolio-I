'use client'

import Link from "next/link"
import { Pacifico } from "next/font/google"
import { IoMoonOutline } from "react-icons/io5"
import { MdOutlineWbSunny } from "react-icons/md";
import { useState } from 'react'

const pacifico = Pacifico({
    weight: "400",
    display: "swap",
    preload: false
});

export default function Navbar() {

    const [darkMode, setDarkMode] = useState(false)

    function executeDarkMode() {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode)
        // setTimeout(()=>{
        if (newDarkMode) {
            document.getElementsByTagName('html')[0].classList.add('dark-mode')
            document.getElementsByTagName('html')[0].classList.remove('light-mode')
        } else {
            document.getElementsByTagName('html')[0].classList.add('light-mode')
            document.getElementsByTagName('html')[0].classList.remove('dark-mode')
        }
        // },2000)
    }

    return (
        <div className="flex flex-row items-center w-full 2xl:mt-4 gap-4">
            <div className={`${pacifico.className} basis-1/2`}>
                <Link href={"/"} className='tracking-widest whitespace-pre font-normal lg:text-2xl text-md 2xl:text-4xl basis-1/2'>Anand Lunawat</Link>
            </div>
            <div className="flex max-md:gap-2 basis-1/3 ml-auto w-full">
                <Link href={"/"} className="text-center md:shadow-xl 2xl:text-lg ml-auto md:font-medium max-md:text-[14px] font-semibold rounded-lg sm:p-2">
                    Home
                </Link>
                <Link href={"/about"} className="text-center md:shadow-xl ml-auto 2xl:text-lg max-md:text-[14px] md:font-medium font-semibold rounded-lg sm:p-2">
                    <span>About</span>
                </Link>
                <Link href={"/projects"} className="text-center md:shadow-xl max-md:text-[14px] ml-auto 2xl:text-lg md:font-medium font-semibold rounded-lg sm:p-2">
                    <span>Projects</span>
                </Link>
                <Link href={"/resume"} className="text-center md:shadow-xl max-md:text-[14px] ml-auto 2xl:text-lg md:font-medium font-semibold rounded-lg sm:p-2">
                    <span>Resume</span>
                </Link>
            <button onClick={executeDarkMode} className='ml-auto rounded-full p-3 text-lg'>
                {
                    !darkMode ? <IoMoonOutline /> : <MdOutlineWbSunny />
                }
            </button>
            </div>
        </div>
    )
}
