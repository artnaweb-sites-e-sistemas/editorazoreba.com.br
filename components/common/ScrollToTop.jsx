"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 700) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		showTopBtn && (
			<div className="aximo-go-top" onClick={goToTop} style={{ cursor: "pointer" }}>
				<i className="fas fa-arrow-up"></i>
			</div>
		)
	);
}
