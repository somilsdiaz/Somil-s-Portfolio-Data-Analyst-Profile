import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

export default function ProjectDetails() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <header className="fixed w-full z-10 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold flex items-center hover:text-blue-400 transition-colors">
                <ArrowLeft className="mr-2" />
                Back to Projects
                </Link>
            </nav>
            </div>
        </header>

        <main className="pt-20">
            <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            <div className="container mx-auto px-4 relative z-10">
                <motion.h1 
                className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                Market Trend Analysis
                </motion.h1>
                
                <motion.div 
                className="bg-white/10 rounded-xl p-8 backdrop-blur-sm mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                >
                <p className="text-xl mb-6">
                    An in-depth analysis of market trends using advanced machine learning algorithms to predict future market behaviors and optimize business strategies.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Apache Spark</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">D3.js</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Tableau</span>
                </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold mb-6">Challenges</h2>
                    <ul className="space-y-4">
                    <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-blue-400 flex-shrink-0" />
                        <span>Processing and cleaning large volumes of historical market data</span>
                    </li>
                    <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-blue-400 flex-shrink-0" />
                        <span>Developing accurate predictive models for various market scenarios</span>
                    </li>
                    <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-blue-400 flex-shrink-0" />
                        <span>Creating intuitive visualizations for complex market trends</span>
                    </li>
                    </ul>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-6">Solutions</h2>
                    <ul className="space-y-4">
                    <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-green-400 flex-shrink-0" />
                        <span>Implemented distributed data processing using Apache Spark</span>
                    </li>
                    <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-green-400 flex-shrink-0" />
                        <span>Utilized ensemble machine learning models for improved prediction accuracy</span>
                    </li>
                    <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-green-400 flex-shrink-0" />
                        <span>Developed interactive dashboards using D3.js and Tableau</span>
                    </li>
                    </ul>
                </motion.div>
                </div>

                <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                >
                <h2 className="text-3xl font-bold mb-6">Results</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                    <p className="text-xl font-semibold">Increased prediction accuracy by 35%</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                    <p className="text-xl font-semibold">Reduced data processing time by 60%</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                    <p className="text-xl font-semibold">Enabled real-time market trend monitoring</p>
                    </div>
                </div>
                </motion.div>

                <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                >
                <h2 className="text-3xl font-bold mb-6">Project Visualization</h2>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <img src="/placeholder.svg?height=400&width=600" alt="Market Trend Analysis" className="w-full h-auto rounded-lg" />
                </div>
                </motion.div>

                <motion.div
                className="mt-12 flex justify-center space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                >
                <a 
                    href="#" 
                    className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors backdrop-blur-sm"
                >
                    <Github className="mr-2" /> View on GitHub
                </a>
                <a 
                    href="#" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors"
                >
                    <ExternalLink className="mr-2" /> Live Demo
                </a>
                </motion.div>
            </div>
            </section>
        </main>

        <footer className="bg-gray-900 py-8">
            <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2023 DataViz Pro. All rights reserved.</p>
            </div>
        </footer>
        </div>
    );
}
