import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import type { Data } from "../data/mockData";

type ContactProps = {
	data: Pick<Data, 'pages'>['pages']['contact'];
  };

const Contact = ({data} : ContactProps) => {
	const contact = data;

	const initialFormState = {
		name: "",
		email: "",
		phone: "",
		subject: contact.form.subjects[0],
		message: "",
	};
	const [sending, setSending] = useState(false);
	const [formData, setFormData] = useState(initialFormState);
	const [message, setMessage] = useState("Enviar Mensagem");
	const [colorButton, setColorButton] = useState("btn-primary");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		try {
			setSending(true);
			setMessage("Enviando...");
			console.log("Form submitted:", formData);
			// Simulate API request
			setTimeout(() => {
				setSending(false);
				setMessage("Mensagem Enviada");
				setFormData(initialFormState);
				setColorButton("btn-secondary");

				setTimeout(() => {
					setMessage("Enviar Mensagem");
					setColorButton("btn-primary");
				}, 1000);
			}, 2000);
		} catch (error) {
			setSending(false);
			setMessage("Erro ao Enviar");
			setColorButton("btn-alert");
			console.error("Error sending message:", error);
			setTimeout(() => {
				setMessage("Enviar Mensagem");
				setColorButton("btn-primary");
				setFormData(initialFormState);
			}, 2000);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className="py-24">
			<div className="container-custom">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="space-y-12"
				>
					<div className="text-center space-y-4">
						<h1 className="text-4xl font-bold">Fale Conosco</h1>
						<p className="text-xl text-gray-600">Estamos aqui para ajudar</p>
					</div>

					<div className="grid grid-cols-1 desktop:grid-cols-2 gap-12">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="bg-white rounded-xl shadow-lg p-8"
						>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="space-y-2">
									<label className="block text-sm font-medium">
										Nome
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
											className="w-full rounded-lg border-gray-300 bg bg-slate-100 shadow-sm focus:border-gray-400 focus:ring-gray-50 p-1"
										/>
									</label>
								</div>

								<div className="space-y-2">
									<label className="block text-sm font-medium">
										Email
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											required
											className="w-full rounded-lg border-gray-300 bg bg-slate-100 shadow-sm focus:border-gray-400 focus:ring-gray-50 p-1"
										/>
									</label>
								</div>

								<div className="space-y-2">
									<label className="block text-sm font-medium">
										Telefone
										<input
											type="tel"
											name="phone"
											value={formData.phone}
											onChange={handleChange}
											className="w-full rounded-lg border-gray-300 bg bg-slate-100 shadow-sm focus:border-gray-400 focus:ring-gray-50 p-1"
										/>
									</label>
								</div>

								<div className="space-y-2">
									<label className="block text-sm font-medium">
										Assunto
										<select
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											className="w-full rounded-lg border-gray-300 bg bg-slate-100 shadow-sm focus:border-gray-400 focus:ring-gray-50 p-1"
										>
											{contact.form.subjects.map((subject) => (
												<option key={subject} value={subject}>
													{subject}
												</option>
											))}
										</select>
									</label>
								</div>

								<div className="space-y-2">
									<label className="block text-sm font-medium">
										Mensagem
										<textarea
											name="message"
											value={formData.message}
											onChange={handleChange}
											required
											rows={4}
											className="w-full rounded-lg border-gray-300 bg bg-slate-100 shadow-sm focus:border-gray-400 focus:ring-gray-50 p-2"
										/>
									</label>
								</div>

								<button
									type="submit"
									className={`${colorButton} text-lg w-full ${sending ? "cursor-not-allowed" : ""}`}
								>
									{message}
								</button>
							</form>
						</motion.div>

						{/* Contact Information */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							className="space-y-8"
						>
							<div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
								{contact.locations.map((location) => (
									<div
										key={location.id}
										className="bg-white rounded-xl shadow-lg p-6 space-y-4"
									>
										<h3 className="text-xl font-bold">{location.name}</h3>
										<div className="space-y-3 text-gray-600">
											<div className="flex items-center gap-2">
												<MapPin className="h-5 w-5 text-primary" />
												<span>{location.address}</span>
											</div>
											<div className="flex items-center gap-2">
												<Phone className="h-5 w-5 text-primary" />
												<span>{location.phone}</span>
											</div>
											<div className="flex items-center gap-2">
												<Mail className="h-5 w-5 text-primary" />
												<span>{location.email}</span>
											</div>
										</div>
									</div>
								))}
							</div>

							{/* Map */}
							<div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
								<p className="text-gray-500">
									Mapa interativo será carregado aqui
								</p>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
