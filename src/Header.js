import React from "react";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { BsFillFlagFill } from "react-icons/bs";
import {
  MdSubscriptions,
  MdStorefront,
  MdSupervisedUserCircle,
  MdForum,
  MdOutlineNotificationsActive,
  MdExpandMore,
} from "react-icons/md";

import { IoAdd } from "react-icons/io5";
import { Avatar } from "@mui/material";
import { useStateValue } from "./StateProvider";
// "0px 5px 8px -9 red rgba(0,0,0,0.75)",

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    //header
    <div className="flex py-4 px-5 justify-between sticky bg-white z-100 top-0 shadow-custom">
      {/* header left */}
      <div className="flex justify-evenly">
        <img
          className="h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="flex items-center bg-new p-3 ml-3 rounded-full">
          <AiOutlineSearch />

          <input
            className="  bg-transparent outline-0 "
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* header middle */}
      <div className="flex flex-1 justify-center text-gray-500 text-3xl cursor-pointer ">
        <div
          className=" hover:text-blue-500 h-10 w-10 m-1 hover:bg-slate-200 rounded-lg active:text-blue-500
         active:border-b-4 border-blue-500 pl-1"
        >
          <AiFillHome />
        </div>
        <div
          className=" hover:text-blue-500 m-1 py-0 px-7 hover:bg-slate-200 rounded-lg active:text-blue-500
         active:border-b-4 border-blue-500 pl-1"
        >
          <BsFillFlagFill />
        </div>
        <div
          className=" hover:text-blue-500 m-1 py-0 px-7 hover:bg-slate-200 rounded-lg active:text-blue-500
         active:border-b-4 border-blue-500 pl-1"
        >
          <MdSubscriptions />
        </div>
        <div
          className=" hover:text-blue-500 m-1 py-0 px-7 hover:bg-slate-200 rounded-lg active:text-blue-500
         active:border-b-4 border-blue-500 pl-1"
        >
          <MdStorefront />
        </div>
        <div
          className=" hover:text-blue-500 m-1 py-0 px-7 hover:bg-slate-200 rounded-lg active:text-blue-500
         active:border-b-4 border-blue-500 pl-1"
        >
          <MdSupervisedUserCircle />
        </div>
      </div>
      {/* header right */}
      <div className="flex text-2xl">
        <div className="flex justify-center">
          <Avatar src={user.photoURL} />
          <h4 className="ml-2">{user.displayName}</h4>
        </div>
        <div>
          <IoAdd />
        </div>
        <div>
          <MdForum />
        </div>
        <div>
          <MdOutlineNotificationsActive />
        </div>
        <div>
          <MdExpandMore />
        </div>
      </div>
    </div>
  );
}

export default Header;
