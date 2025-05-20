import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
	return (
		<section id="à-propos" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-8">À propos de moi</h2>

					<div className="space-y-6 text-gray-600">
						<p>
							Actuellement étudiant en BTS SIO SLAM à l'EFREI Paris, je suis
							passionné par l'informatique et plus particulièrement par le
							développement web et la gestion de bases de données. Mon objectif
							est de poursuivre mes études en Licence 3 Bachelor Ingénierie &
							Numérique pour approfondir mes connaissances et compétences.
						</p>

						<p>
							Ma passion pour l'informatique s'est développée au fil de mes
							expériences, notamment lors de mes stages et de mon alternance
							chez LDLC, où j'ai pu mettre en pratique mes connaissances tout en
							développant de nouvelles compétences.
						</p>

						<p>
							Mon objectif professionnel est de partager mes connaissances en
							devenant formateur et intervenant dans le domaine informatique,
							tout en continuant à me perfectionner dans le développement web et
							la gestion de projets.
						</p>
					</div>

					<motion.div
						className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						viewport={{ once: true }}>
						<div className="text-center">
							<h3 className="text-4xl font-bold text-black mb-2">19</h3>
							<p className="text-gray-600">Ans</p>
						</div>
						<div className="text-center">
							<h3 className="text-4xl font-bold text-black mb-2">2+</h3>
							<p className="text-gray-600">Années d'études</p>
						</div>
						<div className="text-center">
							<h3 className="text-4xl font-bold text-black mb-2">3</h3>
							<p className="text-gray-600">Stages</p>
						</div>
						<div className="text-center">
							<h3 className="text-4xl font-bold text-black mb-2">5+</h3>
							<p className="text-gray-600">Projets</p>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
