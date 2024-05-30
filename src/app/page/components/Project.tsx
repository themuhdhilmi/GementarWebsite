import React, { type ReactNode } from "react";
import { IconType } from "react-icons";
import { GrAd } from "react-icons/gr";

interface Props {
  icon: ReactNode;
  title: string;
  subTitle: string;
  link: string;
  type: string;
}
const Project = (props: Props) => {
  return (
    <div className=" w-full min-w-16  max-w-52 rounded-lg border bg-white py-9 drop-shadow-lg">
      <div className="flex w-full flex-row justify-center  pt-7 text-8xl">
        {props.icon}
      </div>
      <div className="flex w-full flex-row justify-center pt-7 font-bold">
        <p>{props.title}</p>
      </div>
      <div className="flex w-full flex-row justify-center px-5 pt-3 text-center text-xs">
        <p>{props.subTitle}</p>
      </div>
      <div className=" mt-3  flex w-full flex-row justify-center text-center text-xs ">
        <p className="rounded-md bg-red-800 px-3 text-white">{props.type}</p>
      </div>
    </div>
  );
};

export default Project;
