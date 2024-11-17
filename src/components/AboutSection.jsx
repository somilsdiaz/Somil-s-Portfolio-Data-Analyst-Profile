import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src="/placeholder.svg?height=300&width=300" alt="Profile" className="rounded-full border-4 border-blue-500 mx-auto" />
          </div>
          <div className="md:w-2/3 md:pl-12 space-y-6">
            <p className="text-lg">
              With over a decade of experience in data analysis, I specialize in turning raw data into compelling narratives and actionable insights.
            </p>
            <p className="text-lg">
              I've worked with Fortune 500 companies and cutting-edge startups, helping them leverage their data to drive innovation, optimize operations, and increase profitability.
            </p>
            <p className="text-lg">
              My mission is to bridge the gap between complex data and clear business strategies, enabling data-driven decision making at all levels of an organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
