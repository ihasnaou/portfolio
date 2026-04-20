
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Sections",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
}
export const intro = {
  title: "Ilyes Hasnaou",
  description: "Backend-focused Software Engineer specializing in distributed systems, concurrent processing, and production-grade applications.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/1jgQ-FfMVx5C3IuUVDEGhMLHKRbLkQIthViiJ0IbwaQI/edit?tab=t.0",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "Software Engineering graduate from Carleton University (2024), transitioning to a Master of Engineering in Electrical and Computer Engineering at the University of Waterloo (Co-op).",
    "Industry experience across Bell Canada, Labeeb IoT, and freelance work, building and supporting production systems with real-world constraints, fault handling, and deployment ownership.",
    "Key projects include reactive and distributed systems (Play, Apache Pekko, UDP), real-time pipelines, and end-to-end applications with CI/CD and cloud infrastructure.",
    "Technical stack: Java, Python, Go, Spring Boot, REST APIs, PostgreSQL, AWS, Azure, and Linux. Additional exposure to machine learning systems using PyTorch and OpenCV.",
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
  title: "NotiLytics",
  description: "A reactive news analytics platform built with Play Framework and Apache Pekko, featuring real-time streaming, non-blocking data ingestion, and fault-tolerant actor-based architecture.",
  icons: [
    {
      icon: faGithub,
      link: "https://github.com/S-15-77/NotiLytics",
    },
  ]
},
    {
  title: "Freelance Systems for Small Businesses",
  description: "Production web systems for booking and inventory management with real-world deployment and operational usage in the Ottawa/Kanata area",
},
    {
  title: "Distributed Elevator Control System",
  description: "A distributed elevator simulation built in Java using UDP communication, featuring a scheduler-driven architecture, state machines, real-time GUI visualization, and fault-tolerant handling of transient and hard failures.",
  icons: [
    {
      icon: faGithub,
      link: "https://github.com/ConnorMarcus/SYSC3303Project",
    },
  ]
},
{
  title: "Customer Segmentation & Prediction System",
  description: "An end-to-end machine learning pipeline combining K-Means clustering and supervised models to generate actionable customer insights and high-performance predictions.",
  icons: [
    {
      icon: faGithub,
      link: "https://github.com/ihasnaou/Customer-Segmentation-Prediction-System",
    },
  ]
},
{
  title: "K-Means Optimization & OPKM Research",
  description: "A research-focused implementation of K-Means and OPKM clustering algorithms, including custom initialization strategies and performance benchmarking against standard approaches.",
  icons: [
    {
      icon: faGithub,
      link: "https://github.com/ihasnaou/K-Means-OPKM-Model-Training",
    },
  ]
},
    {
      title: "Amazin Library",
      description: "A CI/CD web-based online book store made using Java Spring Boot, AJAX, and deployment tools like Microsoft Azure and AWS Codestar (now deprecated!).",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/FARHAN-MAHAMUD/SYSC-4806-Project",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Contact me!",
  description: "Please do not hesitate to reach out directly by email at ia.hasnaou@gmail.com, or send me an invite to connect on LinkedIn",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:ia.hasnaou@gmail.com",
      isPrimary: true,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ilyes-hasnaou",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Ilyes Hasnaou's Portfolio Website",
  description: "The personal website/portfolio of Ilyes Hasnaou, made using Nextjs and Bootstrap5, inspired by Hashir Shoaib.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "My links",
  description: "Email: ia.hasnaou@gmail.com",
  cards: [
    {
      title: "My GitHub",
      link: "https://github.com/ihasnaou/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/ilyes-hasnaou",
    },
  ]
}
