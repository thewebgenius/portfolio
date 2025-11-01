import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const About = () => {
  const { skills, education } = portfolioData;
  const [hoveredInterest, setHoveredInterest] = useState(null);

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle title="About Me" />
        <div className="about-content">
          <div className="about-text">
            <h3>Architect of Intelligent Systems</h3>
            <p>I am a Computer Science student at DIT University, focusing on Machine Learning, Deep Learning, and Intelligent Agent Systems.</p>
            <p>My work involves designing, training, and evaluating learning models, while exploring how different architectures shape understanding, reasoning, and decision-making.</p>
            <p>I'm particularly interested in how neural representations emerge inside models — and how AI systems can be made more interpretable, efficient, and context-aware.</p>
            <p style={{fontStyle: 'italic', color: 'var(--secondary)', marginTop: '15px'}}>I'm not just building models — I'm exploring how learning agents evolve behavior.</p>
            
            <div className="skills">
              <div className="skill-category">
                <h4>Programming & Web</h4>
                <div className="skill-tags">
                  {skills.programming.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="skill-category">
                <h4>Machine Learning & AI</h4>
                <div className="skill-tags">
                  {skills.ml.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="skill-category">
                <h4>Deep Learning Frameworks</h4>
                <div className="skill-tags">
                  {skills.deepLearning.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Interested In</h4>
                <div className="skill-tags">
                  {skills.interests.map((interest, index) => (
                    <span 
                      key={index} 
                      className="skill-tag interest-tag"
                      onMouseEnter={() => setHoveredInterest(index)}
                      onMouseLeave={() => setHoveredInterest(null)}
                    >
                      {interest.name}
                      {hoveredInterest === index && (
                        <div className="tooltip">
                          {interest.tooltip}
                        </div>
                      )}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="skill-category">
                <h4>Cloud & IoT</h4>
                <div className="skill-tags">
                  {skills.cloud.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <h3>Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <h3>{edu.institution}</h3>
                    <span className="date">{edu.period}</span>
                    <p>{edu.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;