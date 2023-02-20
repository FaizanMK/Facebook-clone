import { Avatar } from "@mui/material";
import React from "react";

function Story({ image, profileSrc, title }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="relative bg-center bg-cover bg-no-repeat w-32 h-56	shadow-mine rounded-lg mr-3 transition-transform duration-100 ease-in cursor-pointer hover:scale-105 "
    >
      <Avatar
        src={profileSrc}
        className="m-3 border-solid border-2 border-blue-400"
      />

      <h4 className=" absolute bottom-5 left-5 text-white ">{title}</h4>
    </div>
  );
}

export default Story;
