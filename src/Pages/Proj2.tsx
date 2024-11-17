import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink} from 'lucide-react';
import Footer from '../components/Footer';

export default function ProjectDetails() {
    const [modalData, setModalData] = useState({ isOpen: false, src: '', alt: '', title: '', description: '' });

    const openModal = (src, alt, title, description) => {
        setModalData({ isOpen: true, src, alt, title, description });
    };

    const closeModal = () => {
        setModalData({ isOpen: false, src: '', alt: '', title: '', description: '' });
    };

    const data = [
        { 
            title: "Family Status & Payment Difficulty", 
            src: "project2/family_status_payment_difficulty.PNG", 
            alt: "Family Status and Payment Difficulty Visualization", 
            description: "The graph reveals the relationship between marital status, educational level, and loan repayment capacity. While married individuals represent the largest proportion of those facing payment difficulties, individuals with higher education and higher incomes tend to experience fewer credit-related issues. In contrast, married individuals with secondary education and lower incomes are more likely to default on their obligations. These findings emphasize the importance of education level and income as key factors in credit risk assessment, which could assist financial institutions in making more informed and accurate lending decisions." 
        },
        { 
            title: "Number of Children & Payment Difficulty", 
            src: "project2/number_children_payment_difficult.PNG", 
            alt: "Number of Children and Payment Difficulty Chart", 
            description: "It is clearly evident that there is a relationship between the number of children, educational level, and the difficulty in repaying a loan. The X-axis represents the number of children, while the Y-axis indicates the number of individuals facing repayment challenges. The different colors of the bars represent various educational levels. The height of each bar reflects the number of individuals with a specific number of children who experience repayment difficulties. Furthermore, the proportion of each color within a bar illustrates how educational levels are distributed among those facing repayment challenges for that particular number of children." 
        },
        { 
            title: "Payment Difficulty by Age and Gender", 
            src: "project2/payment_difficulty_groupAge_gender.PNG", 
            alt: "Payment Difficulty by Age and Gender Chart", 
            description: "The chart illustrates the relationship between age, gender, and the difficulty in meeting loan repayment obligations. Individuals aged between 31 and 50 account for the largest proportion of delinquent borrowers, representing slightly over 50% of the cases. While both genders exhibit similar patterns, minor variations in repayment difficulties between men and women are observed. Nevertheless, age does not appear to be the most decisive factor, as repayment challenges are present across all age groups. To gain a more comprehensive understanding of the situation, it is essential to consider additional factors such as income level and loan type." 
        },
        { 
            title: "Payment Difficulty by Age Group", 
            src: "project2/payment_difficulty_groupAge.PNG", 
            alt: "Payment Difficulty by Age Group Chart", 
            description: "The age groups between 31 and 50 exhibit the highest levels of repayment difficulty. As age deviates from this middle range, either towards younger or older age groups, the difficulty in making payments tends to decrease." 
        },
        { 
            title: "Overall Payment Difficulty", 
            src: "project2/payment_difficulty.PNG", 
            alt: "Overall Payment Difficulty Visualization", 
            description: "An overall view of payment difficulties across all groups." 
        },
        { 
            title: "Total Customers by Gender", 
            src: "project2/total_customer_gender.png", 
            alt: "Total Customers by Gender Chart", 
            description: "This chart illustrates the distribution of customers by gender." 
        }
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
                            Loan Defaulter Prediction
                        </motion.h1>
                        <motion.div
                            className="mt-12 mb-12 flex justify-center space-x-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <a 
                                href="https://lookerstudio.google.com/u/0/reporting/3a5fadf5-0bf8-4370-a2a1-0b9add124378/page/e9URE" 
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors"
                                target="_blank"
                            >
                                <ExternalLink className="mr-2" /> Dashboard (Look Studio)
                            </a>
                            <a 
                                href="https://darwincharris.github.io/ProjectSelection-DM202430/index.html" 
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors"
                                target="_blank"
                            >
                                <ExternalLink className="mr-2" /> Project Page
                            </a>
                            <a 
                                href="https://www.kaggle.com/datasets/gauravduttakiit/loan-defaulter?select=columns_description.csv" 
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors"
                                target="_blank"
                            >
                                <ExternalLink className="mr-2" />Loan Defaulter Dataset
                            </a>
                        </motion.div>

                        <motion.div
                            className="bg-white/10 rounded-xl p-8 backdrop-blur-sm mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-xl mb-6">
                                This project focuses on predicting the likelihood of loan defaults based on customer data. By analyzing attributes such as income, credit amount, and family status, we aim to minimize risks for financial institutions while supporting better credit decisions.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    Python
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    Logistic Regression
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    SMOTE
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    Looker Studio
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    Data Visualization
                                </span>
                                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                    Risk Management
                                </span>
                            </div>
                        </motion.div>

                        <motion.h2
                            className="text-3xl font-bold mb-8 text-center text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Data Insights
                        </motion.h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.map((item, index) => (
                                <div key={index} className="relative group">
                                    <div 
                                        onClick={() => openModal(item.src, item.alt, item.title, item.description)} 
                                        className="bg-gray-800 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 cursor-pointer"
                                    >
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-white font-semibold text-lg">Click to View</span>
                                        </div>
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-center text-gray-300">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* Modal */}
                        {modalData.isOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                                <div className="bg-white rounded-lg max-w-4xl w-full p-8 relative shadow-lg max-h-[90vh] overflow-y-auto scrollbar-hidden">
                                    <button 
                                        onClick={closeModal} 
                                        className="absolute top-4 right-4 bg-red-600 text-white font-semibold rounded-full p-2 w-8 h-8 flex items-center justify-center hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                        aria-label="Cerrar Modal"
                                    >
                                        ✕
                                    </button>
                                    <h2 className="text-xl font-bold text-indigo-600 mb-4 pb-2 border-b-2 border-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                        {modalData.title}
                                    </h2>
                                    <img 
                                        src={modalData.src} 
                                        alt={modalData.alt} 
                                        className="w-full h-auto object-contain rounded-lg shadow-lg mb-6"
                                        style={{ maxHeight: '60vh', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)' }}
                                    />
                                    <div className="space-y-4">
                                        <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
                                            {modalData.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <motion.div
                            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            {/* Features Section */}
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
                                <ul className="list-disc list-inside space-y-4 text-gray-300">
                                    <li>Data cleaning to handle missing values and outliers.</li>
                                    <li>Exogenous factors analysis to improve predictions.</li>
                                    <li>Class balancing using SMOTE for accurate results.</li>
                                    <li>Interactive visualizations to explore trends.</li>
                                </ul>
                            </div>

                            {/* Technical Details Section */}
                            <div className="bg-gradient-to-r from-blue-900 via-gray-900 to-blue-900 rounded-xl p-8 shadow-xl">
                                <h2 className="text-3xl font-bold mb-6 text-center">Technical Details</h2>
                                <ul className="list-disc list-inside space-y-4 text-gray-300">
                                    <li>Logistic regression model for binary classification.</li>
                                    <li>Evaluation using precision, recall, and F1-score.</li>
                                    <li>Integration with Looker Studio for data visualization.</li>
                                    <li>Optimized processing of large datasets.</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                        >
                            {/* Data Quality Insights Section */}
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold mb-6 text-center">Data Quality Insights</h2>
                                <h3 className="text-xl font-semibold mb-4">Data Cleaning</h3>
                                <ul className="list-disc list-inside space-y-4 text-gray-300">
                                    <li><strong>Missing Values:</strong> Removed rows with minimal missing data in columns like `AMT_ANNUITY` and `AMT_GOODS_PRICE` to maintain data integrity.</li>
                                    <li><strong>Outliers:</strong> Extreme values were analyzed, with some being valid (e.g., unemployed/self-employed customers).</li>
                                </ul>
                                <h3 className="text-xl font-semibold mb-4">Exogenous Data</h3>
                                <p className="text-gray-300">External economic factors (interest rates, unemployment, inflation) were included to improve predictions related to repayment behavior.</p>
                            </div>

                            {/* Data Visualization Section */}
                            <div className="bg-gradient-to-r from-blue-900 via-gray-900 to-blue-900 p-6 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold mb-6 text-center">Data Visualization</h2>
                                <ul className="list-disc list-inside space-y-4 text-gray-300">
                                    <li><strong>Class Imbalance:</strong> 91.9% of clients had no payment difficulties, with only 8.1% facing defaults.</li>
                                    <li><strong>Gender Distribution:</strong> Of 200,000 clients, 68,500 are men and 131,500 are women, with a higher number of defaults among women.</li>
                                    <li><strong>Age Distribution:</strong> Age groups 31–50 show the highest risk for defaults, suggesting economic responsibilities increase default risk.</li>
                                    <li><strong>Ownership of Assets:</strong> No significant correlation found between asset ownership (vehicle/house) and delinquency risk.</li>
                                    <li><strong>Educational Level:</strong> Clients with secondary education had the highest concentration of payment difficulties.</li>
                                </ul>
                            </div>

                            {/* Machine Learning Model Section */}
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold mb-6 text-center">Machine Learning Model</h2>
                                <h3 className="text-xl font-semibold mb-4">Model Selection and Training</h3>
                                <ul className="list-disc list-inside space-y-4 text-gray-300">
                                    <li>Logistic Regression model used for binary classification.</li>
                                    <li>Model trained on the processed dataset with cross-validation.</li>
                                    <li>SMOTE applied to address class imbalance and improve default detection.</li>
                                </ul>
                                <h3 className="text-xl font-semibold mb-4">Model Evaluation</h3>
                                <p className="text-gray-300">Performance evaluated with accuracy, precision, recall, and F1-score metrics. SMOTE improved the prediction of defaults.</p>
                                <h3 className="text-xl font-semibold mb-4">Confusion Matrix</h3>
                                <p className="text-gray-300">Class balancing through SMOTE improved the model's prediction of defaults, as seen in the confusion matrix comparison.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="mt-12 flex justify-center space-x-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <a
                                href="https://github.com/somilsdiaz/loan-defaulter-prediction"
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
