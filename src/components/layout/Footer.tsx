import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Linkedin, Dumbbell } from "lucide-react";
import { mockData } from "../../data/mockData";

const Footer = () => {
	const { brand, contact, socialMedia } = mockData.general;

	return (
		<footer className="bg-neutral text-white pt-16 pb-8">
			<div className="container-custom">
				<div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8 mb-12">
					{/* Brand Info */}
					<div className="space-y-4">
						<Link to="/" className="flex items-center space-x-2">
							<Dumbbell className="h-8 w-8 text-primary" />
							<span className="font-montserrat font-bold text-xl">
								{brand.name}
							</span>
						</Link>
						<p className="text-gray-400">{brand.description}</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-montserrat font-semibold text-lg mb-4">
							Links Rápidos
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/modalidades"
									className="text-gray-400 hover:text-primary transition-colors"
								>
									Modalidades
								</Link>
							</li>
							<li>
								<Link
									to="/instrutores"
									className="text-gray-400 hover:text-primary transition-colors"
								>
									Instrutores
								</Link>
							</li>
							<li>
								<Link
									to="/horarios"
									className="text-gray-400 hover:text-primary transition-colors"
								>
									Horários
								</Link>
							</li>
							<li>
								<Link
									to="/contactos"
									className="text-gray-400 hover:text-primary transition-colors"
								>
									Contactos
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="font-montserrat font-semibold text-lg mb-4">
							Contactos
						</h3>
						<ul className="space-y-2 text-gray-400">
							<li>Telefone: {contact.phone}</li>
							<li>Email: {contact.email}</li>
							<li>WhatsApp: {contact.whatsapp}</li>
						</ul>
					</div>

					{/* Social Media */}
					<div>
						<h3 className="font-montserrat font-semibold text-lg mb-4">
							Redes Sociais
						</h3>
						<div className="flex space-x-4">
							<a
								href={`https://${socialMedia.facebook}`}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-primary transition-colors"
							>
								<Facebook className="h-6 w-6" />
							</a>
							<a
								href={`https://${socialMedia.instagram}`}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-primary transition-colors"
							>
								<Instagram className="h-6 w-6" />
							</a>
							<a
								href={`https://${socialMedia.youtube}`}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-primary transition-colors"
							>
								<Youtube className="h-6 w-6" />
							</a>
							<a
								href={`https://${socialMedia.linkedin}`}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-primary transition-colors"
							>
								<Linkedin className="h-6 w-6" />
							</a>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-gray-800 pt-8">
					<p className="text-center text-gray-400">
						© {new Date().getFullYear()} {brand.name}. Todos os direitos
						reservados.
					</p>
					<p className="text-center text-gray-400">
						Designed by{" "}
						<a
							className="font-semibold italic underline underline-offset-2 decoration-primary hover:text-primary transition-colors"
							href="https://mfreitas.vercel.app/"
							target="__blank"
						>
							M.Freitas
						</a>
						.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
