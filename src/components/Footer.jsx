import { personalInfo, navLinks } from '../data/portfolioData';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-slate-200 dark:border-dark-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="md:col-span-2">
            <a href="#home" className="font-display font-bold text-2xl text-gradient mb-4 inline-block">
              {personalInfo.name.split(' ')[0]}<span className="text-slate-900 dark:text-white">.</span>
            </a>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mb-6">
              {personalInfo.summary.substring(0, 120)}... Building digital experiences that matter.
            </p>
            <div className="flex space-x-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary-500 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>{personalInfo.location}</li>
              <li><a href={`mailto:${personalInfo.email}`} className="hover:text-primary-500 transition-colors">{personalInfo.email}</a></li>
              <li><a href={`tel:${personalInfo.phone}`} className="hover:text-primary-500 transition-colors">{personalInfo.phone}</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center relative">
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="absolute -top-5 right-4 md:right-0 md:relative md:top-0 w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-lg hover:bg-primary-600 transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
