import Link from "next/link"

export default function Navbar() {
    return (
        <div className="flex flex-row 2xl:mt-4 gap-4 ml-auto">
            <Link href={"/about"} className="bg-[#E1E8EF] shadow-xl border-[2px] 2xl:text-lg font-semibold rounded-lg p-3 border-[#F2F7FC]">
                <span>About</span>
            </Link>
            <Link href={"/projects"} className="bg-[#E1E8EF] shadow-xl border-[2px] 2xl:text-lg font-semibold rounded-lg p-3 border-[#F2F7FC]">
                <span>Projects</span>
            </Link>
            <Link href={"/resume"} className="bg-[#E1E8EF] shadow-xl border-[2px] 2xl:text-lg font-semibold rounded-lg p-3 border-[#F2F7FC]">
                <span>Resume</span>
            </Link>
            <Link href={"/contact"} className="bg-[#E1E8EF] shadow-xl border-[2px] 2xl:text-lg font-semibold rounded-lg p-3 border-[#F2F7FC]">
                <span>Contact Me</span>
            </Link>
        </div>
    )
}