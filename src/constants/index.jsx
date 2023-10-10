import {
  html,
  css,
  javascript,
  typescript,
  python,
  java,
  cpp,
  mysql,
  react,
  tailwind,
  angular,
  node,
  nextjs,
  express,
  git,
} from "../assets";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

export const skills = {
  languages: [
    {
      id: "html",
      title: "HTML",
      src: html,
    },
    {
      id: "css",
      title: "CSS",
      src: css,
    },
    {
      id: "javascript",
      title: "Javascript",
      src: javascript,
    },
    {
      id: "typescript",
      title: "Typescript",
      src: typescript,
    },
    {
      id: "python",
      title: "Python",
      src: python,
    },
    {
      id: "java",
      title: "Java",
      src: java,
    },
    {
      id: "cpp",
      title: "C++",
      src: cpp,
    },
    {
      id: "mysql",
      title: "MySQL",
      src: mysql,
    },
  ],
  other: [
    {
      id: "react",
      title: "React",
      src: react,
    },
    {
      id: "angular",
      title: "Angular",
      src: angular,
    },
    {
      id: "nextjs",
      title: "Next.js",
      src: nextjs,
    },
    {
      id: "tailwind",
      title: "Tailwind CSS",
      src: tailwind,
    },
    {
      id: "node",
      title: "Node.js",
      src: node,
    },
    {
      id: "express",
      title: "Express",
      src: express,
    },
    {
      id: "git",
      title: "Git",
      src: git,
    },
  ],
};

export const projects = [
  {
    id: "YSS",
    title: "Youth Spiritual Summit Platform",
    description:
      "A full-stack web app supporting 3 primary users: highschool youth, parents, and summit administrators.",
    tags: ["React", "MySQL", "Node.js", "GCP"],
  },
  {
    id: "CLEANRS",
    title: "CLEANRS: A Needs-Conscious Food Platform",
    description: "",
    tags: ["React Native"],
  },
];

export const socialLinks = [
  {
    id: "linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/linda-vo-9a5b541b8/",
    icon: <BsLinkedin />,
  },
  {
    id: "github",
    title: "Github",
    link: "https://github.com/lvndavo",
    icon: <BsGithub />,
  },
];
