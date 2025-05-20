import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const formations = [
	{
		title: "BTS SIO - Services Informatiques aux Organisations",
		school: "Lycée Jean Macé",
		location: "Vitry-sur-Seine",
		period: "2023 - 2025",
		description: "Option SLAM (Solutions Logicielles et Applications Métiers)",
		mention: "En cours",
	},
	{
		title: "Baccalauréat Professionnel SN - Systèmes Numériques",
		school: "Lycée Jean Macé",
		location: "Vitry-sur-Seine",
		period: "2020 - 2023",
		description: "Option RISC (Réseaux Informatiques et Systèmes Communicants)",
		mention: "Mention Assez Bien",
	},
];

const Formations: React.FC = () => {
	return (
		<section
			id="formations"
			className="py-16 bg-gradient-to-b from-white to-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="max-w-5xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-3">
							Formations
						</h2>
						<div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						{formations.map((formation, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 relative overflow-hidden">
								<div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full transform translate-x-8 -translate-y-8 transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4"></div>

								<div className="relative">
									<div className="flex items-start">
										<div className="bg-blue-50 p-2.5 rounded-lg mr-3 group-hover:bg-blue-100 transition-colors duration-300">
											<GraduationCap size={18} className="text-blue-600" />
										</div>
										<div className="flex-1">
											<div className="flex justify-between items-start mb-2">
												<h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
													{formation.title}
												</h3>
												<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
													{formation.mention}
												</span>
											</div>
											<p className="text-gray-600 text-sm mb-3">
												{formation.description}
											</p>
											<div className="flex flex-wrap gap-3 text-xs text-gray-500">
												<div className="flex items-center bg-gray-50 px-2 py-1 rounded-full">
													<MapPin size={12} className="mr-1 text-blue-600" />
													{formation.school}
												</div>
												<div className="flex items-center bg-gray-50 px-2 py-1 rounded-full">
													<MapPin size={12} className="mr-1 text-blue-600" />
													{formation.location}
												</div>
												<div className="flex items-center bg-gray-50 px-2 py-1 rounded-full">
													<Calendar size={12} className="mr-1 text-blue-600" />
													{formation.period}
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Formations;
