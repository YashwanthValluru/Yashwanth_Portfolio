import iam from "./tech-logos/lambda.svg";
//import sqli from "./tech-logos/sqli.svg"
import aws from "./tech-logos/aws.svg";
import python from "./tech-logos/python.svg";
import cf from "./tech-logos/CloudFormation.svg"
import cw from "./tech-logos/CloudWatch.svg"
import ec2 from "./tech-logos/EC2.svg"
import ecs from "./tech-logos/ECS.svg"
import ecr from "./tech-logos/ECR.svg"
import eks from "./tech-logos/EKS.svg"
import ga from "./tech-logos/github-actions.svg"
import jenkins from "./tech-logos/jenkins.svg"
import csharp from "./tech-logos/c-sharp.svg"
import k8s from "./tech-logos/kubernetes.svg"
import lmd from "./tech-logos/Lambda (1).svg"
import s3 from "./tech-logos/s3.svg"
import tf from "./tech-logos/terraform.svg"
import vpc from "./tech-logos/VPC.svg"
import cdk from "./tech-logos/CDK.svg"
import awsiam from "./tech-logos/aws-iam.svg"
import docker from "./tech-logos/docker.svg"
import tensorflow from "./tech-logos/tensorflow.svg"
import np from "./tech-logos/numpy.svg"
import keras from "./tech-logos/keras.svg"
import sklearn from "./tech-logos/scikit-learn.svg"
import pd from "./tech-logos/pandas.svg"
import matploitlib from "./tech-logos/matplotlib.svg"
import bash from "./tech-logos/bash.svg"
import sql from "./tech-logos/sql.svg"
import postman from "./tech-logos/postman.svg"
import jira from "./tech-logos/jira.svg"
import prometheus from "./tech-logos/prometheus.svg"
import grafana from "./tech-logos/grafana.svg"
import sonarqube from "./tech-logos/sonarqube.svg"


