import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mockData } from "../../data/mockData";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { brand } = mockData.general;

	const menuItems = [
		{ path: "/", label: "Home" },
		{ path: "/modalidades", label: "Modalidades" },
		{ path: "/instrutores", label: "Instrutores" },
		{ path: "/ginasios", label: "Ginásios" },
		{ path: "/horarios", label: "Horários" },
		{ path: "/contactos", label: "Contactos" },
	];

	return (
		<header className="fixed w-full bg-white shadow-md z-50">
			<nav className="container-custom py-4">
				<div className="flex items-center justify-between">
					<Link to="/" className="flex items-center space-x-2">
						<Dumbbell className="h-[4rem] w-h-[4rem] text-primary" />
						<span className="font-montserrat font-bold text-xl">
							{brand.name}
						</span>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden desktop:flex items-center space-x-8">
						{menuItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className="relative font-montserrat font-medium text-black hover:text-primary transition-colors group"
							>
								<span className="relative z-10">{item.label}</span>
								<div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
							</Link>
						))}
						<button type="button" className="btn-primary">
							Começar Agora
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
						type="button"
						className="desktop:hidden p-2"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="desktop:hidden"
						>
							<div className="py-4 space-y-8">
								{menuItems.map((item) => (
									<Link
										key={item.path}
										to={item.path}
										className="relative block font-montserrat font-medium text-black hover:text-primary transition-colors group"
										onClick={() => setIsOpen(false)}
									>
										<span className="relative z-10">{item.label}</span>
										<div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
									</Link>
								))}
								<button type="button" className="btn-primary w-full">
									Começar Agora
								</button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
};

export default Header;
