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

export const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-offWhite"
  >
    <path
      fillRule="evenodd"
      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
      clipRule="evenodd"
    />
  </svg>
);

export const ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-offWhite"
  >
    <path
      fillRule="evenodd"
      d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
      clipRule="evenodd"
    />
  </svg>
);

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
