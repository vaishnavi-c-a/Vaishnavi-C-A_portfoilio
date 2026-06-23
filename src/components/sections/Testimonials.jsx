import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../../data/portfolioData';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-100/50 dark:bg-dark-card/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Client <span className="text-gradient">Testimonials</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-500/20 z-0">
            <Quote size={120} />
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium italic mb-8 leading-relaxed">
                  "{testimonialsData[currentIndex].content}"
                </p>
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonialsData[currentIndex].avatar} 
                    alt={testimonialsData[currentIndex].name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary-500 mb-4"
                  />
                  <h4 className="font-bold text-lg">{testimonialsData[currentIndex].name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonialsData[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-500 hover:text-white transition-colors shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={next}
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-500 hover:text-white transition-colors shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
