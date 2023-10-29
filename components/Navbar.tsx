import Link from "next/link"

export default function Navbar() {
    return (
        <div className="flex flex-row 2xl:mt-4 gap-4 sm:ml-auto">
            <Link href={"/"} className="bg-[#E1E8EF] shadow-xl border-[2px] 2xl:text-lg font-semibold rounded-lg p-1 sm:p-3 border-[#E1E8EF]">
                Home
            </Link>
            <Link href={"/about"} className="bg-[#E1E8EF] shadow-xl border-[2px] 2xl:text-lg font-semibold rounded-lg p-1 sm:p-3 border-[#E1E8EF]">
                <span>About</span>
            </Link>
            <Link href={"/projects"} className="bg-[#E1E8EF] shadow-xl border-[2px] 2xl:text-lg font-semibold rounded-lg p-1 sm:p-3 border-[#E1E8EF]">
                <span>Projects</span>
            </Link>
            <Link href={"/resume"} className="bg-[#E1E8EF] shadow-xl border-[2px] 2xl:text-lg font-semibold rounded-lg p-1 sm:p-3 border-[#E1E8EF]">
                <span>Resume</span>
            </Link>
        </div>
    )
}
