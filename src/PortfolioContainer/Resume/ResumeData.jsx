// create the drawer data consisting the  id, title and icons 
import {
    FaUserGraduate,
    FaHistory,
    FaCode,
    FaProjectDiagram,
    FaPalette,
  } from "react-icons/fa";
  
  export const resumeTabs = [
    {
      id: 0,
      title: "Education",
      icon: <FaUserGraduate />,
    },
    {
      id: 1,
      title: "Work History",
      icon: <FaHistory />,
    },
    {
      id: 2,
      title: "Programming Skills",
      icon: <FaCode />,
    },
    {
      id: 3,
      title: "Projects",
      icon: <FaProjectDiagram />,
    },
    {
      id: 4,
      title: "Interests",
      icon: <FaPalette />,
    },
  ];