import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionTitle title="Experience & Research" />
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <span className="date">{exp.company} — {exp.location} ({exp.period})</span>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;