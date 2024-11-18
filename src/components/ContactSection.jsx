import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
        I’m excited to help unlock the full potential of your data and drive impactful, data-driven decisions. Reach out to explore how I can contribute to your team’s success.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:somils@uninorte.edu.co" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors backdrop-blur-sm">
            <Mail className="mr-2" /> Email
          </a>
          <a href="https://www.linkedin.com/in/somil-sandoval-diaz-218304333/" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors backdrop-blur-sm" target='_blank'>
            <Linkedin className="mr-2" /> LinkedIn
          </a>
          <a href="https://github.com/somilsdiaz" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors backdrop-blur-sm" target='_blank'>
            <Github className="mr-2" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