export const mockData = {
  // Rotating funny quotes
  funnyQuotes: [
    "I'm basically Tony Stark, but my suit is built on Terraform.",
    "I don't always test my code, but when I do, I do it in production.",
    "My code works on my machine, and now it works on your machine too (thanks Docker!).",
    "I speak fluent Kubernetes, and yes, it's as complex as it sounds.",
    "Cloud architect by day, debugger by night, coffee enthusiast 24/7."
  ],

  // Personal info
  personalInfo: {
    name: "Valluru Yashwanth Reddy",
    titles: ["DevOps Engineer", "ML Enthusiast", "Cloud Architect-in-Progress"],
    about: `Enthusiastic IT undergrad from SRM IST (GPA 8.55), passionate about cloud-native development, 
    infrastructure automation, and intelligent systems. Fast learner with leadership experience, 
    strong public speaking skills, and a passion for turning ideas into scalable, cloud-ready solutions.`,
    contact: {
      email: "yashwanthvalluru984882@gmail.com",
      phone: "+91-8919384632",
      linkedin: "https://linkedin.com/in/yashwanth-valluru",
      github: "https://github.com/YashwanthValluru"
    },
    message: `Thank you for taking the time to explore my portfolio! I'd be happy to connect if you have a hiring 
    opportunity to discuss or an exciting collaboration in mind. I'm always open to scheduling a call or meeting 
    to discuss projects, potential opportunities, or just to have a great conversation about technology and innovation. 
    Let's create something amazing together!`
  },

  // Contact Information
  contactInfo: {
    email: "yashwanthvalluru984882@gmail.com",
    phone: "+91-8919384632",
    linkedin: "https://linkedin.com/in/yashwanth-valluru",
    github: "https://github.com/YashwanthValluru"
  },

  // Personal Message
  personalMessage: {
    paragraphs: [
      "Thank you for taking the time to explore my portfolio! I'm genuinely excited about the opportunity to share my journey in DevOps, Machine Learning, and Cloud Architecture with you.",
      "Throughout my academic and professional journey, I've developed a deep passion for creating robust, scalable solutions that bridge the gap between development and operations. My experience at Minfy Technologies has taught me that the best technologies are those that empower teams and drive innovation.",
      "I'm always eager to learn, collaborate, and take on new challenges. Whether you're looking to build cutting-edge cloud infrastructure, implement efficient CI/CD pipelines, or explore the intersection of ML and DevOps, I'd love to contribute to your vision.",
      "I believe in the power of continuous learning and improvement, and I'm committed to staying at the forefront of technology trends. Let's connect and explore how we can create something amazing together!"
    ]
  },

  // Technologies organized by category
  technologies: {
    languages: [
      { name: "Python", icon: python },
      { name: "C#", icon: csharp},
      { name: "SQL", icon: sql },
      { name: "Bash", icon: bash }
    ],
    cloud: [
      { name: "AWS IAM", icon: awsiam },
      { name: "EC2", icon: ec2 },
      { name: "S3", icon: s3 },
      { name: "Lambda", icon: iam },
      { name: "ECS", icon: ecs },
      { name: "ECR", icon: ecr },
      { name: "EKS", icon: eks },
      { name: "VPC", icon: vpc },
      { name: "Cloudwatch", icon: cw },
      { name: "CDK", icon: cdk },
      { name: "Cloudformation", icon: cf }
    ],
    devops: [
      { name: "GitHub Actions", icon: ga },
      { name: "Docker", icon: docker },
      { name: "Jenkins", icon: jenkins },
      { name: "Kubernetes", icon: k8s },
      { name: "Terraform", icon: tf }
    ],
    mlData: [
      { name: "TensorFlow", icon: tensorflow },
      { name: "Keras", icon: keras },
      { name: "Scikit-learn", icon: sklearn },
      { name: "Pandas", icon: pd },
      { name: "Matplotlib", icon: matploitlib },
      { name: "Numpy", icon: np }
    ],
    tools: [
      { name: "Postman", icon: postman },
      { name: "SonarQube", icon: sonarqube },
      { name: "Jira", icon: jira },
      { name: "Prometheus", icon: prometheus },
      { name: "Grafana", icon: grafana }
    ]
  },

  // Experience
  experience: [
    {
      position: "DevOps + Migration Intern",
      company: "Minfy Technologies",
      duration: "Apr 2024 – Present",
      description: "Focused on building robust CI/CD pipelines, containerizing ML applications, and implementing Infrastructure as Code solutions for scalable cloud deployments.",
      icon: "⚡",
      achievements: [
        "Built CI/CD pipelines using GitHub Actions for automated deployment workflows",
        "Dockerized ML models and services for consistent deployment across environments",
        "Automated infrastructure provisioning with Terraform and AWS CloudFormation",
        "Deployed and scaled services on EC2, ECS, and EKS with high availability",
        "Implemented comprehensive monitoring solutions with Prometheus + Grafana stack",
        "Optimized deployment processes reducing deployment time by 60%"
      ],
      technologies: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "AWS", "Prometheus", "Grafana", "Python"]
    }
  ],

  // Featured Projects
  projects: [
    {
      id: 1,
      title: "Forest Land Encroachment Detection",
      description: "Earth observation change detection using Swin Transformer for real-time monitoring of forest encroachment",
      highlights: [
        "Google Earth Engine integration",
        "Real-time satellite alerts",
        "Advanced change detection algorithms",
        "Geospatial data processing"
      ],
      technologies: ["Python", "GDAL", "GeoPandas", "OpenCV", "ChangeFormer"],
      // *** IMPORTANT: Replace "YOUR_YOUTUBE_VIDEO_ID_HERE" with your actual YouTube video ID ***
      youtubeVideoId: "yxt5XgFz-YQ", // For embedding the video in the iframe
      githubLink: "https://github.com/YashwanthValluru/Forest_Deforestation_Analysis",
      liveDemo: "https://drive.google.com/file/d/15Ln_AVcfEiciQHL6yWiW9UXQibyxbLvd/view?usp=drive_link" // For the "Live Demo" button
    },
    {
      id: 2,
      title: "Wheat Disease Classification with SSL",
      description: "Disease identification system using Single Shot Learning and YOLO for automated wheat disease detection",
      highlights: [
        "Ensemble Learning implementation",
        "Positional Attention mechanisms",
        "AutoML integration",
        "High accuracy disease classification"
      ],
      technologies: ["Keras", "TensorFlow", "VGG16", "ResNet50", "OpenCV"],
      youtubeVideoId: null, // Set to null or your video ID if this project also has one
      githubLink: "https://github.com/YashwanthValluru/wheat-disease-classification",
      liveDemo: ""
    }
  ],

  // Certifications and Achievements
  certifications: [
    {
      name: "AWS Cloud Practitioner",
      icon: aws,
      issuer: "Amazon Web Services",
      year: "2025",
      credentialId: "8D79F3AVR7",
      link: "https://aws.amazon.com/certification/"
    },
    {
      name: "AWS Academy ML Foundations",
      icon: aws,
      issuer: "Amazon Web Services Training and Certification",
      year: "2023",
      credentialId: "86e8c407-c517-437b-9705-21aa1c2706c5",
      link: "https://www.credly.com/earner/earned/badge/86e8c407-c517-437b-9705-21aa1c2706c5"
    },
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      icon: aws,
      issuer: "Amazon Web Services Training and Certification",
      year: "2023",
      credentialId: "ee7f25f4-07b0-4346-875a-d4b04da38686",
      link: "https://www.credly.com/earner/earned/badge/ee7f25f4-07b0-4346-875a-d4b04da38686"
    },
  ],

  achievements: [
    {
      title: "SRM JEE – Rank 5",
      description: "Secured 5th rank in SRM Joint Entrance Examination",
      value: "Rank 5",
      icon: "🥇"
    },
    {
      title: "SRM Founder's Scholarship",
      description: "Recipient of prestigious merit-based scholarship",
      value: "100%",
      icon: "🎓"
    },
    {
      title: "Academic Excellence",
      description: "Maintained consistent high performance",
      value: "8.55 CGPA",
      icon: "⭐"
    },
  ],

  // Leadership
  leadership: [
    {
      title: "Joint Cultural Secretary",
      organization: "SRMIST",
      duration: "2023 - 2024",
      description: "Led the organization of Milan, one of India's largest college cultural festivals, managing a team of 50+ volunteers and coordinating with 200+ colleges nationwide. Successfully executed events with 30,000+ participants and managed a budget of ₹2+ crores.",
      icon: "👑",
      achievements: [
        "Organized Milan festival with 30,000+ participants from 200+ colleges",
        "Managed cross-functional teams of 50+ volunteers across multiple departments",
        "Coordinated with celebrity artists and managed event logistics worth ₹2+ crores",
        "Implemented digital registration system reducing processing time by 60%",
        "Led sponsorship initiatives securing funding from 15+ corporate partners"
      ],
      skills: ["Team Leadership", "Event Management", "Budget Planning", "Vendor Coordination", "Public Speaking"]
    },
    {
      title: "Secretary - AIU Event",
      organization: "All India University hosted at SRM",
      duration: "2023",
      description: "Headed the organizing committee for a prestigious All India University event hosted at SRM, coordinating between multiple universities and ensuring seamless execution of inter-university competitions and cultural programs.",
      icon: "🎯",
      achievements: [
        "Successfully coordinated with 25+ universities across India",
        "Managed logistics for 500+ participants from different states",
        "Oversaw competition judging panels and cultural program scheduling",
        "Established partnerships with industry sponsors and government bodies",
        "Achieved 95% participant satisfaction rating through post-event surveys"
      ],
      skills: ["Inter-institutional Coordination", "Project Management", "Communication", "Problem Solving"]
    }
  ]
};