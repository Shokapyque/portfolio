import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formRef.current) return;

		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			await emailjs.sendForm(
				"YOUR_SERVICE_ID",
				"YOUR_TEMPLATE_ID",
				formRef.current,
				"YOUR_PUBLIC_KEY"
			);
			setSubmitStatus("success");
			formRef.current.reset();
		} catch (error) {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">Contact</h2>

					<div className="grid md:grid-cols-2 gap-12">
						<div>
							<h3 className="text-xl font-semibold mb-6">Me contacter</h3>
							<form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 mb-1">
										Nom
									</label>
									<input
										type="text"
										id="name"
										name="name"
										required
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-1">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 mb-1">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										required
										rows={4}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
									/>
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center disabled:opacity-50">
									{isSubmitting ? (
										"Envoi en cours..."
									) : (
										<>
											<Send size={20} className="mr-2" />
											Envoyer
										</>
									)}
								</button>

								{submitStatus === "success" && (
									<p className="text-green-600 text-center">
										Message envoyé avec succès !
									</p>
								)}
								{submitStatus === "error" && (
									<p className="text-red-600 text-center">
										Une erreur est survenue. Veuillez réessayer.
									</p>
								)}
							</form>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-6">Mes réseaux</h3>
							<div className="space-y-4">
								<a
									href="mailto:alexandre.leitao@efrei.net"
									className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors">
									<Mail size={24} />
									<span>alexandre.leitao@efrei.net</span>
								</a>

								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors">
									<Github size={24} />
									<span>GitHub</span>
								</a>

								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors">
									<Linkedin size={24} />
									<span>LinkedIn</span>
								</a>
							</div>

							<div className="mt-8">
								<h3 className="text-xl font-semibold mb-4">Informations</h3>
								<div className="space-y-2 text-gray-600">
									<p>📍 Villiers-sur-Marne (94350), France</p>
									<p>📅 19 décembre 2005</p>
									<p>🚗 Permis B - Véhiculé</p>
									<p>📆 Disponible à partir de septembre 2025</p>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
