/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Ankit Kumar",
  title: "Hi all, I'm Ankit",
  subTitle: emoji(
    "A passionate Computer Engineering student 🚀 with expertise in Cloud Computing (AWS), Full Stack Development (MERN), and Deep Learning. I love building scalable, efficient solutions and exploring emerging technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VolpmM3c1esZZ2Edldz0KzZGJrCt8suH/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AnkitPathak0987",
  linkedin: "https://www.linkedin.com/in/ankit-kumar-0b54a2253",
  gmail: "ankit.anny2004@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "COMPUTER ENGINEERING STUDENT EXPLORING CLOUD, FULL STACK & AI/ML",
  skills: [
    emoji(
      "⚡ Build full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js)"
    ),
    emoji(
      "⚡ Deploy and manage cloud infrastructure on AWS — EC2, VPC, IAM, S3"
    ),
    emoji(
      "⚡ Develop deep learning models using CNNs and Transfer Learning for real-world problems"
    )
  ],

  softwareSkills: [
    {skillName: "C++", fontAwesomeClassname: "fas fa-code"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: ".NET", fontAwesomeClassname: "fab fa-microsoft"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "ReactJS", fontAwesomeClassname: "fab fa-react"},
    {skillName: "NodeJS", fontAwesomeClassname: "fab fa-node"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-database"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-table"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "GitHub", fontAwesomeClassname: "fab fa-github"}
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "MIT Academy of Engineering, Pune",
      logo: require("./assets/images/mitaoeLogo.png"),
      subHeader: "B.Tech. in Computer Engineering",
      duration: "2022 - 2026",
      desc: "Currently pursuing B.Tech with a CGPA of 8.42/10. Focused on Cloud Computing, DSA, DBMS, and Full Stack Development.",
      descBullets: [
        "Solved 200+ DSA problems on CodeChef, LeetCode & HackerRank",
        "Built full-stack and AI/ML projects as part of curriculum"
      ]
    },
    {
      schoolName: "P C High School Patsa, Samastipur, Bihar",
      logo: require("./assets/images/schoolLogo.jpg"),
      subHeader: "12th Grade — CBSE",
      duration: "2021",
      desc: "Completed 12th with 77.20% marks under CBSE board.",
      descBullets: []
    }
  ]
};

// Tech Stack Proficiency Bars

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Cloud Computing (AWS)", progressPercentage: "80%"},
    {Stack: "Full Stack Dev (MERN)", progressPercentage: "70%"},
    {Stack: "C++ / DSA / OOPs", progressPercentage: "75%"}
  ],
  displayCodersrank: false
};

// Work Experience Section

const workExperiences = {
  display: true,
  experience: [
    {
      role: ".NET Developer",
      company: "Indiaresult.com",
      companylogo: require("./assets/images/IRC-logo.png"),
      date: "Present",
      desc: "Currently working as a .NET Developer at ndiaresult.com, developing robust applications using .NET technologies.",
      descBullets: [
        "Developing and maintaining .NET applications",
        "Collaborating on software development projects"
      ]
    },
    {
      role: "AWS Cloud Intern",
      company: "EduSkills Foundation",
      companylogo: require("./assets/images/airbnbLogo.png"), // 🔁 Replace with EduSkills logo
      date: "Jul 2024 – Sep 2024",
      desc: "Completed a 10-week AWS Cloud Virtual Internship with hands-on experience in cloud infrastructure.",
      descBullets: [
        "Worked with AWS services: EC2, VPC, IAM, and S3",
        "Configured and deployed cloud resources focusing on security and scalability",
        "Implemented best practices for cloud resource and infrastructure management"
      ]
    }
  ]
};

// Open Source / GitHub Section

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Projects Section

const bigProjects = {
  title: "Projects",
  subtitle: "ACADEMIC AND PERSONAL PROJECTS I HAVE BUILT",
  projects: [
    {
      image: "https://cdn-icons-png.flaticon.com/512/2965/2965335.png",
      projectName: "Podcast Web Application",
      projectDesc:
        "A full-stack MERN app allowing users to upload, stream, and manage podcasts with CRUD operations. Deployed on AWS with MongoDB for scalable storage.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/nirmalchatur/Group7_Podcaster"
        }
      ]
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/4616/4616734.png",
      projectName: "Deep Fake Detection System",
      projectDesc:
        "A Deep Learning system using CNNs and Transfer Learning to detect AI-generated fake faces. Includes image preprocessing, model training, and a Flask web interface.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/AnkitPathak0987/Deepfake-detector"
        }
      ]
    }
  ],
  display: true
};

// Achievements & Certifications

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications, Course Completions, and Competitions!",

  achievementsCards: [
    {
      title: "NPTEL Cloud Computing — Elite (82/100)",
      subtitle:
        "Completed NPTEL Cloud Computing certification. Covered AWS, GCP, Azure, virtualization, IaaS/PaaS/SaaS, load balancing, auto-scaling, and security.",
      image: require("./assets/images/nptelLogo.png"),
      imageAlt: "NPTEL Logo",
      footerLink: [{name: "View Certificate", url: ""}]
    },
    {
      title: "MERN Stack Development — TechSaksham",
      subtitle:
        "Certified in MERN Stack Application Development under TechSaksham, a Microsoft & SAP CSR initiative.",
      image: require("./assets/images/mernLogo.png"),
      imageAlt: "Microsoft TechSaksham Logo",
      footerLink: [{name: "View Certificate", url: ""}]
    },
    {
      title: "3rd Place — Sub-District Chess Tournament",
      subtitle:
        "Secured 3rd place in the Sub-District Chess Tournament, demonstrating analytical and strategic thinking.",
      image: require("./assets/images/chessLogo.png"),
      imageAlt: "Chess Award",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section — Disabled (no blogs yet)

const blogSection = {
  title: "Blogs",
  subtitle: "I love sharing knowledge about tech and my learning journey.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Section — Disabled

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE 😄"),
  talks: [],
  display: false
};

// Podcast Section — Disabled

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECH AND MY JOURNEY",
  podcast: [],
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or just say hi? My inbox is open for all!",
  number: "+91-9631509727",
  email_address: "ankit.anny2004@gmail.com"
};

// Twitter — Disabled

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true; // Open for opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
