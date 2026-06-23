import { motion } from 'framer-motion';
import { skillsData } from '../../data/portfolioData';

const SkillBar = ({ name, level, index }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary-500 to-teal-400 rounded-full"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-100/50 dark:bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary-500">&lt;/&gt;</span> Technical Skills
            </h3>
            {skillsData.technical.map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-teal-400">🤖</span> AI / ML
            </h3>
            {skillsData.ai.map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass p-8 rounded-3xl md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary-500">⚡</span> Electronics
            </h3>
            {skillsData.electronics.map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
