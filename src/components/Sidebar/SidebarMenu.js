import React, { useState } from "react";
import community from "./../../assets/community.png";

import "./Sidebar.css";
import MobileSidebar from "./MobileMenu";
import DesktopSidebar from "./DesktopMenu";

const Side = () => {
  const [expanded, setExpanded] = useState(false);

  const routeData = [
    {
      linkName: "People",
      linkPath: "/people",
    },
    {
      linkName: "Entities",
      linkPath: "/people",
    },
    {
      linkName: "Disciplinary & Action Items",
      linkPath: "/people",
    },
    {
      linkName: "Reports",
      linkPath: "/people",
    },
  ];

  return (
    <>
      <DesktopSidebar community={community} routeData={routeData} setExpanded={setExpanded} expanded={expanded} />
      <MobileSidebar community={community} routeData={routeData} setExpanded={setExpanded} expanded={expanded} />
    </>
  );
};
const SidebarMenu = Side;
export default SidebarMenu;
