import React from 'react';

function SkillsSection() {
  const skills = [
    'Python',
    'SQL',
    'Excel',
    'Power BI',
    'Google Cloud BigQuery',
    'Data Analysis',
    'KPIs',
    'Machine Learning',
    'Regression Models & Prediction Techniques',
    'Descriptive and Inferential Statistics, and Probability',
    'Statistical Sampling',
    'Data Visualization',
    'Looker Studio',
    'Critical and Analytical Thinking',
    'Attention to Detail',
    'Effective Communication',
    'Teamwork',
    'Adaptability and Continuous Learning',
    'Logistic Regression',
    'Google Cloud',
    'Google OAuth2',
    'Big Data',
    'Probability Distributions',
    'Python multiprocessing'
  ];
  

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700/50 rounded-lg p-4 text-center backdrop-blur-sm">
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
