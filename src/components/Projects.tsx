import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../data";
import { Code2, CheckCircle } from "lucide-react";

const Projects: React.FC = () => {
	useEffect(() => {
		console.log("Composant Projects monté");
		console.log("Nombre de projets:", projects.length);
		console.log("Projets:", JSON.stringify(projects, null, 2));
	}, []);

	return (
		<section
			id="projets"
			className="py-16 bg-gradient-to-b from-gray-50 to-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="max-w-5xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
						Mes Projets
					</h2>
					<p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
						Découvrez mes réalisations en développement web et applications
					</p>

					<div className="grid md:grid-cols-2 gap-6">
						{projects && projects.length > 0 ? (
							projects.map((project, index) => {
								console.log(`Rendu du projet ${index}:`, project.title);
								return (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										viewport={{ once: true }}
										className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100">
										<div className="flex items-center mb-4">
											<div className="bg-blue-50 p-2 rounded-lg mr-3">
												<Code2 size={20} className="text-blue-600" />
											</div>
											<h3 className="text-lg font-semibold text-gray-900">
												{project.title}
											</h3>
										</div>

										<p className="text-gray-600 mb-4 text-sm leading-relaxed">
											{project.description}
										</p>

										<div className="mb-4">
											<h4 className="font-semibold mb-2 text-gray-900 flex items-center text-sm">
												<span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
												Technologies utilisées
											</h4>
											<div className="flex flex-wrap gap-1.5">
												{project.technologies.map((tech, techIndex) => (
													<span
														key={techIndex}
														className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors">
														{tech}
													</span>
												))}
											</div>
										</div>

										<div>
											<h4 className="font-semibold mb-2 text-gray-900 flex items-center text-sm">
												<span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
												Fonctionnalités
											</h4>
											<ul className="space-y-2">
												{project.features?.map((feature, featureIndex) => (
													<li
														key={featureIndex}
														className="flex items-start group">
														<CheckCircle
															size={14}
															className="mr-2 mt-0.5 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform"
														/>
														<span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">
															{feature}
														</span>
													</li>
												))}
											</ul>
										</div>
									</motion.div>
								);
							})
						) : (
							<div className="col-span-2 text-center text-gray-600 py-8 bg-gray-50 rounded-lg">
								Aucun projet à afficher
							</div>
						)}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
