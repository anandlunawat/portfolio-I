'use client'

import { PiGraduationCap } from "react-icons/pi"
import { FiExternalLink } from "react-icons/fi"
import educationData from "../data/education"
import experiences from "@/data/experiences";

interface prop {
  type: string
}

export default function Timeline(props: prop) {
  return (
    <div className="relative timeline min-w-full flex md:justify-center">
      <div className="absolute bg-transparent border-2 h-full rounded-full w-1 md:left-1/2 md:transform md:-translate-x-1/2"></div>
      <div className="flex flex-col max-md:p-3 max-md:ml-3 min-w-full gap-10 py-10 md:w-[80%]">
        {props.type === "experience" ? experiences.map((experience, index) => (
          <div key={index} className={`flex max-md:flex-row-reverse ${index % 2 == 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className={`relative basis-1/2 flex-col timeline-cards w-full gap-2 shadow-custom p-4 rounded-md md:max-w-[45%]
                before:content-[''] before:absolute before:top-[50%] before:-left-2 ${index % 2 == 0 ? 'md:before:-left-2' : 'md:before:-right-2' } before:w-4 before:h-4 before:rotate-45 before:bg-inherit before:rounded-sm z-10`}>
              <div className="absolute left-1/2 transform -translate-x-1/2 rounded-full p-1"></div>
              <div className="font-bold md:text-lg text-xs items-center gap-2 md:gap-10 flex"><h1>{experience.companyName}</h1><span className="ml-auto"><FiExternalLink /></span></div>
              <h1 className="max-md:text-xs">{experience.role}</h1>
              <h2 className="max-md:text-xs font-medium">{experience.para1}</h2>
              <h2 className="max-md:text-xs font-medium">{experience.para2}</h2>
              <div className="flex gap-2 font-medium text-lg">
                {
                  experience.techStacks.map((techStack, index) => {
                    return (
                      <span key={index}>{techStack}</span>
                    )
                  })
                }
              </div>
            </div>
            <div className={`basis-1/2 text-center self-center font-bold md:text-lg text-xs`}>{experience.title}</div>
          </div>
        )) : educationData.map((education, index) => {
          return (
            <div key={index} className={`flex max-md:flex-row-reverse ${index % 2 == 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`relative basis-1/2 flex-col timeline-cards w-full gap-2 shadow-custom p-4 rounded-md md:max-w-[45%]
                before:content-[''] before:absolute before:-left-2 before:top-[50%] ${index % 2 == 0 ? 'before:md:-left-2' : 'before:md:-right-2' } before:w-4 before:h-4 before:rotate-45 before:bg-inherit before:rounded-sm z-10`}>
                <div className="font-bold md:text-lg text-xs items-center md:gap-10 gap-2 flex"><h1>{education.cardTitle}</h1><span className="ml-auto"><FiExternalLink /></span></div>
                <h1 className="max-md:text-xs font-medium">{education.cardSubtitle}</h1>
                <h2 className="max-md:text-xs font-medium">{education.cardDetailedText}</h2>
              </div>
              <div className={`basis-1/2 text-center self-center font-bold md:text-lg text-xs`}>{education.title}</div>
            </div>
          )
        })}
      </div>
    </div>

  )
}



// {
//   props.type === "experience" ?
// experiences.map((experience)=> {
//     <div className="flex flex-col gap-4">
//     <p className="text-[#0072b1] text-base font-semibold text-left">{experience.companyName}</p>
//     <p className="text-black text-sm font-semibold text-left">{experience.role}</p>
//     <p className="text-sm font-normal">{experience.para1}</p>
//     <p className="text-sm font-normal">{experience.para2}</p>
//     <div className="flex flex-row gap-4 text-sm font-normal"><div className=" rounded-lg p-2 ">ReactJS</div><div className=" rounded-lg p-2 ">Tailwind</div></div>
//   </div>
//   })
//: <div className="chrono-icons"><PiGraduationCap style={{background : "white",color : "black",fontSize : "50px"}}/><PiGraduationCap style={{background : "white",color : "black",fontSize : "50px"}}/><PiGraduationCap style={{background : "white",color : "black",fontSize : "50px"}}/></div>
// } 

