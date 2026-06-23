import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import profileImg from '../../assets/img.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium text-sm mb-6"
            >
              Welcome to my portfolio
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Hi, I'm <br />
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6 font-medium">
              {personalInfo.role}
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
              I build exceptional and accessible digital experiences for the web. Let's turn your ideas into reality.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-all shadow-lg hover:shadow-primary-500/30 flex items-center gap-2 group"
              >
                View Projects 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-900 dark:text-white font-medium hover:border-primary-500 dark:hover:border-primary-500 transition-colors flex items-center gap-2"
              >
                Download CV 
                <Download className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 relative z-10 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-teal-400 rounded-full animate-spin-slow opacity-20 blur-xl"></div>
              {/* Profile Image */}
              <img 
                src={profileImg} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-dark-card shadow-2xl relative z-10"
              />
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-10 glass px-4 py-3 rounded-2xl z-20 flex items-center gap-3"
              >
                <div className="text-4xl">🚀</div>
                <div>
                  <div className="text-sm font-bold">5+ Years</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Experience</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-10 -right-10 glass px-4 py-3 rounded-2xl z-20 flex items-center gap-3"
              >
                <div className="text-4xl">💡</div>
                <div>
                  <div className="text-sm font-bold">50+</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Projects Done</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
