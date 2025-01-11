import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import type { Data, Gym } from "../data/mockData";

type GymProps = {
	data: Pick<Data, 'pages'>['pages']['gyms'];
  };

const Gyms = ({ data }: GymProps) => {
	const [selectedGym, setSelectedGym] = useState<Gym | null>(null);
	const gyms = data;

	if (!gyms) return null;

	return (
		<div className="py-24">
			<div className="container-custom">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="space-y-12"
				>
					<div className="text-center space-y-4">
						<h1 className="text-4xl font-bold">Nossas Unidades</h1>
						<p className="text-xl text-gray-600">
							Encontre a unidade mais próxima de você
						</p>
					</div>

					<div className="flex flex-row flex-wrap items-center justify-center gap-10">
						{gyms.map((gym) => (
							<motion.div
								key={gym.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="w-[20rem] h-[15rem] lg:w-[40rem] lg:h-[30rem] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
								onClick={() => setSelectedGym(gym)}
							>
								<div
									className="h-[50%] bg-cover bg-center"
									style={{
										backgroundImage:
											"url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)",
									}}
								/>
								<div className="p-6 space-y-4">
									<h3 className="text-xl font-bold">{gym.name}</h3>
									<div className="space-y-2 text-gray-600">
										<div className="flex items-center gap-2">
											<MapPin className="h-5 w-5 text-primary" />
											<span>{gym.address}</span>
										</div>
										<div className="flex items-center gap-2">
											<Phone className="h-5 w-5 text-primary" />
											<span>{gym.phone}</span>
										</div>
										<div className="flex items-center gap-2">
											<Clock className="h-5 w-5 text-primary" />
											<div>
												<div>Seg-Sex: {gym.openingHours.weekdays}</div>
												<div>Sáb-Dom: {gym.openingHours.weekends}</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Gym Details Modal */}
				<AnimatePresence>
					{selectedGym && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
							onClick={() => setSelectedGym(null)}
						>
							<motion.div
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.9, opacity: 0 }}
								className="bg-white rounded-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
								onClick={(e) => e.stopPropagation()}
							>
								<div className="space-y-6">
									<h2 className="text-2xl font-bold">{selectedGym.name}</h2>

									{/* Image Gallery */}
									<div className="grid grid-cols-1 tablet:grid-cols-3 gap-4">
										{selectedGym.images.map((image, index) => (
											<div
												// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
												key={index}
												className="h-48 bg-cover bg-center rounded-lg"
												style={{
													backgroundImage:
														"url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)",
												}}
											/>
										))}
									</div>

									{/* Features */}
									<div>
										<h3 className="text-xl font-semibold mb-4">
											Infraestrutura
										</h3>
										<div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
											{selectedGym.features.map((feature, index) => (
												<div
													// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
													key={index}
													className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg"
												>
													<span className="w-2 h-2 bg-primary rounded-full" />
													<span>{feature}</span>
												</div>
											))}
										</div>
									</div>

									{/* Contact Info */}
									<div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
										<div>
											<h3 className="font-semibold mb-2">Endereço</h3>
											<p className="text-gray-600">{selectedGym.address}</p>
										</div>
										<div>
											<h3 className="font-semibold mb-2">Contato</h3>
											<p className="text-gray-600">{selectedGym.phone}</p>
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Gyms;
