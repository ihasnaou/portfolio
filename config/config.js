
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
  title: "Hey there, I'm Ilyes",
  description: "A Software Engineer graduate from Carleton University.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/132DJAXGFnVpXM5ssiz3mZOKXe1DLZW83B8C2zQ5rs7k/edit",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I graduated from Carleton University in Spring 2024 with a B.Eng in Software Engineering. I have previously worked at Bell Canada, as a QA analyst intern on the FibeTV app.",
    "One of my favorite things about being in the tech industry is that it is an ever-evolving challenging environment, which suits me as I always thrive to hone my skills. I can be sure that I will always put in my all when working on a project.",
    "I have had prior experience in: Java, Python, C, SQL, AWS, Azure, PyTorch, OpenCV, Maven, TestRail, Jira, CI/CD, Agile/Scrum methodologies, amongst others things. I am also fluent in English and French, and can use Arabic and Spanish at a professional level. For more details, feel free to check out my resume!",
    "On a more personal note, I also enjoy: reading, music, soccer and basketball. Don't hesitate to reach out to discuss any of these!",
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Fish Recognition",
      description: "A machine learning tool trained to identify species of fish given an image using OpenCV and Pytorch.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/seanchung2001/Fish-Recognition",
        },
      ]
    },
    {
      title: "MELBA - 4th year capstone project",
      description: "An automated tool support for category-partition testing - added JML support.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/yvanlabiche/Melba",
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
