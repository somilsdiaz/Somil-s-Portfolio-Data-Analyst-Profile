import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { TrendingUp, PieChart, LineChart, BarChart2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Market Trend Analysis',
      description: 'Analyze market trends to help inform business decisions.',
      technologies: ['React', 'D3.js', 'Node.js'],
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-600',
      link: '/twitter-data-network'
    },
    {
      id: 2,
      title: 'Customer Segmentation',
      description: 'Segment customers to tailor marketing strategies.',
      technologies: ['Python', 'Keras', 'Scikit-learn'],
      icon: PieChart,
      color: 'from-pink-500 to-rose-600',
      link: '/project2'
    },
    {
      id: 3,
      title: 'Sales Forecast',
      description: 'Forecast future sales using historical data.',
      technologies: ['TensorFlow', 'SQL', 'AWS'],
      icon: LineChart,
      color: 'from-cyan-500 to-blue-600',
      link: '/project3'
    },
    {
      id: 4,
      title: 'Product Performance',
      description: 'Analyze the performance of different products.',
      technologies: ['PowerBI', 'PostgreSQL', 'Tableau'],
      icon: BarChart2,
      color: 'from-emerald-500 to-green-600',
      link: '/project4'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ml-12 mr-12">
        {projects.map((project) => (
          <div key={project.id} className={`bg-gradient-to-br ${project.color} rounded-2xl p-8 relative`}>
            <div className="flex items-center mb-4">
              <project.icon className="w-12 h-12 mr-4 text-white" />
              <h3 className="text-3xl font-bold text-white">{project.title}</h3>
            </div>
            <p className="text-white/90 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <button 
              onClick={() => window.location.href = project.link} 
              className="bg-white text-black px-4 py-2 rounded mt-4 hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
