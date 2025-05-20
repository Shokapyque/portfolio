import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';
import { technicalSkills, softSkills, languages } from '../data';

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700">{skill.name}</span>
        <span className="text-gray-600">{skill.level}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-black h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="compétences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Compétences techniques</h3>
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
            
            <div>
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
                {softSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Langues</h3>
                {languages.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;