import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
	const [showConsent, setShowConsent] = useState(false);

	useEffect(() => {
		// Check if user has already accepted cookies
		const cookieAccepted = localStorage.getItem("cookieConsent");
		if (!cookieAccepted) {
			setShowConsent(true);
		}
	}, []);

	const handleAccept = () => {
		// Save cookie consent to localStorage
		localStorage.setItem("cookieConsent", "true");
		setShowConsent(false);
	};

	if (!showConsent) return null;

	return (
		<div className="fixed bottom-0 left-0 right-0 bg-neutral text-white p-4 shadow-lg z-50">
			<div className="container-custom flex flex-col tablet:flex-row items-center justify-between gap-4">
				<div className="text-sm text-gray-300">
					<p>
						Este site utiliza cookies para melhorar sua experiência. Ao
						continuar navegando, você concorda com a nossa política de cookies.
					</p>
				</div>
				<div className="flex gap-4">
					<button
						type="button"
						onClick={handleAccept}
						className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
					>
						Aceitar
					</button>
					<Link
						to="/politica-de-privacidade"
						className="px-6 py-2 border border-gray-600 rounded-md hover:bg-gray-800 transition-colors"
					>
						Saber mais
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CookieConsent;
