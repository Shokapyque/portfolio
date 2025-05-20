import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Formation: React.FC = () => {
  return (
    <section id="formation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Formation</h2>
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0">
                <GraduationCap size={32} className="text-gray-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">BTS SIO SLAM</h3>
                <p className="text-gray-600 mb-1">EFREI Paris, Villejuif</p>
                <p className="text-gray-500">09/2023 – En cours</p>
                <p className="mt-4 text-gray-600">
                  Formation en Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers.
                  Spécialisation en développement d'applications et gestion de bases de données.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0">
                <GraduationCap size={32} className="text-gray-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Baccalauréat Professionnel SN RISC</h3>
                <p className="text-gray-600 mb-1">Lycée Louis Armand, Nogent-sur-Marne</p>
                <p className="text-gray-500 mb-2">09/2020 - 08/2023</p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  Mention Assez Bien
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Formation;