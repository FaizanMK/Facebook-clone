import { Avatar } from "@mui/material";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function Post({ profielPic, image, username, timestamp, message }) {
  return (
    <div className="w-full mt-4 rounded-2xl border-2 border-black bg-white shadow-my ">
      {/* post top */}
      <div className="flex relative items-center p-4">
        <Avatar src={profielPic} className="mr-4" />

        {/* post top info */}
        <div>
          <h3 className="font-medium">{username}</h3>
          <p className="font-light text-gray-500">Timestamp...</p>
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
        </div>
      </div>
      {/* post bottom */}
      <div className="my-2 py-4 px-6">
        <p>{message}</p>
      </div>
      {/* image that will be posted */}
      <div>
        <img className="w-full" src={image} alt="" />
      </div>

      {/* like, comment etc */}
      <div className="pt-3 border-t border-solid border-gray-300 flex justify-evenly font-medium text-gray-500 p-4 cursor-pointer  ">
        {/* like */}
        <div className="flex items-center justify-center p-1 flex-1 new-style">
          <ThumbUpIcon />
          <p className="ml-2">Like</p>
        </div>
        <div className="my-styles new-style">
          {/* comment */}
          <ChatBubbleOutlineIcon />
          <p className="ml-2">Comment</p>
        </div>
        <div className="my-styles new-style">
          <NearMeIcon />
          <p className="ml-2">Share</p>
        </div>
        <div className="my-styles new-style">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
