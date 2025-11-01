export const portfolioData = {
  personalInfo: {
    name: "Shivam Shah",
    title: "Aspiring Machine Learning Engineer",
    description: "Building intelligent systems and solving real-world problems through technology. Passionate about AI, IoT, and Robotics.",
    phone: ["+977-9818686323", "+91 7017713815"],
    email: "shubhamshah2078@gmail.com",
    location: "Dehradun, India | Kathmandu, Nepal"
  },
  
  skills: {
    programming: ["C", "C++", "Data Structures & Algorithms", "HTML", "CSS", "MySQL"],
    ml: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "FastAPI", "BERT"],
    deepLearning: ["PyTorch", "Keras", "OpenCV"],
    cloud: ["AWS Cloud", "Firebase", "IoT", "Robotics"],
    interests: [
      { name: "LLM", tooltip: "Large Language Models - Advanced AI systems that understand and generate human-like text. Exploring GPT, BERT, and transformer architectures for various applications." },
      { name: "NLP", tooltip: "Natural Language Processing - Specializing in text analysis, sentiment analysis, chatbots, and language understanding. Working with transformer models and language embeddings." }
    ]
  },
  
  education: [
    {
      institution: "DIT University",
      period: "2023 – 2027",
      degree: "B.Tech in Computer Science Engineering"
    },
    {
      institution: "Uniglobe High School",
      period: "2021 – 2023", 
      degree: "Science Stream (Computer Science)"
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "Advanced Java Multi-Client Chat Application",
      description: "A Real-Time Multi-Client Chat Application developed using Java Swing and Socket Programming. This project demonstrates network-based communication, allowing multiple users to connect to a single server and chat in real time. Features include: Multi-client server using ServerSocket & Socket, Real-time chat broadcasting, Private (DM) messaging, Online/offline user tracking, File sharing, User status updates (Online, Away, Busy), and Interactive Swing UI.",
      tags: ["Java", "Java Swing", "AWT", "Socket Programming", "Networking", "Multi-threading"],
      status: "completed",
      githubUrl: "https://github.com/thewebgenius?tab=repositories",
      image: "/images/Advanced Java Multi-Client Chat Application.jpg"
    },
    {
      id: 2,
      title: "University Intelligent Chatbot",
      description: "An intelligent chatbot designed for university applications, providing automated responses to student inquiries. Built with Python for natural language processing and a modern web interface using HTML and CSS.",
      tags: ["Python", "NLP", "Chatbot", "HTML", "CSS", "Machine Learning"],
      status: "completed",
      githubUrl: "https://github.com/thewebgenius?tab=repositories"
    },
    {
      id: 3,
      title: "Climate Change Sentiment Analysis",
      description: "Sentiment analysis project on climate change data using R language. This project analyzes public sentiment towards climate change through text analysis, providing insights into how people perceive and discuss climate-related topics.",
      tags: ["R Language", "Sentiment Analysis", "Data Analysis", "Climate Change", "Text Mining"],
      status: "completed",
      githubUrl: "https://github.com/thewebgenius?tab=repositories"
    },
    {
      id: 4,
      title: "Image Classification Model",
      description: "Designing a machine learning model for image classification using a dataset of over 42,000+ images. Focused on improving accuracy and performance using data augmentation and deep learning techniques.",
      tags: ["Python", "Deep Learning", "Data Augmentation", "Computer Vision"],
      status: "ongoing",
      githubUrl: "https://github.com/thewebgenius?tab=repositories"
    },
    {
      id: 5,
      title: "Smart IoT Projects", 
      description: "Developing Smart Bin and other automation systems using IoT devices. Working with microcontrollers and sensors for real-time environmental interaction under mentorship.",
      tags: ["IoT", "Arduino", "Sensors", "Automation"],
      status: "ongoing",
      githubUrl: "https://github.com/thewebgenius?tab=repositories"
    },
    {
      id: 6,
      title: "NLP Research Paper",
      description: "Conducting research on the practical applications of NLP in modern software systems. Exploring language models and their use in sentiment analysis, chatbots, and text summarization.",
      tags: ["NLP", "Research", "Language Models", "Sentiment Analysis"],
      status: "ongoing",
      githubUrl: "https://github.com/thewebgenius?tab=repositories"
    }
  ],
  
  experience: [
    {
      title: "Intern",
      company: "IT Training Nepal Centre",
      period: "3 Months",
      location: "Kathmandu, Nepal",
      description: "Participated in a comprehensive training program across IT domains. Worked collaboratively on real-world projects. Gained hands-on experience with Machine Learning tools and applications."
    },
    {
      title: "NLP Research", 
      company: "Personal Project",
      period: "Ongoing",
      location: "Remote",
      description: "Conducting research on the practical applications of NLP in modern software systems. Exploring language models and their use in sentiment analysis, chatbots, and text summarization."
    }
  ],

  aiAgents: [
    { name: "ChatGPT", color: "#10a37f", icon: "🤖" },
    { name: "CursorAI", color: "#6366f1", icon: "🎯" },
    { name: "Gemini", color: "#4285f4", icon: "💎" },
    { name: "MS Copilot", color: "#0078d4", icon: "🤝" },
    { name: "Ollama", color: "#ff6b6b", icon: "🦙" },
    { name: "Blackbox", color: "#000000", icon: "📦" },
    { name: "Stability AI", color: "#ff6600", icon: "🎨" },
    { name: "Grok", color: "#000000", icon: "🧠" },
    { name: "Meta AI", color: "#0084ff", icon: "👁️" },
    { name: "GitHub Copilot", color: "#ffffff", icon: "💻" },
    { name: "Replit", color: "#667eea", icon: "⚡" },
    { name: "Canva AI", color: "#00c4cc", icon: "🖼️" },
    { name: "Sora", color: "#ff006e", icon: "🎬" },
    { name: "Notebook LM", color: "#4a90e2", icon: "📓" },
    { name: "Perplexity", color: "#00a9ff", icon: "🔍" },
    { name: "Deepseek", color: "#1e1e1e", icon: "🔬" }
  ]
};