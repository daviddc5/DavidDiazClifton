import React from "react";
import { User, Briefcase, GraduationCap, Code, Contact } from "lucide-react";

const portfolioData = [
  {
    id: "profile",
    title: "Profile",
    icon: <User size={24} />,
    color: "#E60012", // Nintendo Red
    content: {
      text: "Full Stack Developer with a frontend focus, passionate about creating intuitive interfaces. I enjoy backend work and aim to grow further in UI design.",
    },
  },
  {
    id: "experience",
    title: "Experience",
    icon: <Briefcase size={24} />,
    color: "#1EAAF1", // Blue Joy-Con
    content: {
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
    },
  },
  {
    id: "education",
    title: "Education",
    icon: <GraduationCap size={24} />,
    color: "#1AB500", // Nintendo Green
    content: {
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
    },
  },
  {
    id: "skills",
    title: "Skills",
    icon: <Code size={24} />,
    color: "#00C3E3", // Blue
    content: {
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
    },
  },
  {
    id: "contact",
    title: "Contact",
    icon: <Contact size={24} />,
    color: "#FFA200", // Nintendo Orange
    content: {
      location: "London, E10QQ, UK",
      email: "daviddiazclifton@gmail.com",
      phone: "0739126380",
      linkedin: "www.linkedin.com/in/daviddiazclifton",
      github: "https://github.com/VindicoDavid",
    },
  },
];

export default portfolioData;
