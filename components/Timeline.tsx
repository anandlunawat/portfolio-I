'use client'

import { PiGraduationCap } from "react-icons/pi"
import {FiExternalLink} from "react-icons/fi"
import educationData from "../data/education"
import experiences from "@/data/experiences";
import { Chrono } from "react-chrono";
import Link from "next/link";

interface prop {
  type: string
}

export default function Timeline(props: prop) {

  return (
    <Chrono
      items={props.type === "experience" ? null : educationData}
      mode="VERTICAL_ALTERNATING"
      cardHeight={100}
      // itemWidth={150}
      slideItemDuration={2000}
      slideShow
      theme={{
        cardBgColor: "#E1E8EF",
        primary: "black",
        secondary: "black",
        titleColorActive: "#E1E8EF",
        cardTitleColor: "#0072b1",
        titleColor: "#0072b1"
      }}
      hideControls
      useReadMore
    >
      {props.type === "experience" ? experiences.map((experience, index) => {
        return (
          <div key={index} className="VerticalItemWrapper-sc-1467v1d-1 uhss left vertical-item-row visible">
            <div className="flex flex-col gap-4 ">
              <p className="text-[#0072b1] flex items-center text-base font-semibold text-left">{experience.companyName}<Link href={experience.href} className="ml-auto"><FiExternalLink /></Link></p>
              <p className="text-black text-sm font-semibold text-left">{experience.role}</p>
              <p className="text-sm font-normal">{experience.para1}</p>
              <p className="text-sm font-normal">{experience.para2}</p>
              <div className="flex flex-row gap-4 text-sm font-normal">
                {experience.techStacks.map((techStack, index) => {
                  return (
                    <div key={index} className="bg-white rounded-lg p-2 ">{techStack}</div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      }) : <div className="chrono-icons"><PiGraduationCap style={{ background: "white", color: "black", fontSize: "50px" }} /><PiGraduationCap style={{ background: "white", color: "black", fontSize: "50px" }} /><PiGraduationCap style={{ background: "white", color: "black", fontSize: "50px" }} /></div>}
    </Chrono>
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
//     <div className="flex flex-row gap-4 text-sm font-normal"><div className="bg-white rounded-lg p-2 ">ReactJS</div><div className="bg-white rounded-lg p-2 ">Tailwind</div></div>
//   </div>
//   })
//: <div className="chrono-icons"><PiGraduationCap style={{background : "white",color : "black",fontSize : "50px"}}/><PiGraduationCap style={{background : "white",color : "black",fontSize : "50px"}}/><PiGraduationCap style={{background : "white",color : "black",fontSize : "50px"}}/></div>
// } 

