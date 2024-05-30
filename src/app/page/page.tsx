import React from "react";
import Header from "./components/Header";
import Members from "./components/Members";
import Project from "./components/Project";
import { TbMathFunction } from "react-icons/tb";
import { PiStudentFill } from "react-icons/pi";
import { GiVineFlower } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";
import { GiMaterialsScience } from "react-icons/gi";
import { SiHtmlacademy } from "react-icons/si";
import { RiCake3Fill } from "react-icons/ri";
import { MdOutlineMicExternalOn } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { GiFlamethrowerSoldier } from "react-icons/gi";
import { TbSchool } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";
const page = () => {
  return (
    <div>
      <Header />

      <div className="my-10  bg-black py-11">
        <div className="flex flex-col justify-center pb-11">
          <div className="flex w-full flex-row justify-center">
            <p className="text-4xl font-extrabold italic text-white">
              GEMENTAR TEAM
            </p>
          </div>
          <div className="flex w-full flex-row justify-center">
            <p className="text-3xl font-extrabold italic text-[#e80000]">
              MEMBER
            </p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-2">
          <div className="rounded-lg bg-red-700 px-2 pt-2">
            <Members image="/images/members/hilmi.png" resumeLink="" />
          </div>
          <div className="mt-4">
            <Members image="/images/members/shahida.png" resumeLink="" />
          </div>
          <div className="mt-4">
            <Members image="/images/members/isac.png" resumeLink="" />
          </div>
        </div>

        <div className="py-2"></div>

        <div className="flex flex-row flex-wrap justify-center gap-2">
          <div className="mt-4">
            <Members image="/images/members/mejad.png" resumeLink="" />
          </div>
          <div className="mt-4">
            <Members image="/images/members/parven.png" resumeLink="" />
          </div>
          <div className="mt-4">
            <Members image="/images/members/yogen.png" resumeLink="" />
          </div>
          <div className="mt-4">
            <Members image="/images/members/kavi.png" resumeLink="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center pb-11">
        <div className="flex w-full flex-row justify-center">
          <p className="text-4xl font-extrabold italic ">OUR</p>
        </div>
        <div className="flex w-full flex-row justify-center">
          <p className="text-3xl font-extrabold italic text-[#e80000]">
            PROJECTS
          </p>
        </div>
        <div className="flex w-full flex-row justify-center">
          <p className="max-w-96 px-4 pt-5 text-xs font-extrabold italic ">
            We undertake freelance projects and pursue our hobbies while also
            serving as real developers currently employed by another company.
            Our project has been interacted by more than 4,000 users.
          </p>
        </div>

        <div className="flex flex-row justify-center gap-4 pt-5 flex-wrap">
         <Project icon={<PiStudentFill />} title={"ICHOOSESV"} subTitle={"Platform for SV Selection for Politeknik Ungku Omar"} link={""} type={"Website"}/>
         <Project icon={<PiStudentFill />} title={"ICHOOSESV V2"} subTitle={"Platform for SV Selection for Politeknik Ungku Omar"} link={""} type={"Website"}/>
         <Project icon={<MdOutlineQuiz />} title={"QUIZ SYSTEM"} subTitle={"Platform for SV Selection for Politeknik Ungku Omar"} link={""} type={"Website"}/>
         <Project icon={<TbMathFunction />} title={"M2KIT"} subTitle={"Platform for SV Selection for Politeknik Ungku Omar"} link={""} type={"Website"}/>
         <Project icon={<GiVineFlower />} title={"Wedding Invitation"} subTitle={"Gementar Team Academy"} link={""} type={"Website"}/>
         <Project icon={<CgFileDocument/>} title={"Web Resume"} subTitle={"Gementar Team Academy"} link={""} type={"Website"}/>

         <Project icon={<GiMaterialsScience/>} title={"NSINC 2021"} subTitle={"Platform for SV Selection for Politeknik Ungku Omar"} link={""} type={"3D Media"}/>
         <Project icon={<GiMaterialsScience/>} title={"NSINS 2022"} subTitle={"Platform for SV Selection for Politeknik Ungku Omar"} link={""} type={"Game"}/>
         <Project icon={<RiCake3Fill/>} title={"DELLAMAR"} subTitle={"Platform for SV Selection for Politeknik Ungku Omar"} link={""} type={"3D Media"}/>
         <Project icon={<SiHtmlacademy/>} title={"ACADEMY"} subTitle={"Gementar Team Academy"} link={""} type={"3D Media"}/>
         <Project icon={<FaYoutube />} title={"YOUTUBE CHANNEL"} subTitle={"Gementar Team Academy"} link={""} type={"3D Media"}/>

         <Project icon={<MdOutlineMicExternalOn />} title={"INTRO TO AR"} subTitle={"Gementar Team Academy"} link={""} type={"Consultation"}/>
         <Project icon={<MdOutlineMicExternalOn />} title={"INTRO TO GAME DEV"} subTitle={"Gementar Team Academy"} link={""} type={"Consultation"}/>

         <Project icon={<TbSchool/>} title={"TOUR PUO"} subTitle={"Gementar Team Academy"} link={""} type={"Game"}/>
         <Project icon={<LuNetwork/>} title={"IPV4"} subTitle={"Gementar Team Academy"} link={""} type={"Game"}/>
         <Project icon={<GiFlamethrowerSoldier/>} title={"ARMY RP"} subTitle={"Gementar Team Academy"} link={""} type={"Game"}/>
        </div>
      </div>
    </div>
  );
};

export default page;
