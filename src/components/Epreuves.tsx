import React from "react";
import { motion } from "framer-motion";
import { Award, FileCheck, Code2, Database } from "lucide-react";

const Epreuves: React.FC = () => {
	return (
		<section
			id="epreuves"
			className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">
						Épreuves BTS SIO
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						{/* E4 */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
							<div className="flex items-center mb-4">
								<Code2 className="w-8 h-8 text-blue-500 mr-3" />
								<h3 className="text-xl font-bold text-blue-900">Épreuve E4</h3>
							</div>
							<h4 className="text-lg font-semibold text-blue-800 mb-3">
								Support et mise à disposition de services informatiques
							</h4>
							<div className="space-y-4">
								<div className="bg-blue-50 p-4 rounded-lg">
									<h5 className="font-semibold text-blue-900 mb-2">
										Objectifs
									</h5>
									<ul className="space-y-2 text-blue-800">
										<li className="flex items-start">
											<FileCheck className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
											<span>Gérer le patrimoine informatique</span>
										</li>
										<li className="flex items-start">
											<FileCheck className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
											<span>Répondre aux incidents</span>
										</li>
										<li className="flex items-start">
											<FileCheck className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
											<span>
												Développer la présence en ligne de l'organisation
											</span>
										</li>
									</ul>
								</div>
								<div className="bg-blue-50 p-4 rounded-lg">
									<h5 className="font-semibold text-blue-900 mb-2">
										Modalités
									</h5>
									<p className="text-blue-800">
										Contrôle en cours de formation (CCF) avec deux situations
										d'évaluation.
									</p>
								</div>
							</div>
						</motion.div>

						{/* E5 */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
							<div className="flex items-center mb-4">
								<Database className="w-8 h-8 text-purple-500 mr-3" />
								<h3 className="text-xl font-bold text-purple-900">
									Épreuve E5
								</h3>
							</div>
							<h4 className="text-lg font-semibold text-purple-800 mb-3">
								Conception et développement d'applications
							</h4>
							<div className="space-y-4">
								<div className="bg-purple-50 p-4 rounded-lg">
									<h5 className="font-semibold text-purple-900 mb-2">
										Objectifs
									</h5>
									<ul className="space-y-2 text-purple-800">
										<li className="flex items-start">
											<FileCheck className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
											<span>
												Concevoir et développer une solution applicative
											</span>
										</li>
										<li className="flex items-start">
											<FileCheck className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
											<span>
												Assurer la maintenance corrective ou évolutive des
												solutions applicatives
											</span>
										</li>
										<li className="flex items-start">
											<FileCheck className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
											<span>Gérer les données</span>
										</li>
									</ul>
								</div>
								<div className="bg-purple-50 p-4 rounded-lg">
									<h5 className="font-semibold text-purple-900 mb-2">
										Modalités
									</h5>
									<p className="text-purple-800">
										Contrôle en cours de formation (CCF) avec deux situations
										d'évaluation, incluant la présentation d'un dossier de
										projet.
									</p>
								</div>
							</div>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="mt-8 p-6 bg-white rounded-xl shadow-lg border-l-4 border-indigo-500">
						<div className="flex items-center mb-4">
							<Award className="w-8 h-8 text-indigo-500 mr-3" />
							<h3 className="text-xl font-bold text-indigo-900">
								Préparation aux épreuves
							</h3>
						</div>
						<p className="text-indigo-800">
							Ces épreuves permettent d'évaluer les compétences acquises tout au
							long de la formation en matière de développement d'applications,
							de gestion de projets et de support informatique. La documentation
							et le suivi régulier des projets sont essentiels pour constituer
							un dossier solide pour ces épreuves.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Epreuves;
