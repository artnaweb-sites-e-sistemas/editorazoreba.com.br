"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function ProjectModal({ project, isOpen, onClose }) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape" && isOpen) {
				onClose();
			}
		};
		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isOpen, onClose]);

	if (!isOpen || !project) return null;

	return (
		<div
			className="project-modal-overlay"
			onClick={onClose}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: "rgba(0, 0, 0, 0.85)",
				zIndex: 9999,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "20px",
			}}
		>
			<div
				className="project-modal-content"
				onClick={(e) => e.stopPropagation()}
				style={{
					backgroundColor: "#1a1a1a",
					maxWidth: "1000px",
					width: "100%",
					maxHeight: "90vh",
					overflow: "auto",
					borderRadius: "12px",
					display: "flex",
					flexDirection: isMobile ? "column" : "row",
					position: "relative",
					boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
				}}
			>
				<button
					onClick={onClose}
					style={{
						position: "absolute",
						top: "20px",
						right: "20px",
						background: "transparent",
						border: "none",
						color: "#fff",
						fontSize: "32px",
						cursor: "pointer",
						zIndex: 10,
						width: "40px",
						height: "40px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "50%",
						transition: "background-color 0.3s",
						lineHeight: "1",
					}}
					onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")}
					onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
					aria-label="Fechar modal"
				>
					×
				</button>

				<div
					style={{
						flex: isMobile ? "none" : "0 0 50%",
						width: isMobile ? "100%" : "auto",
						padding: "40px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "#0f0f0f",
						borderRadius: isMobile ? "12px 12px 0 0" : "12px 0 0 12px",
					}}
				>
					<Image
						src={project.img}
						alt={project.title}
						style={{
							width: "100%",
							height: "auto",
							objectFit: "contain",
							borderRadius: "4px",
						}}
					/>
				</div>

				<div
					style={{
						flex: isMobile ? "none" : "0 0 50%",
						width: isMobile ? "100%" : "auto",
						padding: isMobile ? "40px 30px" : "60px 40px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						color: "#fff",
					}}
				>
					<h2
						style={{
							fontSize: isMobile ? "24px" : "32px",
							marginBottom: project.subtitle ? "10px" : "20px",
							fontWeight: "bold",
							lineHeight: "1.2",
							color: "#ffffff",
						}}
					>
						{project.title}
					</h2>
					{project.subtitle && (
						<p
							style={{
								fontSize: isMobile ? "18px" : "20px",
								fontWeight: "500",
								marginBottom: "20px",
								color: "#FDFDE1",
								fontStyle: "italic",
							}}
						>
							{project.subtitle}
						</p>
					)}
					<p
						style={{
							fontSize: "16px",
							lineHeight: "1.8",
							color: "#ccc",
							marginBottom: "30px",
						}}
					>
						{project.description}
					</p>
					{project.additionalInfo && (
						<div
							style={{
								marginTop: "20px",
								paddingTop: "20px",
								borderTop: "1px solid #333",
							}}
						>
							<p
								style={{
									fontSize: "15px",
									lineHeight: "1.8",
									color: "#ccc",
									marginBottom: "15px",
								}}
							>
								{typeof project.additionalInfo === "string" ? (
									<>
										<strong style={{ color: "#fff", display: "block", marginBottom: "10px" }}>
											Sobre a obra:
										</strong>
										{project.additionalInfo}
									</>
								) : (
									project.additionalInfo
								)}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProjectModal;

