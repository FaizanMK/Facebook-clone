import { Avatar } from "@mui/material";
import React from "react";

function SidebarRow({ title, src, Icon }) {
  return (
    <div className="flex items-center cursor-pointer p-2 hover:bg-gray-400 rounded-lg max-w-xs	 ">
      {src && <Avatar src={src} />}
      {Icon && <Icon className="text-2xl text-blue-500" />}

      <h4 className="ml-5 font-semibold">{title}</h4>
    </div>
  );
}

export default SidebarRow;
