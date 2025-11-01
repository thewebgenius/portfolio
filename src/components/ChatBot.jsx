import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm a chatbot here to help you learn about Shivam. Try asking me questions like:\n• Who is Shivam?\n• What are his skills?\n• Tell me about his projects\n• What is his education?\n• Contact information",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();
    const { personalInfo, skills, education, projects, experience } = portfolioData;

    // Name and introduction
    if (message.includes('who') && (message.includes('shivam') || message.includes('he') || message.includes('you') || message.includes('shubham'))) {
      return `Shivam Shah (Shubham) is a Computer Science student at DIT University, focusing on Machine Learning, Deep Learning, and Intelligent Agent Systems.\n\nHis work involves designing, training, and evaluating learning models, while exploring how different architectures shape understanding, reasoning, and decision-making.\n\nHe's particularly interested in how neural representations emerge inside models — and how AI systems can be made more interpretable, efficient, and context-aware.\n\nAs he puts it: "I'm not just building models — I'm exploring how learning agents evolve behavior."`;
    }

    // Skills
    if (message.includes('skill') || message.includes('technolog') || message.includes('expert')) {
      return `Shivam's skills include:\n\n📚 Programming: ${skills.programming.join(', ')}\n\n🤖 ML & AI: ${skills.ml.join(', ')}\n\n🧠 Deep Learning: ${skills.deepLearning.join(', ')}\n\n☁️ Cloud & IoT: ${skills.cloud.join(', ')}\n\nHe's also interested in LLM (Large Language Models) and NLP (Natural Language Processing).`;
    }

    // Projects
    if (message.includes('project') || message.includes('work')) {
      const completed = projects.filter(p => p.status === 'completed').length;
      const ongoing = projects.filter(p => p.status === 'ongoing').length;
      return `Shivam has ${completed} completed projects and ${ongoing} ongoing projects:\n\n✅ Completed:\n- Advanced Java Multi-Client Chat Application\n- University Intelligent Chatbot\n- Climate Change Sentiment Analysis\n\n🚧 Ongoing:\n- Image Classification Model\n- Smart IoT Projects\n- NLP Research Paper\n\nCheck out his GitHub for more details!`;
    }

    // Education
    if (message.includes('education') || message.includes('degree') || message.includes('university') || message.includes('study')) {
      return `Shivam's Education:\n\n🎓 DIT University (2023-2027)\n   B.Tech in Computer Science Engineering\n\n🏫 Uniglobe High School (2021-2023)\n   Science Stream (Computer Science)`;
    }

    // Contact
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
      return `Contact Information:\n\n📧 Email: ${personalInfo.email}\n📱 Phone: ${personalInfo.phone[0]}\n📱 Phone: ${personalInfo.phone[1]}\n📍 Location: ${personalInfo.location}\n\nFeel free to connect!`;
    }

    // Experience
    if (message.includes('experience') || message.includes('intern') || message.includes('work experience')) {
      return `Shivam's Experience:\n\n💼 Intern at IT Training Nepal Centre\n   Location: Kathmandu, Nepal\n   Duration: 3 Months\n   Worked on real-world projects and gained hands-on experience with ML tools.\n\n🔬 NLP Research (Personal Project)\n   Ongoing research on practical applications of NLP in modern software systems.`;
    }

    // Interests
    if (message.includes('interest') || message.includes('hobby') || message.includes('passion') || message.includes('research') || message.includes('focus')) {
      return `Shivam's research focuses on:\n\n🧠 Machine Learning & Deep Learning\n🤖 Intelligent Agent Systems\n🧬 Neural Representations\n🔍 Model Interpretability\n⚡ Efficient AI Systems\n🎯 Context-Aware AI\n\nHe's particularly interested in:\n• How neural representations emerge inside models\n• Making AI systems more interpretable\n• Exploring how learning agents evolve behavior\n• Understanding how architectures shape reasoning and decision-making\n\nAs he says: "I'm not just building models — I'm exploring how learning agents evolve behavior."`;
    }

    // AI Tools
    if (message.includes('ai tool') || message.includes('tool') || message.includes('agent')) {
      return `Shivam works with various AI tools and agents including:\nChatGPT, CursorAI, Gemini, MS Copilot, Ollama, Blackbox, Stability AI, Grok, Meta AI, GitHub Copilot, Replit, Canva AI, Sora, Notebook LM, Perplexity, and Deepseek.`;
    }

    // Default responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! 👋 I'm Shubham Chatbot, here to help you learn about Shivam. He's a Computer Science student focusing on ML, Deep Learning, and Intelligent Agent Systems. Ask me about his research, projects, interests, or anything else!";
    }

    if (message.includes('help')) {
      return "You can ask me about:\n• Who is Shivam/Shubham?\n• His research and focus areas\n• Skills and technologies\n• Projects (completed and ongoing)\n• Education background\n• Contact information\n• Experience\n• Interests and research passions\n• AI tools he uses\n• Neural representations\n• Model interpretability";
    }

    // Research and focus areas
    if (message.includes('research') || message.includes('focus') || message.includes('work on') || message.includes('studying')) {
      return `Shivam's research focuses on:\n\n🎯 Machine Learning & Deep Learning\n🤖 Intelligent Agent Systems\n\nHis work involves:\n• Designing, training, and evaluating learning models\n• Exploring how architectures shape understanding, reasoning, and decision-making\n• Understanding how neural representations emerge inside models\n• Making AI systems more interpretable, efficient, and context-aware\n\nCore Philosophy: "I'm not just building models — I'm exploring how learning agents evolve behavior."`;
    }

    // Neural representations and interpretability
    if (message.includes('neural') || message.includes('representation') || message.includes('interpretable') || message.includes('architecture')) {
      return `Shivam is deeply interested in:\n\n🧬 Neural Representations\n   How representations emerge inside models and how they shape model behavior\n\n🔍 Model Interpretability\n   Making AI systems more understandable and transparent\n\n⚙️ Architecture Impact\n   How different architectures influence understanding, reasoning, and decision-making\n\n🎯 Context-Aware Systems\n   Building AI that understands context and adapts accordingly\n\nHis research explores the intersection of these areas to build better learning agents.`;
    }

    // Fallback
    return "I'm not sure about that. Try asking me about Shivam's skills, projects, education, experience, or contact information. Type 'help' for more options!";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInputValue('');

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 500);
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    const botResponse = getBotResponse(question);
    setMessages(prev => [
      ...prev,
      { text: question, sender: 'user' },
      { text: botResponse, sender: 'bot' }
    ]);
  };

  return (
    <div 
      className="chatbot-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`chatbot-bubble ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-icon">
          <i className="fas fa-robot"></i>
        </div>
        
        {isOpen && (
          <div className="chatbot-window" onMouseEnter={() => setIsOpen(true)}>
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <i className="fas fa-robot"></i>
                <div>
                  <h4>Shubham Chatbot</h4>
                  <span>Online</span>
                </div>
              </div>
              <button 
                className="chatbot-close"
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  <div className="message-content">
                    {msg.text.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < msg.text.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-quick-questions">
              <button onClick={() => handleQuickQuestion("Who is Shivam?")}>
                Who is Shivam?
              </button>
              <button onClick={() => handleQuickQuestion("What are his skills?")}>
                Skills
              </button>
              <button onClick={() => handleQuickQuestion("Tell me about his projects")}>
                Projects
              </button>
            </div>

            <form className="chatbot-input-form" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything about Shivam..."
                className="chatbot-input"
              />
              <button type="submit" className="chatbot-send">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;

