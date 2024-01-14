import Aos from "aos";
import { useEffect } from "react";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiExpress, SiPostman, SiMongodb, SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";


const Skills = () => {

  const skills = [
    {
      img: <IoLogoJavascript className=""/>,
      skill: 'JavaScript',
    },
    {
      icon: <FaNodeJs className=""/>,
      skill: 'Node JS',
    },
    {
      icon: <SiExpress className=""/>,
      skill: 'Express JS',
    },
    {
      icon: <FaReact className="" />,
      skill: 'React',
    },
    {
      icon: <SiTailwindcss className="" />,
      skill: 'Tailwind CSS',
    },
    {
      img: <FaHtml5 className=""/>,
      skill: 'HTML',
    },
    {
      img: <BiLogoTypescript className=""/>,
      skill: 'Typescript',
    },
    {
      img: <SiMongodb className=""/>,
      skill: 'MongoDB',
    },
    {
      icon: <SiRedux className=""/>,
      skill: 'Redux',
    },
    {
      icon: <SiNextdotjs className=""/>,
      skill: 'Next JS',
    },
    {
      img: <SiPostman className=""/>,
      skill: 'Postman',
    },
    {
      img: <BiLogoPostgresql className=""/>,
      skill: 'PostgreSQL',
    }
  ];

  return (
    <div id="Skills" className="p-20 justify-center max-w-6xl mx-auto">
      <h1 data-aos="fade-right" className="flex justify-center text-[52px] font-semibold mb-20 leading-normal uppercase text-purple">Skills</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => {
          return (
            <div className="flex space-x-2 items-center">
              {skill.icon && <div className="text-2xl">{skill.icon}</div>}
              {skill.img && <img src={skill.img} className="h-6 w-6" alt=""></img>}
              <div className=" text-gray-500">{skill.skill}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Skills