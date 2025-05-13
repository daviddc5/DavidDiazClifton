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
    color: "#B23A48", // Muted Nintendo Red
  },
  {
    id: "experience",
    title: "Experience",
    icon: <Briefcase size={24} />,
    color: "#4A7B9D",
  },
  {
    id: "education",
    title: "Education",
    icon: <GraduationCap size={24} />,
    color: "#4E9B69",
  },
  {
    id: "skills",
    title: "Skills",
    icon: <Code size={24} />,
    color: "#D4B56A",
  },
  {
    id: "contact",
    title: "Contact",
    icon: <Contact size={24} />,
    color: "#C27E9E",
  },
  {
    id: "projects",
    title: "Projects",
    icon: <FolderKanban size={24} />,
    color: "#6A5A8C",
  },
];
// Content for each section
const profile = {
  text: "I'm a Full Stack Developer with a frontend emphasis, passionate about creating intuitive user experiences and seamless interfaces. At the same time, I deeply enjoy backend development—designing robust systems and scalable architectures—and continue to expand my expertise in that area. I'm especially drawn to JavaScript and Python for their versatility across the stack.",
};

const experience = {
  jobs: [
    {
      company: "Vindico ICS Ltd",
      role: "Full Stack Software Developer",
      period: "Oct 2023 – Present",
      techStack:
        "Vue3 · Vue2 · NodeJS · React · MongoDB · Firebase · Redis · Google Cloud Platform",
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
      company:
        "Cardiff Centre for AI, Robotics and Human-Machine Systems (IROHMS)",
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
    "Frontend: HTML, CSS, JavaScript, React, Typescript, Vue3, Tailwind CSS, Bootstrap",
    "Backend: Node.js, MongoDB, Firebase, Redis, SQL, Python, Java",
    "Tools: Git, GitHub, Figma, Google Cloud Platform",
  ],
  languages: [
    "Fluent in English and Spanish",
    "Intermediate French (A2)",
    "Currently learning Turkish",
  ],
  interests: [
    "Calisthenics, photography, football, hiking, and travel",
    "Passionate about digital and physical design",
  ],
};

// New projects section
const projects = {
  projects: [
    {
      title: "Care Home Systems",
      description:
        "Contributed to the development of web and mobile apps for the care home industry, serving 50,000 users, focusing on resident engagement and supporting care providers. This project is under NDA. Please reach out to me (daviddiazclifton@gmail.com) if you'd like to learn more about the project! ",
      image: "CareHomeLogin.jpg",
      tech: ["Vue3", "Node.js", "MongoDB", "React"],
    },
    {
      title: "Productivity App",
      description:
        "Responsive website developed for my university disseration designed to reduce digital distractions by tracking app usage and scheduling tasks, developed for my dissertation project.",
      image: "ProductivityApp.png",
      tech: ["React Native", "Node.js"],
      github: "https://github.com/VindicoDavid/productivity-app",
      live: "https://boisterous-basbousa-d66359.netlify.app/",
    },
    {
      title: "Drone Radar Simulator",
      description:
        "A simulator application developed for BAE Systems/Cardiff University joint research to measure trust in automated systems when experiencing changes in precision.",
      image: "DroneSimulator.png",
      tech: ["React", "Node.js", "JavaScript"],
      github:
        "https://github.com/daviddc5/DroneRadarSimulatorCopy?tab=readme-ov-file",
    },
    {
      title: "Eventify Figma Mockup",
      description:
        "An event management and ticketing platform built during Hatless Talent training, featuring event creation, ticketing, and user management.",
      image: "Eventify.png",
      tech: ["Figma", "React", "Node.js"],
      // github: "https://github.com/VindicoDavid/eventify",
      live: "https://www.figma.com/design/0i1KP9IWtJ9PcBfgr7C3VS/Hatless-Talent---Eventify-Designs?node-id=0-1&p=f&t=AuL3S7D5ACHtV5GT-00",
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
