import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Collaborate</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Ready to unlock the full potential of your data? Let's work together to transform your business with data-driven insights.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:contact@example.com" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors backdrop-blur-sm">
            <Mail className="mr-2" /> Email
          </a>
          <a href="#" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors backdrop-blur-sm">
            <Linkedin className="mr-2" /> LinkedIn
          </a>
          <a href="#" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors backdrop-blur-sm">
            <Github className="mr-2" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
