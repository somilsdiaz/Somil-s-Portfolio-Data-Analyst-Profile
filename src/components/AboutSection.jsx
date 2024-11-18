import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center text-blue-400">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Sección de la imagen */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              src="Somil.JPG"
              alt="Profile"
              className="rounded-full border-4 border-blue-500 mx-auto"
            />
          </div>

          {/* Sección de texto */}
          <div className="md:w-2/3 text-center md:text-center space-y-4 md:space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-justify">
              I am a Systems and Computer Engineering student with a strong passion for data analysis and a solid foundation in statistics, programming, and database management.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              My expertise lies in merging advanced technical skills, critical thinking, and meticulous attention to detail to extract value from complex data. I have hands-on experience with Power BI for data visualization, as well as proficiency in Python and SQL for crafting efficient and automated solutions.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              I excel at transforming data into actionable insights that drive strategic decision-making. Known for my adaptability, commitment to quality, and ability to collaborate effectively within multidisciplinary teams, I also possess strong interpersonal skills, enabling me to communicate technical results clearly and persuasively to non-technical audiences.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              Driven by a commitment to continuous learning, I stay ahead of trends in data science and analytics. My goal is to contribute to organizational growth by delivering precise analyses, leveraging innovative methodologies, and developing data-driven solutions that bridge strategic goals with operational realities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
