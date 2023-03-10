import { Avatar } from "@mui/material";
import React, { useState } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";
import { serverTimestamp } from "firebase/firestore";

//reference to the collection

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("message: ", input);
    console.log("message: ", imageUrl);

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "posts"), {
      // message: input,
      // image: imageUrl,
      message: input,
      timestamp: serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    // add data to firestore
    // const data = {
    //   message: input,
    //   timestamp: firestore.FieldValue.serverTimestamp(),
    //   profilePic: user.photoURL,
    //   username: user.displayName,
    //   image: imageUrl,
    // };

    // some clever darabasse stuff
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="flex bg-white flex-col mt-7 rounded-2xl w-full shadow-my">
      {/* message sender top */}
      <div className="flex border-solid border-b border-white p-4">
        <Avatar src={user.photoURL} />
        <form className="flex-1 flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`What's on your mind? ${user.displayName} `}
            className="outline-0 border-none py-1 px-5 my-0 mx-2 rounded-nn bg-slate-200 flex-1"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="image URL (Optional)"
            className="outline-0 border-none py-1 px-5 my-0 mx-2 rounded-nn bg-slate-200"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="outline-0 border-none py-1 px-5 my-0 mx-2 rounded-nn bg-slate-200 hidden"
          >
            Hidden Submit
          </button>
        </form>
      </div>

      {/* message sender bottom */}
      <div className="flex justify-evenly">
        {/* message sender options */}
        <div className="flex p-5 items-center m-1 text-gray-500">
          <VideocamIcon className="text-red-600 " />
          <h3 className="text-base ml-2 hover:bg-gray-400 rounded-3xl cursor-pointer">
            Live Video
          </h3>
        </div>

        <div className="flex p-5 items-center m-1 text-gray-500 ">
          <PhotoLibraryIcon className="text-green-700" />
          <h3 className="text-base ml-2 hover:bg-gray-400 rounded-3xl cursor-pointer">
            Photo/Video
          </h3>
        </div>

        <div className="flex p-5 items-center m-1 text-gray-500">
          <InsertEmoticonIcon className="text-orange-400" />
          <h3 className="text-base ml-2 hover:bg-gray-400 rounded-3xl cursor-pointer">
            Feeling/Activity
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
