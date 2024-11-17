import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import Footer from '../components/Footer';


export default function ProjectDetails() {
    const [lightbox, setLightbox] = useState({ isOpen: false, src: '', alt: '' });

function openLightbox(src, alt) {
    setLightbox({ isOpen: true, src, alt });
}

function closeLightbox() {
    setLightbox({ isOpen: false, src: '', alt: '' });
}
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
                            Advanced Twitter Data Analysis
                        </motion.h1>

                        <motion.div
                            className="bg-white/10 rounded-xl p-8 backdrop-blur-sm mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-xl mb-6">
                                This project focuses on advanced analysis of Twitter data, extracting retweet, mention,
                                and coretweet patterns, and generating interactive network graphs for visualizations
                                using GEXF format.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    Python
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    NetworkX
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    MPI
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    JSON/BZ2
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    GEXF
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    os
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    getopt
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    sys
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    shutil
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    datetime
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    time
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    BZ2File
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    DiGraph
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    Python multiprocessing
                                </span>
                            </div>

                        </motion.div>

                        <motion.div
                            className="mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-center text-white">Graph Visualizations</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    { title: "Retweet Network", src: "project1/retweets.png", alt: "Retweet Network Graph" },
                                    { title: "Mention Network", src: "project1/menciones.png", alt: "Mention Network Graph" },
                                    { title: "Coretweet Network", src: "project1/corretweets.png", alt: "Coretweet Network Graph" },
                                ].map((item, index) => (
                                    <div key={index} className="relative group">
                                        <div className="bg-white/10 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                                            <img
                                                src={item.src}
                                                alt={item.alt}
                                                className="w-full h-40 object-cover sm:h-48 md:h-56"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                                                <button
                                                    onClick={() => openLightbox(item.src, item.alt)}
                                                    className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500"
                                                >
                                                    View Larger
                                                </button>
                                            </div>
                                        </div>
                                        <h3 className="mt-4 text-lg font-semibold text-center text-white">{item.title}</h3>
                                    </div>
                                ))}
                            </div>

                            {/* Lightbox Modal */}
                            {lightbox.isOpen && (
                                <div
                                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                                    onClick={closeLightbox}
                                >
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative max-w-5xl w-full p-6"
                                    >
                                        <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto rounded-lg shadow-xl" />
                                        <button
                                            onClick={closeLightbox}
                                            className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-3 shadow-md hover:bg-red-500 transition-transform transform hover:scale-110"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-6 h-6"
                                            >
                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                <line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        </button>
                                    </motion.div>
                                </div>
                            )}
                        </motion.div>

                        {/* Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            {/* Features and Functionalities */}
                            <motion.div
                                className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h2 className="text-3xl font-bold mb-6 text-center">Features and Functionalities</h2>
                                <ul className="list-disc list-inside space-y-4 text-gray-300">
                                    <li>
                                        <strong>File Retrieval and Date Filtering</strong>: Searches for `.json.bz2` files and filters based on date.
                                    </li>
                                    <li>
                                        <strong>Hashtag Filtering</strong>: Filters tweets based on user-specified hashtags.
                                    </li>
                                    <li>
                                        <strong>Data Extraction</strong> Extracts tweet metadata and saves to `merged_output.json`.
                                    </li>
                                    <li>
                                        <strong>Network Analysis</strong>: Constructs retweet, mention, and coretweet networks.
                                    </li>
                                    <li>
                                        <strong>Graph Export</strong>: Outputs graphs in GEXF format for visualization.
                                    </li>
                                    <li>
                                        <strong>Output Cleanup</strong>: Deletes temporary files post-processing.
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Technical Details */}
                            <motion.div
                                className="bg-gradient-to-r from-blue-900 via-gray-900 to-blue-900 rounded-xl p-8 shadow-xl backdrop-blur-md"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <h2 className="text-3xl font-bold mb-6 text-center">Technical Details</h2>
                                <ul className="list-disc list-inside space-y-4 text-gray-300">
                                    <li>
                                        Processed JSON files using <strong>json</strong>, <strong>bz2</strong>, and <strong>shutil</strong>.
                                    </li>
                                    <li>
                                        Built graphs with <strong>NetworkX</strong> and exported in <strong>GEXF</strong>.
                                    </li>
                                    <li>
                                        Reduced processing time by <span className="text-green-400">64%</span> using <strong>mpi4py</strong>.
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Parallelism Section */}
                            <motion.div
                                className="bg-gradient-to-r from-blue-900 via-gray-900 to-blue-900 rounded-xl p-8 shadow-xl backdrop-blur-md"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <h2 className="text-3xl font-bold mb-6 text-center">Parallelism with MPI</h2>
                                <p className="text-gray-300 mb-6">
                                    MPI was implemented for parallelism, reducing execution time significantly by distributing workloads across processors.
                                </p>
                                <ul className="list-disc list-inside space-y-4 text-gray-300">
                                    <li>Split files using <strong>comm.scatter</strong>.</li>
                                    <li>Collected results with <strong>comm.gather</strong>.</li>
                                    <li>
                                        Achieved <span className="text-green-400">64%</span> improvement compared to sequential processing.
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Usage and Example */}
                            <motion.div
                                className="bg-gradient-to-t from-gray-800 via-gray-900 to-black rounded-xl p-8 shadow-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <h2 className="text-3xl font-bold mb-6 text-center">Usage and Example</h2>
                                <p className="text-gray-300 mb-6">
                                    To execute the script and process Twitter data, run the following command:
                                </p>
                                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm text-center whitespace-normal break-words">
                                    <code>
                                        python script_name.py -d "./data" -h "hashtags.txt" -fi "01-01-2023" -ff "31-12-2023" --grt --gm --gcrt
                                    </code>
                                </pre>
                            </motion.div>
                        </div>


                        <motion.div
                            className="mt-12 flex justify-center space-x-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <a
                                href="https://github.com/somilsdiaz/twitter-data-network-analysis/tree/main"
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
