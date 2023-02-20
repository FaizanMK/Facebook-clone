import React from "react";
import {
  MdExpandMore,
  MdLocalHospital,
  MdOutlineMessage,
  MdOutlineVideoLibrary,
  MdStorefront,
} from "react-icons/md";
import SidebarRow from "./SidebarRow";
import { FaFlag, FaUserFriends } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="py-6 px-2">
      <SidebarRow
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
        title="Babar Azam"
      />

      <SidebarRow Icon={MdLocalHospital} title="COVID 19 Information Center" />

      <SidebarRow Icon={FaFlag} title="Pages" />

      <SidebarRow Icon={FaUserFriends} title="Friends" />

      <SidebarRow Icon={MdOutlineMessage} title="Messenger" />

      <SidebarRow Icon={MdStorefront} title="Marketplace" />

      <SidebarRow Icon={MdOutlineVideoLibrary} title="Videos" />

      <SidebarRow Icon={MdExpandMore} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
