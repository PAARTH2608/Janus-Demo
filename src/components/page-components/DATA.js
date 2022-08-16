import { FaReact, FaNodeJs, FaPython, FaGit } from "react-icons/fa";
import { DiDjango, DiMysql } from "react-icons/di";
import { SiFlutter } from "react-icons/si";
import { BsServer } from "react-icons/bs";

const Data = [
  {
    id: 1,
    name: "React",
    icon: <FaReact size={26} />,
    url: "https://reactjs.org/",
  },
  {
    id: 2,
    name: "Node.js",
    icon: <FaNodeJs size={26} />,
    url: "https://nodejs.org/en/",
  },
  {
    id: 3,
    name: "Python",
    icon: <FaPython size={26} />,
    url: "https://www.python.org/",
  },
  {
    id: 4,
    name: "Django",
    icon: <DiDjango size={26} />,
    url: "https://www.djangoproject.com/",
  },
  {
    id: 5,
    name: "MySQL",
    icon: <DiMysql size={26} />,
    url: "https://www.mysql.com/",
  },
  {
    id: 6,
    name: "Flutter",
    icon: <SiFlutter size={26} />,
    url: "https://flutter.dev/",
  },
  {
    id: 7,
    name: "Git",
    icon: <FaGit size={26} />,
    url: "https://git-scm.com/",
  },
  {
    id: 8,
    name: "Server",
    icon: <BsServer size={26} />,
    url: "https://www.server.com/",
  },
];

export default Data;
