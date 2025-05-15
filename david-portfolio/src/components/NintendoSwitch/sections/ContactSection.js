import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import SectionHeader from "../../shared/SectionHeader";
import Card from "../../shared/Card";

// For projects using Create React App or similar:
// Import the image from the public folder
// If you're using Next.js, use this import instead:
// import seaPhoto from "../../../../public/seaPhoto.jpg";

const ContactSection = ({ data }) => {
  return (
    <div className="section-content contact-section">
      <SectionHeader title="Contact" />

      <Card className="contact-card">
        <div className="contact-item">
          <MapPin size={25} />
          <span>{data.location}</span>
        </div>

        <div className="contact-item">
          <Mail size={25} />
          <a href={`mailto:${data.email}`} className="contact-link">
            {data.email}
          </a>
        </div>

        <div className="contact-item">
          <Phone size={25} />
          <a href={`tel:${data.phone}`} className="contact-link">
            {data.phone}
          </a>
        </div>

        <div className="contact-item">
          <Linkedin size={25} />
          <a
            href={`https://${data.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {data.linkedin}
          </a>
        </div>

        <div className="contact-item">
          <Github size={25} />
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {data.github}
          </a>
        </div>
      </Card>
    </div>
  );
};

export default ContactSection;
