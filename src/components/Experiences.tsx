import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react";
import { experiences } from "../data";

const Experiences: React.FC = () => {
	return (
		<section
			id="experiences"
			className="py-16 bg-gradient-to-b from-gray-50 to-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="max-w-5xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
						Expériences Professionnelles
					</h2>
					<p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
						Mes expériences en entreprise et mes réalisations
					</p>

					<div className="space-y-6">
						{experiences.map((experience, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100">
								<div className="flex items-start">
									<div className="bg-blue-50 p-2 rounded-lg mr-4">
										<Briefcase size={20} className="text-blue-600" />
									</div>
									<div className="flex-1">
										<div className="flex flex-wrap justify-between items-start mb-2">
											<h3 className="text-lg font-semibold text-gray-900">
												{experience.title}
											</h3>
											<span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
												{experience.type}
											</span>
										</div>

										<div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
											<div className="flex items-center">
												<MapPin size={14} className="mr-1.5" />
												{experience.company}
											</div>
											<div className="flex items-center">
												<MapPin size={14} className="mr-1.5" />
												{experience.location}
											</div>
											<div className="flex items-center">
												<Calendar size={14} className="mr-1.5" />
												{experience.period}
											</div>
										</div>

										<ul className="space-y-2">
											{experience.tasks.map((task, taskIndex) => (
												<li key={taskIndex} className="flex items-start group">
													<CheckCircle
														size={14}
														className="mr-2 mt-0.5 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform"
													/>
													<span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">
														{task}
													</span>
												</li>
											))}
										</ul>
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

export default Experiences;
