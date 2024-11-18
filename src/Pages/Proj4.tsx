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
                            Traffic Accident Analysis on Calle 30 in Barranquilla
                        </motion.h1>

                        <motion.div
                            className="bg-white/10 rounded-xl p-8 backdrop-blur-sm mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-xl mb-6">
                                This project provides a detailed analysis of traffic accidents recorded on Calle 30 in Barranquilla, Colombia, using data from the [Open Data Portal of Colombia](https://www.datos.gov.co/). The objective is to identify annual trends, critical months, hourly patterns, and variations in accident severity.  
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    Python
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    Pandas
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    Seaborn
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    Matplotlib
                                </span>
   
                            </div>

                        </motion.div>

                        {/* Grid Section */}
                        <div className="grid grid-cols-3 gap-6 mt-12">
                            {/* First row: 3 images */}
                            {[
                                { src: "project4/img.png", alt: "Number of accidents per day" },
                                { src: "project4/img2.png", alt: "Number of accidents per month" },
                                { src: "project4/img3.png", alt: "Total accidents by quarter of the year" },
                            ].map((img, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white/10 rounded-lg overflow-hidden shadow-lg"
                                    onClick={() => openLightbox(img.src, img.alt)}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-40 object-cover cursor-pointer"
                                    />
                                </div>
                            ))}

                            {/* Second row: 1 large image */}
                            <div className="col-span-3 relative bg-white/10 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src="project4/img4.png"
                                    alt="Variability of total accidents per quarter"
                                    className="w-full h-80 object-cover cursor-pointer"
                                    onClick={() => openLightbox("project4/img4.png", "Large Image")}
                                />
                            </div>
                        </div>

                        <motion.div
                            className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            {/* Analysis Objectives Section */}
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">Analysis Objectives</h2>
                                <ul className="list-disc list-inside space-y-6 text-gray-300">
                                    <li>
                                        <strong>Identification of Temporal Trends:</strong>
                                        <p>Analyze the quarterly evolution of traffic accidents recorded on Calle 30 in Barranquilla from 2015 to 2019 to uncover significant occurrence patterns.</p>
                                    </li>
                                    <li>
                                        <strong>Distribution by Time of Day:</strong>
                                        <p>Examine how the number of accidents varies throughout the day, categorizing the timeframes into morning, afternoon, peak hours, and off-peak hours to evaluate their influence on incident frequency.</p>
                                    </li>
                                    <li>
                                        <strong>Seasonal and Weekly Variability:</strong>
                                        <p>Assess the dispersion of traffic accidents by day of the week and quarter using graphical analysis tools such as <code className="bg-gray-700 px-1 rounded">boxplots</code> within a <code className="bg-gray-700 px-1 rounded">FacetGrid</code>.</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Key Findings Section */}
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold text-center mb-6 text-purple-400">Key Findings</h2>
                                <ol className="list-decimal list-inside space-y-4 text-gray-300">
                                    <li>Historically, there is a slight increase in daily accidents during the <strong >morning work hours</strong> compared to the afternoon.</li>
                                    <li>In <strong >January</strong>, <strong >June</strong>, and <strong >December</strong>, the average number of daily accidents is similar for both morning and afternoon, indicating stability during these months.</li>
                                    <li>In <strong >April</strong>, data shows that approximately 50% of the morning accidents represent 75% of those recorded in the afternoon.</li>
                                    <li>In <strong>May</strong> and <strong >July</strong>, the afternoon surpasses the morning in daily accident averages, standing out as the only months with this behavior.</li>
                                    <li>The months <strong >March</strong>, <strong>February</strong>, <strong>May</strong>, <strong>April</strong>, and <strong>November</strong> recorded the highest number of accidents during the analyzed period (2015-2020).</li>
                                </ol>
                            </div>
                        </motion.div>


                        {/* Lightbox Modal */}
                        {lightbox.isOpen && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 overflow-auto"
                                onClick={closeLightbox}
                            >
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative max-w-5xl w-full max-h-full p-6 bg-white rounded-lg shadow-xl overflow-hidden"
                                    onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer clic dentro
                                >
                                    {/* Botón de cierre */}
                                    <button
                                        onClick={closeLightbox}
                                        className="absolute top-4 right-4 bg-gray-800 text-white rounded-full p-2 shadow-md hover:bg-gray-700 transition-transform transform hover:scale-110 z-10"
                                        aria-label="Close"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                    {/* Imagen y título */}
                                    <div className="flex flex-col items-center">
                                        <img
                                            src={lightbox.src}
                                            alt={lightbox.alt}
                                            className="w-full max-w-full max-h-[70vh] object-contain rounded-lg"
                                        />
                                        <h2 className="mt-4 text-lg font-bold text-gray-900 text-center">
                                            {lightbox.alt}
                                        </h2>
                                    </div>
                                </motion.div>
                            </div>
                        )}

                        <motion.div
                            className="mt-12 flex justify-center space-x-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <a
                                href="https://github.com/somilsdiaz/accident-analysis-street-30-barranquilla/tree/main"
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
