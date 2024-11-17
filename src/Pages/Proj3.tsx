import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import Footer from '../components/Footer';

export default function ProjectDetails() {
    const imageUrls = [
        "project3/normal/50/muestra1_de_100.png",
        "project3/normal/50/muestra2_de_100.png",
        "project3/normal/50/muestra3_de_100.png",
        "project3/normal/50/Análisis Estadístico Global.png",
        "project3/uniforme/50/muestra1_de_100.png",
        "project3/uniforme/50/muestra2_de_100.png",
        "project3/uniforme/50/muestra3_de_100.png",
        "project3/uniforme/50/Análisis Estadístico Global.png",
        "project3/expo/50/muestra1_de_100.png",
        "project3/expo/50/muestra2_de_100.png",
        "project3/expo/50/muestra3_de_100.png",
        "project3/expo/50/Análisis Estadístico Global.png",
    ];

    const imageTitles = [
        "Normal Distribution (sample 1 of 100)", "Normal Distribution (sample 2 of 100)", "Normal Distribution (sample 3 of 100)", "Normal Distribution (union of all samples)", 
        "Uniform Distribution (sample 1 of 100)", "Uniform Distribution (sample 2 of 100)", "Uniform Distribution (sample 3 of 100)", "Uniform Distribution (union of all samples)",
        "Exponential Distribution (sample 1 of 100)", "Exponential Distribution (sample 2 of 100)", "Exponential Distribution (sample 3 of 100)", "Exponential Distribution (union of all samples)"
    ];
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            <header className="w-full z-10 backdrop-filter backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex justify-between items-center">
                        <Link
                            to="/"
                            className="text-2xl font-bold flex items-center hover:text-blue-400 transition-colors"
                        >
                            <ArrowLeft className="mr-2" />
                            Back to Projects
                        </Link>
                    </nav>
                </div>
            </header>

            <main>
                <section className="py-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.h1
                            className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Probabilistic Data Analysis and Visualization
                        </motion.h1>

                        <motion.div
                            className="bg-white/10 rounded-xl p-8 backdrop-blur-sm mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                        <p className="text-xl mb-6">
                            <strong>This project</strong> generates, analyzes, and visualizes probabilistic data by simulating <strong>exponential, uniform, and normal distributions</strong> using advanced statistical techniques and Python programming. By exploring random samples of sizes 10, 20, and 50, it reveals how increasing sample size and combining more samples lead to distributions that more closely align with theoretical models. <br /> <br />
                            This demonstrates the <strong>law of large numbers</strong>, where larger samples better represent underlying distributions. The project emphasizes the role of <strong>sample size in statistical analysis</strong> and offers valuable insights for decision-making, risk assessment, and predictive modeling across industries like <strong>finance, engineering, healthcare, and research</strong>. <br /> <br />
                            It aids in <strong>risk management, loan default prediction, modeling component lifespans, forecasting patient outcomes,</strong> and improving experiment design. Ultimately, this simulation tool enhances the accuracy of predictions, optimizes processes, and reduces uncertainty, making it essential for <strong>data-driven decision-making</strong>.
                        </p>

                            <div className="flex flex-wrap gap-2">
                            {[
                                'pandas',
                                'numpy',
                                'seaborn',
                                'matplotlib',
                                'scipy',
                                'Python',
                                'Data Analysis',
                                'Statistical Sampling',
                                'CSV Export',
                                'Probability Distributions',
                                'Data Visualization'
                            ].map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        </motion.div>

                        <section>
                            <div className="container mx-auto px-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Project Objectives */}
                                    <motion.div
                                        className="bg-white/10 rounded-xl p-8 backdrop-blur-sm"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    >
                                        <h2 className="text-3xl font-bold mb-6">Project Objectives</h2>
                                        <ul className="list-disc list-inside space-y-4 text-gray-300">
                                            <li>
                                                <strong>Probabilistic Sampling Simulation</strong>: Generate random samples from exponential, uniform, and normal distributions to model real-world processes and observe how sample size affects alignment with theoretical models.
                                            </li>
                                            <li>
                                                <strong>Statistical Analysis</strong>: Calculate mean, kurtosis, skewness, and variance to gain insights into sample behavior and evaluate the effect of sample size on distribution approximation.
                                            </li>
                                            <li>
                                                <strong>Graphical Visualization</strong>: Create histograms with theoretical density curves to visualize data distribution and how larger samples resemble real-world distributions.
                                            </li>
                                            <li>
                                                <strong>Results Exportation</strong>: Save generated data and statistics in CSV files for further analysis and integration into broader studies or predictive models.
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Sample Generation and Statistical Calculations */}
                                    <motion.div
                                        className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                    >
                                        <h2 className="text-3xl font-bold mb-6">Sample Generation and Statistical Calculations</h2>
                                        <p className="text-gray-300">
                                        Random samples of sizes n = 10, 20, 50 are generated from exponential, uniform, and normal distributions. The expon.rvs, uniform.rvs, and norm.rvs functions from scipy.stats are used, with the scale parameter for the exponential distribution adjusted to represent event occurrence rates, and the other distributions defined based on their respective parameters. The key statistics calculated for each sample include:
                                        </p>
                                        <ul className="list-disc list-inside mt-4 space-y-4 text-gray-300">
                                            <li><strong>Mean:</strong> Average value of each sample.</li>
                                            <li><strong>Kurtosis and Skewness:</strong> Insights into the shape and symmetry of the data.</li>
                                            <li><strong>Variance:</strong> Measure of dispersion within the sample.</li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </div>
                        </section>

                        <motion.div
                            className="mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-center text-white">Simulation Visualizations</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {imageUrls.map((url, index) => (
                                    <div key={index} className="relative group">
                                        <div className="bg-white/10 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                                            <img
                                                src={url}
                                                alt={`Visualization ${index + 1}`}
                                                className="w-full h-40 object-cover sm:h-48 md:h-56"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                                            </div>
                                        </div>
                                        {/* Título de cada imagen */}
                                        <h3 className="mt-4 text-lg font-semibold text-center text-white">
                                            {imageTitles[index]} {/* Aquí se usa el título correspondiente */}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </motion.div>


                        <section className="py-12">
                            <div className="container mx-auto px-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Motivation and Applications */}
                                    <motion.div
                                        className="bg-gradient-to-t from-gray-900 via-gray-800 to-black p-6 rounded-xl shadow-lg"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                    >
                                        <h2 className="text-3xl font-bold mb-6">Motivation and Applications</h2>
                                        <p className="text-gray-300">
                                            Probabilistic data simulation is essential in diverse fields, including:
                                        </p>
                                        <ul className="list-disc list-inside mt-4 space-y-4 text-gray-300">
                                            <li>Modeling component lifespans in engineering.</li>
                                            <li>Estimating waiting times in queueing systems.</li>
                                            <li>Forecasting rare events in financial risk analysis.</li>
                                        </ul>
                                    </motion.div>

                                    {/* CSV Results Export */}
                                    <motion.div
                                        className="bg-gradient-to-r from-blue-900 via-gray-900 to-blue-900 p-6 rounded-xl shadow-lg"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.8 }}
                                    >
                                        <h2 className="text-3xl font-bold mb-6">CSV Results Export</h2>
                                        <p className="text-gray-300">
                                            Generated data and corresponding statistics are exported as CSV files for easy integration 
                                            into other studies or predictive models. This ensures a structured record of all simulations and calculations.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </section>
                        <motion.div
                            className="mt-12 flex justify-center space-x-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <a
                                href="https://github.com/somilsdiaz/probabilistic-data-analysis-and-visualization/tree/main"
                                target="_blank"
                                className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors backdrop-blur-sm"
                            >
                                <Github className="mr-2" /> View on GitHub
                            </a>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
