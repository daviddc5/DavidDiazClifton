import React from "react";
import {
  User,
  Briefcase,
  GraduationCap,
  Code,
  Contact,
  FolderKanban,
} from "lucide-react";

// Section definitions for the grid
const sections = [
  {
    id: "profile",
    title: "Profile",
    icon: <User size={24} />,
    color: "#E60012", // Nintendo Red
  },
  {
    id: "experience",
    title: "Experience",
    icon: <Briefcase size={24} />,
    color: "#1EAAF1", // Blue Joy-Con
  },
  {
    id: "education",
    title: "Education",
    icon: <GraduationCap size={24} />,
    color: "#1AB500", // Nintendo Green
  },
  {
    id: "skills",
    title: "Skills",
    icon: <Code size={24} />,
    color: "#00C3E3", // Blue
  },
  {
    id: "projects",
    title: "Projects",
    icon: <FolderKanban size={24} />,
    color: "#9747FF", // Purple
  },
  {
    id: "contact",
    title: "Contact",
    icon: <Contact size={24} />,
    color: "#FFA200", // Nintendo Orange
  },
];

// Content for each section
const profile = {
  text: "Full Stack Developer with a frontend focus, passionate about creating intuitive interfaces. I enjoy backend work and aim to grow further in UI design.",
};

const experience = {
  jobs: [
    {
      company: "Vindico ICS Ltd",
      role: "Full Stack Software Developer",
      period: "Oct 2023 – Present",
      techStack:
        "Vue3 · Vue2 · NodeJS · MongoDB · Firebase · Redis · Google Cloud Platform",
      bullets: [
        "Contributed to web and mobile apps for the care home industry, serving 50,000 users.",
        "Redeveloped an entertainment system enhancing resident well-being through interactive activities.",
        "Developed a learning management system (LMS) for staff training and certification tracking.",
        "Collaborated with stakeholders in Agile development cycles to deliver user-centered solutions.",
      ],
    },
    {
      company: "Hatless Talent",
      role: "Trainee Full Stack Developer",
      period: "Jul 2023 – Aug 2023",
      techStack:
        "React · Tailwind CSS · Bootstrap · Figma · HTML · CSS · JavaScript · Git · GitHub",
      bullets: [
        "Completed an intensive one-month training programme simulating a real-world development environment.",
        "Built small applications using React, Tailwind CSS, and Bootstrap.",
        "Designed UI/UX mockups using Figma for various applications.",
        "Developed Eventify, an event management platform, in a team of seven using Agile principles.",
      ],
    },
    {
      company: "Cardiff Centre for AI, Robotics and Human-Machine Systems",
      role: "Software Engineer (Year in Industry)",
      period: "Sep 2021 – Jun 2022",
      techStack: "NodeJS · JavaScript · React · HTML · CSS · Bootstrap",
      bullets: [
        "Developed applications for interdisciplinary research at the intersection of psychology, engineering, and computer science.",
        "Created a drone radar simulator for BAE Systems to measure trust in automated systems.",
        "Contributed to both technical implementation and experimental design.",
        "Project available on GitHub: Drone Radar Simulator",
      ],
    },
  ],
};

const education = {
  schools: [
    {
      institution: "Cardiff University",
      degree: "BSc, Computer Science with a Year in Industry",
      period: "Sep 2019 - Jun 2023",
      grade: "69% (Upper Second-Class Honours, 2:1)",
      details: [
        "Skills: JavaScript · Python · Mathematics · Git · Computer Science · Human-Computer Interaction · Figma · Java · SQL · MongoDB",
        "Dissertation: 'Designing a Productivity App to Reduce Digital Distractions at Work' – Grade: 72%",
        "Supervised by Dr. Nervo Verdezoto Dias; Moderated by Dr. Yipeng Qin",
        "Prototyped an app to promote focus and wellbeing by tracking app usage and scheduling tasks.",
      ],
    },
    {
      institution: "Hockerill Anglo-European College",
      degree: "International Baccalaureate",
      period: "Sep 2017 - Jul 2019",
    },
  ],
};

const skills = {
  technical: [
    "Frontend: React, Vue, JavaScript, HTML, CSS, Tailwind, Bootstrap",
    "Backend: Node.js, MongoDB, Firebase, Redis, SQL",
    "Tools: Git, GitHub, Figma, Google Cloud Platform",
  ],
  languages: [
    "Fluent in English and Spanish",
    "Intermediate French (A2)",
    "Currently learning Turkish",
  ],
  interests: [
    "Calisthenics, football, hiking, and travel",
    "Passionate about digital and physical design",
  ],
};

// New projects section
const projects = {
  projects: [
    {
      title: "Nintendo Switch Portfolio",
      description:
        "Interactive portfolio website designed to mimic the Nintendo Switch interface, built with React and modern CSS.",
      image: "/api/placeholder/400/200",
      tech: ["React", "CSS", "JavaScript"],
      github: "https://github.com/VindicoDavid/nintendo-switch-portfolio",
      live: "https://daviddiazclifton.com",
    },
    {
      title: "Drone Radar Simulator",
      description:
        "A simulator developed for BAE Systems to measure trust in automated systems when experiencing changes in precision.",
      image: "/api/placeholder/400/200",
      tech: ["React", "Node.js", "JavaScript"],
      github: "https://github.com/VindicoDavid/drone-simulator",
    },
    {
      title: "Eventify",
      description:
        "An event management and ticketing platform built during Hatless Talent training, featuring event creation, ticketing, and user management.",
      image: "/api/placeholder/400/200",
      tech: ["React", "Tailwind CSS", "Firebase"],
      github: "https://github.com/VindicoDavid/eventify",
      live: "https://eventify-demo.netlify.app",
    },
    {
      title: "Productivity App",
      description:
        "App designed to reduce digital distractions by tracking app usage and scheduling tasks, developed for my dissertation project.",
      image: "/api/placeholder/400/200",
      tech: ["React Native", "Node.js", "MongoDB"],
      github: "https://github.com/VindicoDavid/productivity-app",
    },
  ],
};

const contact = {
  location: "London, E10QQ, UK",
  email: "daviddiazclifton@gmail.com",
  phone: "0739126380",
  linkedin: "www.linkedin.com/in/daviddiazclifton",
  github: "https://github.com/VindicoDavid",
};

const portfolioData = {
  sections,
  profile,
  experience,
  education,
  skills,
  projects,
  contact,
};

export default portfolioData;
