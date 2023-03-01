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
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="py-6 px-2">
      <SidebarRow src={user.photoURL} title={user.displayName} />

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
