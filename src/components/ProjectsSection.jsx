export default function Projects() {
  const projects = [
    {
      id: 1,
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
      title: 'Loan Defaulter Prediction',
      description: "Conducted data analysis and developed a machine learning model to predict loan defaults using customer data, including income, credit amount, and family status, supporting financial institutions in risk management and credit allocation.",
      technologies: [
        "Python",
        "Logistic Regression",
        "SMOTE",
        "Looker Studio",
        "Data Visualization",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "gdown",
        "Numpy",
        "Google Cloud",
        "Google Cloud BigQuery",
        "Google OAuth2",
        "Imbalanced-learn (imblearn)",
        "TensorFlow",
        "Keras"
      ],
      icon: ["project2/loan1.png", "project2/loan2.png"],
      color: 'from-green-900 via-green-800 to-green-700',
      titleColor: 'text-green-100',
      descriptionColor: 'text-green-200',
      buttonColor: "bg-green-500 text-white hover:bg-green-600 border-2 border-transparent hover:border-green-300 shadow-lg hover:shadow-xl rounded-lg transform hover:scale-105 transition-all",
      link: '/loan-defaulter-prediction',
    },

    {
      id: 3,
      title: 'Simulation of Distributions and Statistical Sampling for Probabilistic Data Analysis and Visualization',
      description: "This project simulates and visualizes probabilistic data using exponential, uniform, and normal distributions. It includes statistical analysis of mean, kurtosis, skewness, and variance, alongside graphical visualization and data exportation to CSV for further analysis, with applications in fields like statistics, finance, and engineering.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Seaborn",
        "Matplotlib",
        "SciPy",
        "Data Analysis",
        "Statistical Sampling",
        "CSV Export",
        "Probability Distributions",
        "Data Visualization"
      ],
      icon: ["project3/p3.png", "project3/i3.png"],
      color: 'from-indigo-900 via-indigo-800 to-indigo-700',
      titleColor: 'text-blue-100',
      descriptionColor: 'text-blue-200',
      buttonColor: "bg-blue-500 text-white hover:bg-blue-600 border-2 border-transparent hover:border-blue-300 shadow-lg hover:shadow-xl rounded-lg transform hover:scale-105 transition-all",
      link: '/simulation-of-distributions',
    },
    {
      id: 4,
      title: 'Traffic Accident Analysis on Calle 30 in Barranquilla',
      description: 'This project provides a detailed analysis of traffic accidents recorded on Calle 30 in Barranquilla, Colombia, using data from the [Open Data Portal of Colombia](https://www.datos.gov.co/). The objective is to identify annual trends, critical months, hourly patterns, and variations in accident severity',
      technologies: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
      icon: ['project4/icon1.png', 'project4/icon2.png'],
      color: 'from-gray-600 via-gray-500 to-gray-400', // Colores más suaves y neutros
      titleColor: 'text-blue-100', 
      descriptionColor: 'text-blue-200',
      buttonColor: 
      'bg-gray-900 text-white hover:bg-orange-600 border-2 border-transparent hover:border-orange-300 shadow-md hover:shadow-lg rounded-lg transform hover:scale-105 transition-all', 
  
      link: '/traffic-accident-analysis',
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
