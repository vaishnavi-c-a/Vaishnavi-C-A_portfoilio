import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary-500/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=800&auto=format&fit=crop" 
                alt="Workspace" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">A passionate Developer & Designer</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg">
              {personalInfo.summary}
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while reading about the latest trends in AI and Web Development.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl border-l-4 border-l-primary-500">
                <div className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">7.90</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Current CGPA</div>
              </div>
              <div className="glass p-6 rounded-2xl border-l-4 border-l-teal-400">
                <div className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">3+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
