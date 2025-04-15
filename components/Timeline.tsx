'use client'

import { PiGraduationCap } from "react-icons/pi"
import { FiExternalLink } from "react-icons/fi"
import educationData from "../data/education"
import experiences from "@/data/experiences";
import { Chrono } from "react-chrono";
import Link from "next/link";

interface prop {
  type: string
}

export default function Timeline(props: prop) {
  return (
    <div className="relative min-w-full flex justify-center">
      <div className="absolute bg-black h-full rounded-full w-1 left-1/2 transform -translate-x-1/2"></div>
      <div className="flex flex-col gap-10 py-10 w-[80%]">
        {props.type === "experience" ? experiences.map((experience, index) => (
          <div
            key={index}
            className={`relative w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
          >
            <div className="shadow-md flex flex-col gap-2 shadow-custom p-4 rounded-md max-w-[45%]">
              <div className="absolute left-1/2 transform -translate-x-1/2 rounded-full p-1"></div>
              <div className="font-bold text-lg items-center gap-10 flex"><h1>{experience.companyName}</h1><span className="ml-auto"><FiExternalLink /></span></div>
              <h1>{experience.role}</h1>
              <h2 className="font-medium">{experience.para1}</h2>
              <h2 className="font-medium">{experience.para2}</h2>
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
          </div>
        )) : educationData.map((education, index) => {
          return (
            <div
              key={index}
              className={`relative w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
            >
              <div className="shadow-md flex flex-col gap-2 shadow-custom p-4 rounded-md max-w-[45%]">
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1"><PiGraduationCap /></div>
                <div className="font-bold text-lg items-center gap-10 flex"><h1>{education.cardTitle}</h1><span className="ml-auto"><FiExternalLink /></span></div>
                <h1>{education.cardSubtitle}</h1>
                <h2 className="font-medium">{education.cardDetailedText}</h2>
              </div>
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

