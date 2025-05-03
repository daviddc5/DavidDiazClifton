import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  User,
  Briefcase,
  GraduationCap,
  Code,
  Contact,
} from "lucide-react";

const NintendoSwitchPortfolio = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(87);

  // Time updater
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Portfolio sections as "game tiles"
  const sections = [
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
            company:
              "Cardiff Centre for AI, Robotics and Human-Machine Systems",
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

  // Handle section selection
  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setIsMenuOpen(false);
  };

  // Return to home menu
  const handleHomeClick = () => {
    setSelectedSection(null);
    setIsMenuOpen(true);
  };

  // Format time for header
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Render the top status bar
  const renderStatusBar = () => (
    <div className="status-bar">
      <span className="time">{formatTime(currentTime)}</span>
      <div className="status-icons">
        <span className="wifi-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <circle cx="12" cy="20" r="1" />
          </svg>
        </span>
        <span className="battery">
          <div className="battery-icon">
            <div
              className="battery-level"
              style={{ width: `${batteryLevel}%` }}
            ></div>
          </div>
          {batteryLevel}%
        </span>
      </div>
    </div>
  );

  // Render user avatar with info
  const renderUserProfile = () => (
    <div className="user-profile">
      <div className="avatar-container">
        <img
          src="/api/placeholder/200/200"
          alt="David Diaz"
          className="avatar"
        />
      </div>
      <div className="user-info">
        <h1 className="user-name">David Diaz Clifton</h1>
        <p className="user-title">Full Stack Developer</p>
      </div>
    </div>
  );

  // Render home screen with app grid
  const renderHomeScreen = () => (
    <div className="home-screen">
      {renderUserProfile()}

      <div className="section-grid">
        {sections.map((section) => (
          <div
            key={section.id}
            className="section-tile"
            style={{ backgroundColor: section.color }}
            onClick={() => handleSectionClick(section)}
          >
            <div className="tile-icon">{section.icon}</div>
            <span className="tile-title">{section.title}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // Render profile section
  const renderProfileSection = () => (
    <div className="section-content profile-section">
      <h2>Profile</h2>
      <div className="profile-card">
        <p>{sections.find((s) => s.id === "profile").content.text}</p>
      </div>
    </div>
  );

  // Render experience section
  const renderExperienceSection = () => (
    <div className="section-content experience-section">
      <h2>Experience</h2>

      <div className="experience-cards">
        {sections
          .find((s) => s.id === "experience")
          .content.jobs.map((job, index) => (
            <div
              key={index}
              className="experience-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="job-header">
                <h3>{job.company}</h3>
                <span className="job-period">{job.period}</span>
              </div>
              <p className="job-role">{job.role}</p>
              <p className="job-tech">{job.techStack}</p>
              <ul className="job-bullets">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );

  // Render education section
  const renderEducationSection = () => (
    <div className="section-content education-section">
      <h2>Education</h2>

      <div className="education-cards">
        {sections
          .find((s) => s.id === "education")
          .content.schools.map((school, index) => (
            <div
              key={index}
              className="education-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="school-header">
                <h3>{school.institution}</h3>
                <span className="school-period">{school.period}</span>
              </div>
              <p className="school-degree">{school.degree}</p>
              {school.grade && <p className="school-grade">{school.grade}</p>}

              {school.details && (
                <ul className="school-details">
                  {school.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
    </div>
  );

  // Render skills section
  const renderSkillsSection = () => {
    const skills = sections.find((s) => s.id === "skills").content;

    return (
      <div className="section-content skills-section">
        <h2>Skills & Interests</h2>

        <div className="skills-container">
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <ul className="skill-list">
              {skills.technical.map((skill, index) => (
                <li key={index} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="skill-category">
            <h3>Languages</h3>
            <ul className="skill-list">
              {skills.languages.map((language, index) => (
                <li key={index} className="skill-item">
                  {language}
                </li>
              ))}
            </ul>
          </div>

          <div className="skill-category">
            <h3>Interests</h3>
            <ul className="skill-list">
              {skills.interests.map((interest, index) => (
                <li key={index} className="skill-item">
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  // Render contact section
  const renderContactSection = () => {
    const contact = sections.find((s) => s.id === "contact").content;

    return (
      <div className="section-content contact-section">
        <h2>Contact</h2>

        <div className="contact-card">
          <div className="contact-item">
            <MapPin size={20} />
            <span>{contact.location}</span>
          </div>

          <div className="contact-item">
            <Mail size={20} />
            <a href={`mailto:${contact.email}`} className="contact-link">
              {contact.email}
            </a>
          </div>

          <div className="contact-item">
            <Phone size={20} />
            <a href={`tel:${contact.phone}`} className="contact-link">
              {contact.phone}
            </a>
          </div>

          <div className="contact-item">
            <Linkedin size={20} />
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {contact.linkedin}
            </a>
          </div>

          <div className="contact-item">
            <Github size={20} />
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {contact.github}
            </a>
          </div>
        </div>
      </div>
    );
  };

  // Render section content based on selection
  const renderSectionContent = () => {
    if (!selectedSection) return null;

    switch (selectedSection.id) {
      case "profile":
        return renderProfileSection();
      case "experience":
        return renderExperienceSection();
      case "education":
        return renderEducationSection();
      case "skills":
        return renderSkillsSection();
      case "contact":
        return renderContactSection();
      default:
        return null;
    }
  };

  // Render bottom navigation bar
  const renderNavBar = () => (
    <div className="nav-bar">
      <button className="home-button" onClick={handleHomeClick}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </button>

      {selectedSection && (
        <div className="section-indicator">
          <div
            className="indicator-color"
            style={{ backgroundColor: selectedSection.color }}
          ></div>
          <span>{selectedSection.title}</span>
        </div>
      )}

      <div className="controls">
        <span className="control-btn">A</span>
        <span className="control-text">Select</span>
        <span className="control-btn">B</span>
        <span className="control-text">Back</span>
      </div>
    </div>
  );

  return (
    <div className="nintendo-switch-portfolio">
      {renderStatusBar()}

      <div className="console-content">
        {isMenuOpen ? (
          renderHomeScreen()
        ) : (
          <div
            className="section-view"
            style={{ backgroundColor: selectedSection.color + "15" }}
          >
            {renderSectionContent()}
          </div>
        )}
      </div>

      {renderNavBar()}
    </div>
  );
};

// Inject CSS
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  :root {
    --switch-bg: #f5f5f7;
    --switch-dark: #1a1a1a;
    --switch-text: #333;
    --switch-red: #E60012;
    --switch-blue: #1EAAF1;
    --switch-nav: #2c2c2c;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #1a1a1a;
    color: var(--switch-text);
    line-height: 1.6;
  }

  .nintendo-switch-portfolio {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--switch-bg);
    position: relative;
    overflow: hidden;
  }

  /* Status Bar */
  .status-bar {
    background-color: var(--switch-dark);
    color: white;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }

  .status-icons {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .battery {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .battery-icon {
    width: 22px;
    height: 12px;
    border: 1px solid white;
    border-radius: 2px;
    position: relative;
    margin-right: 2px;
  }

  .battery-icon:after {
    content: '';
    position: absolute;
    right: -3px;
    top: 3px;
    width: 2px;
    height: 6px;
    background-color: white;
    border-radius: 0 2px 2px 0;
  }

  .battery-level {
    position: absolute;
    left: 1px;
    top: 1px;
    height: 8px;
    background-color: #4CD964;
    border-radius: 1px;
  }

  /* Console Content */
  .console-content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background-color: var(--switch-bg);
  }

  /* User Profile */
  .user-profile {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
  }

  .avatar-container {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .user-name {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .user-title {
    color: #555;
    font-weight: 500;
  }

  /* Section Grid */
  .section-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 20px;
    padding: 10px 0;
  }

  .section-tile {
    height: 140px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .section-tile:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  .tile-icon {
    margin-bottom: 12px;
    background-color: rgba(255, 255, 255, 0.2);
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tile-title {
    font-size: 16px;
    font-weight: 500;
  }

  /* Nav Bar */
  .nav-bar {
    background-color: var(--switch-nav);
    color: white;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .home-button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    transition: background-color 0.2s;
  }

  .home-button:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .section-indicator {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
  }

  .indicator-color {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .control-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #555;
    font-weight: 700;
    font-size: 12px;
  }

  .control-text {
    font-size: 12px;
    margin-right: 10px;
  }

  /* Section Content Styles */
  .section-content {
    padding: 20px;
    color: var(--switch-dark);
  }

  .section-content h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 24px;
    position: relative;
    display: inline-block;
  }

  .section-content h2:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 4px;
    background-color: currentColor;
  }

  /* Profile Section */
  .profile-card {
    background-color: white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    font-size: 18px;
    line-height: 1.6;
  }

  /* Experience Section */
  .experience-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .experience-card, .education-card {
    background-color: white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    animation: slideIn 0.3s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
  }

  .job-header, .school-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  .job-header h3, .school-header h3 {
    font-size: 20px;
    font-weight: 700;
    color: var(--switch-dark);
  }

  .job-period, .school-period {
    font-size: 14px;
    color: #666;
    font-weight: 500;
  }

  .job-role, .school-degree {
    font-size: 16px;
    font-weight: 500;
    color: var(--switch-blue);
    margin-bottom: 6px;
  }

  .job-tech {
    font-size: 14px;
    color: #666;
    margin-bottom: 16px;
  }

  .job-bullets, .school-details {
    list-style-type: none;
  }

  .job-bullets li, .school-details li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 8px;
  }

  .job-bullets li:before, .school-details li:before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--switch-red);
    font-weight: bold;
  }

  /* Skills Section */
  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  .skill-category {
    background-color: white;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  .skill-category h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--switch-dark);
    padding-bottom: 8px;
    border-bottom: 2px solid #eee;
  }

  .skill-list {
    list-style-type: none;
  }

  .skill-item {
    position: relative;
    padding-left: 18px;
    margin-bottom: 10px;
  }

  .skill-item:before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--switch-blue);
  }

  /* Contact Section */
  .contact-card {
    background-color: white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .contact-item svg {
    color: var(--switch-blue);
  }

  .contact-link {
    color: var(--switch-blue);
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .contact-link:hover {
    opacity: 0.8;
  }

  /* Animations */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .section-grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
    
    .section-tile {
      height: 120px;
    }
    
    .skills-container {
      grid-template-columns: 1fr;
    }
    
    .job-header, .school-header {
      flex-direction: column;
      gap: 5px;
    }
  }

  @media (max-width: 480px) {
    .user-profile {
      flex-direction: column;
      text-align: center;
    }
    
    .controls {
      display: none;
    }
  }
`;

// Add styles to document
const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default NintendoSwitchPortfolio;
