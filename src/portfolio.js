/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kiran Kumar Malik",
  description:
    "A passionate individual who always thrives which develop and scalable social and technical systems to create.",
  og: {
    title: "Kiran Kumar Malik",
    type: "website",
    url: "http://kirankumarmalik.com/",
  },
};

//Home Page
const greeting = {
  title: "Kiran Kumar Malik",
  logo_name: "KiranKumarMalik",
  nickname: "kiran",
  subTitle:
    "A passionate individual who always end to end which develop and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/KiranKumarMalik",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/KiranKumarMalik",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kirankm7/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@devhub_cloud",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:kirankumarmalik321@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100013623729164/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/spyder__.kiran/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Cloud Computing & DevOps",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Centurion University Of Technology and Management, Bhubaneswar, Odisha",
      subtitle: "B.Tech. in Computer Science & Engineering",
      logo_path: "cutm_logo.png",
      alt_name: "CUTM",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Proficient in core software engineering subjects such as Data Structures, Algorithms, DBMS, Operating Systems, Cloud Computing, Computer Architecture, and Artificial Intelligence.",
        "⚡ Completed additional certified courses in AWS, Microsoft Azure, Oracle and Salesforce.",
        "⚡ Awarded the Merit-cum-Means Scholarship for ranking in the top 10% of students, and recognized by the Governer of Odisha (Shri. Raghubar Das) for top 1 in B.Tech CSE among 6 campuses of Centurion University.",
      ],
      website_link: "https://cutm.ac.in/",
    },
    {
      title: "Khaira Higher Secondary School, Khaira, Balasore, Odisha",
      subtitle: "Class XII (Science)",
      logo_path: "khaira.jpg",
      alt_name: "Higher Secondary School",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Completed Class XII with a focus on Science stream – Physics, Chemistry, Mathematics, and Information Technology (IT).",
        "⚡ Examination Board: Council of Higher Secondary Education (CHSE), Odisha.",
        "⚡ Developed foundational programming skills in C++/Python/Java, HTML and Computer Applications during higher secondary education.",
      ],
      website_link: "https://khairacollegekhaira.com/index.php",
    },
    {
      title: "Happy Home English Medium School, Charampa, Bhadrak, Odisha",
      subtitle: "Class X",
      logo_path: "hhmes.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Completed Class X with a strong academic foundation across all subjects under ICSE (Indian Certificate of Secondary Education) curriculum.",
        "⚡ Participated in school-level co-curricular competitions, reflecting a balanced academic profile.",
        "⚡ Awarded certificates of merit for consistent performance and discipline throughout the academic year.",
      ],
      website_link: "https://happyhomeschoolbhadrak.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: " Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "AWS",
      color_code: "#000000",
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle: " Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "AWS",
      color_code: "#000000",
    },
    {
      title: "Microsoft Azure Fundamentals",
      subtitle: "Microsoft",
      logo_path: "microsoftazure.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Microsoft",
      color_code: "#e9f4f6",
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      subtitle: "Microsoft",
      logo_path: "microsoftazure.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Microsoft",
      color_code: "#e9f4f6",
    },
    {
      title: "Salesforce Certified Administrator",
      subtitle: "Salesforce",
      logo_path: "salesforce.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Salesforce",
      color_code: "#e9eaf6",
    },
    {
      title: "Advanced Data Science",
      subtitle: "Oracle",
      logo_path: "oracle.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "Oracle",
      color_code: "#faefe9",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with both startups and MNCs, gaining versatile experience across Python Full Stack Development, DevOps, QA Engineering, and Cloud technologies. I contributed to designing and developing scalable web applications using modern frameworks, automated deployment pipelines using CI/CD practices, ensured product quality through rigorous testing strategies, and managed cloud infrastructure to support reliable and secure deployments. This cross-functional exposure has equipped me with a solid understanding of end-to-end software development and delivery lifecycle.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "QA Engineer",
          company: "Omnicom",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "omnicom.png",
          duration: "June 2025 - Present",
          location: "Bengaluru, Karnataka",
          description:
            "As a Quality Assurance Engineer at Omnicom, I play a critical role in ensuring the reliability, performance, and quality of software products through comprehensive testing and automation strategies. My responsibilities involve collaborating with cross-functional teams to define quality standards, identify issues early in the development lifecycle, and maintain high standards for product releases.",
          tools: "Tools & Technologies:",
          skill: "Selenium | Postman | JIRA | Git | Python | PyTest | Jenkins | Docker | JMeter | SQL | CI/CD | Agile Scrum",
          color: "#000000",
        },
        {
          title: "DevOps Trainee Engineer",
          company: "PearlThought Technologies Pvt. Ltd.",
          company_url: "https://legatohealthtech.com/",
          logo_path: "pearl.jpeg",
          duration: "June 2024 - June 2025",
          location: " Muttayyapuram, Tamil Nadu 628005",
          description:
            "DevOps Engineer with 1 year of experience at PearlThoughts, specializing in CI/CD pipeline development, cloud infrastructure (AWS/Azure), containerization (Docker, Kubernetes), and automation using tools like Jenkins, Git, and Terraform to enable scalable and efficient deployment workflows.",
          tools: "Tools & Technologies:",
          skill: "Git | GitHub | GitLab | Jenkins | GitHub Actions | Docker | Kubernetes | Terraform | AWS (EC2, S3, RDS, IAM) | Ansible | Prometheus | Grafana | ELK Stack | Bash | Shell | Python | Linux | Maven | Nexus | Nginx | Jira |",
            color: "#0879bf",
        },
        {
          title: "Associate Software Consultant",
          company: "TuTeck Technologies Pvt. Ltd.",
          company_url: "https://legatohealthtech.com/",
          logo_path: "tuteck.jpeg",
          duration: "March 2024 - June 2024",
          location: "DEPL Building, 3rd Floor Y5, College More, Sector V Salt Lake, Kolkata, West Bengal, India -700091",
          description:
            "Worked as an Associate Software Consultant at Tuteck Technologies for 4 months, contributing to full-stack web application development, debugging, and deployment using technologies like Python, Django, HTML, CSS, JavaScript, and SQL.",
          tools: "Tools & Technologies:",
          skill: "Python | Django | HTML | CSS | JavaScript | SQL | PostgreSQL | Git | GitHub | VS Code | Postman | Linux | REST API | Agile",
            color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Python Full Stack Development with DevOps",
          company: "PySpider Training Institute",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "pyspider.jpg",
          duration: "June 2024 - April 2025",
          location: "Bengaluru, Karnataka",
          description:
            "Completed training in Python Full Stack Development with DevOps at PySpider, Bengaluru, where I gained hands-on experience in building end-to-end web applications using modern technologies. The training covered core Python programming, front-end development with HTML, CSS, JavaScript, and frameworks like React, as well as back-end development using Django/Flask. In addition, I learned DevOps practices including CI/CD pipelines, containerization with Docker, version control with Git, and deployment on cloud platforms.",
          tools: "Tools & Technologies:",
          skill: "Python | Django | Flask | HTML | CSS | JavaScript | React | Git | GitHub | Docker | Jenkins | CI/CD | MySQL | PostgreSQL | Linux | AWS | REST APIs",
          color: "#000000",
        },
        {
          title: "AWS Solution Architect Intern",
          company: "Usrya Artivison Pvt. Ltd.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "usrya.jpeg",
          duration: "July 2023 - Dec 2023",
          location: "Bengaluru, Karnataka",
          description:
            "Completed a 6-month internship as an AWS Solutions Architect at Usrya Artivison Pvt. Ltd., focusing on designing scalable cloud architectures, deploying services using EC2, S3, RDS, and Lambda, and implementing security, cost optimization, and high availability best practices.",
          tools: "Tools & Technologies:",
          skill: "AWS EC2 | S3 | RDS | Lambda | IAM | VPC | CloudWatch | CloudFormation | Route 53 | Elastic Load Balancer (ELB) | Auto Scaling | AWS CLI | AWS Console | Linux | Git | Python | Boto3",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Solving for India 2023",
          company: "Geeks for Geeks",
          company_url: "https://practice.geeksforgeeks.org/solving-for-india-hackathon",
          logo_path: "geeks.jpg",
          duration: "March 2023 - June 2023",
          location: "Bhubaneswar, Odisha",
          description:
            "Volunteered in Solving for India 2023 Hackathon organized by GeeksforGeeks, contributing to coordination, participant support, and event operations, helping foster innovation and collaboration among tech enthusiasts. Recognized for my efforts and awarded goodies by GeeksforGeeks.",
          color: "#4285F4",
        },
        {
          title: "Kavach 2023 - Cybersecurity Hackathon",
          company: "Government of India",
          company_url: "https://kavach.mic.gov.in/",
          logo_path: "kavach.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Volunteered in KAVACH 2023 Cybersecurity Hackathon organized by the Government of India, supporting event logistics, team coordination, and technical facilitation to promote innovation in cybersecurity solutions for national challenges.",
          color: "#D83B01",
        },
        {
          title: "Smart India Hackathon Volunteer",
          company: "Government of India",
          company_url: "https://www.sih.gov.in/",
          logo_path: "sih.jpg",
          duration: "Aug 2022 - Oct 2022",
          location: "Kurnool, Andhra Pradesh",
          description:
            "Volunteered in Smart India Hackathon 2022 organized by the Government of India, assisting in event coordination, participant management, and logistical support to ensure seamless execution of one of the nation’s largest innovation-driven hackathons.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
