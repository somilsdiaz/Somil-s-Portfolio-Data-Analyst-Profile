import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { TrendingUp, PieChart, LineChart, BarChart2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 2,
      title: 'Advanced Twitter Data Analysis',
      description: 'Perform large-scale Twitter data processing, content filtering, and interaction network modeling.',
      technologies: ['Python', 'NetworkX', 'MPI (mpi4py)', 'JSON/BZ2', 'GEXF', 'os', 'getopt', 'sys', 'shutil', 'datetime', 'time', 'BZ2File', 'DiGraph', 'Python multiprocessing'],
      icon: ['project1/x1.png', 'project1/x2.png'],
      color: 'from-blue-900 via-blue-800 to-blue-700', 
      titleColor: 'text-blue-100', 
      descriptionColor: 'text-blue-200',
      buttonColor:
        'bg-blue-500 text-white hover:bg-blue-600 border-2 border-transparent hover:border-blue-300 shadow-lg hover:shadow-xl rounded-lg transform hover:scale-105 transition-all', 
      link: '/twitter-data-network',
    },
    {
      id: 2,
      title: 'Customer Segmentation',
      description: 'Segment customers to tailor marketing strategies.',
      technologies: ['Python', 'Keras', 'Scikit-learn'],
      icon: ['project1/x1.png', 'project1/x2.png'],
      color: 'from-pink-500 to-rose-600',
      link: '/project2'
    },
    {
      id: 3,
      title: 'Sales Forecast',
      description: 'Forecast future sales using historical data.',
      technologies: ['TensorFlow', 'SQL', 'AWS'],
      icon: ['project1/x1.png', 'project1/x2.png'],
      color: 'from-cyan-500 to-blue-600',
      link: '/project3'
    },
    {
      id: 4,
      title: 'Product Performance',
      description: 'Analyze the performance of different products.',
      technologies: ['PowerBI', 'PostgreSQL', 'Tableau'],
      icon: ['project1/x1.png', 'project1/x2.png'],
      color: 'from-emerald-500 to-green-600',
      link: '/project4'
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
    >
      <h2 
        className="text-4xl font-bold mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`bg-gradient-to-br ${project.color} rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow relative`}
          >
            <div className="flex items-center mb-3">
              {Array.isArray(project.icon) && project.icon.length > 0 ? (
                project.icon.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`${project.title} icon ${index + 1}`}
                    className="w-10 h-10 mr-3"
                  />
                ))
              ) : (
                <span className="w-10 h-10 mr-3 text-white">No icon</span>
              )}
              <h3 className={`text-xl font-bold ${project.titleColor}`}>
                {project.title}
              </h3>
            </div>
            <p className={`text-sm ${project.descriptionColor} mb-4`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-gray-600 to-black text-white font-medium px-3 py-1 rounded-full text-xs shadow-sm hover:scale-105 transform transition-transform"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => window.location.href = project.link}
              className={`px-3 py-2 rounded text-sm font-medium ${project.buttonColor} shadow-md hover:shadow-lg transform hover:scale-105 transition`}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
