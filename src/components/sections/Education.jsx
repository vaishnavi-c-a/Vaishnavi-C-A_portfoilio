import { motion } from 'framer-motion';
import { educationData } from '../../data/portfolioData';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">My <span className="text-gradient">Education</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-primary-500/30 ml-4 md:ml-0">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1 w-10 h-10 bg-white dark:bg-dark-card border-4 border-primary-500 rounded-full flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-primary-500" />
              </div>
              
              <div className="glass p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                <span className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
                  {item.date}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{item.degree}</h3>
                <h4 className="text-lg text-slate-600 dark:text-slate-400 mb-4 font-medium">{item.institution}</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
