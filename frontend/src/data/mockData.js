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
      github: "https://github.com/yashwanth-valluru"
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
    github: "https://github.com/yashwanth-valluru"
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
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "SQL", icon: "🗃️" },
      { name: "Bash", icon: "💻" }
    ],
    cloud: [
      { name: "AWS IAM", icon: "🔐" },
      { name: "EC2", icon: "💻" },
      { name: "S3", icon: "🪣" },
      { name: "Lambda", icon: "⚡" },
      { name: "ECS", icon: "📦" },
      { name: "EKS", icon: "☸️" },
      { name: "VPC", icon: "🌐" },
      { name: "ECR", icon: "📋" }
    ],
    devops: [
      { name: "GitHub Actions", icon: "🚀" },
      { name: "Docker", icon: "🐳" },
      { name: "Jenkins", icon: "🔧" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "Terraform", icon: "🏗️" }
    ],
    mlData: [
      { name: "TensorFlow", icon: "🧠" },
      { name: "Keras", icon: "🤖" },
      { name: "Scikit-learn", icon: "📊" },
      { name: "Pandas", icon: "🐼" },
      { name: "Matplotlib", icon: "📈" },
      { name: "OpenCV", icon: "👁️" }
    ],
    tools: [
      { name: "Postman", icon: "📮" },
      { name: "SonarQube", icon: "🔍" },
      { name: "Jira", icon: "📋" },
      { name: "Prometheus", icon: "📊" },
      { name: "Grafana", icon: "📈" }
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
      demoVideo: "/api/placeholder/600/400",
      githubLink: "https://github.com/yashwanth-valluru/forest-detection",
      liveDemo: "https://forest-detection-demo.com"
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
      demoVideo: "/api/placeholder/600/400",
      githubLink: "https://github.com/yashwanth-valluru/wheat-disease-detection",
      liveDemo: "https://wheat-disease-demo.com"
    }
  ],

  // Certifications and Achievements
  certifications: [
    { name: "AWS Academy ML Foundations", icon: "🏆" },
    { name: "AWS Cloud Practitioner", icon: "☁️" },
    { name: "Prometheus & Grafana", icon: "📊" },
    { name: "SRM JEE – Rank 5", icon: "🥇" },
    { name: "SRM Founder's Scholarship Awardee", icon: "🎓" }
  ],

  // Leadership
  leadership: [
    {
      title: "Joint Cultural Secretary",
      organization: "SRMIST",
      description: "Organized Milan, one of India's largest college fests"
    },
    {
      title: "Committee Head",
      organization: "AIU-hosted event at SRM",
      description: "Led committee for All India University hosted event"
    }
  ]
};