"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Project1Img from "../../../public/images/v1/project1.png";
import P1Img from "../../../public/images/portfolio/p_1.png";
import IlhaVeraCruzImg from "../../../public/images/Livros/Ilha-de-Vera-Cruz.png";
import MemoriasImpressasImg from "../../../public/images/Livros/Memórias-Impressas.png";
import UmaVidaCheiaDeSomImg from "../../../public/images/Livros/uma-vida-cheia-de-som.png";
import Star2Img from "../../../public/images/v1/star2.png";
import ProjectModal from "./ProjectModal";
import FadeInUp from "@/components/animation/FadeInUp";
import "swiper/css";
import "swiper/css/navigation";

const projectsData = [
	{
		id: "uma-escola-sonhada",
		title: "Uma Escola Sonhada",
		description: "Este livro foi baseado na tese de doutorado de Lucilia Bechara Sanchez defendida na FEUSP em 1996. Uma obra dedicada aos profissionais da educação e aos pais dos alunos, que narra a história e as transformações da Escola Vera Cruz ao longo das décadas, desde os anos 1960 até os dias atuais.",
		additionalInfo: "O livro apresenta uma análise institucional profunda, abordando temas como gestão participativa, cultura organizacional, aprendizagem institucional e os desafios enfrentados pela educação brasileira. Principais tópicos: Formação da escola nos anos 1960, Transformações dos anos 1970, Redemocratização da sociedade brasileira (década de 80), Década de noventa e anos 2000, Cultura organizacional e ação comunicativa, Modo de fazer uma escola e sua metodologia, Aprendizagem institucional e avaliação.",
		img: P1Img,
	},
	{
		id: "ilha-de-vera-cruz",
		title: "Ilha de Vera Cruz",
		subtitle: "Uma História com Muitas Histórias",
		description: "Tudo começou com um ideal e uma vontade enorme de fazer com que ele virasse realidade. E virou: o projeto social de alfabetização de jovens e adultos da Escola Vera Cruz e um livro infantil que conta essa história!",
		additionalInfo: (
			<>
				<blockquote style={{ fontStyle: "italic", marginBottom: "20px", paddingLeft: "20px", borderLeft: "3px solid #FDFDE1", color: "#ccc" }}>
					"É perfeitamente exato dizer – e toda experiência histórica o confirma – que não se teria jamais atingido o possível se não se houvesse tentado o impossível."
					<br />
					<cite style={{ fontSize: "14px", marginTop: "10px", display: "block" }}>Max Weber – Intelectual, Jurista e Economista alemão considerado um dos fundadores da Sociologia</cite>
				</blockquote>
			</>
		),
		img: IlhaVeraCruzImg,
	},
	{
		id: "memorias-impressas",
		title: "Memórias Impressas",
		subtitle: "Cartas Autobiográficas",
		description:
			"A correspondência pessoal é a concretização de um desejo de continuar a conversa, de manter o diálogo, de estender a troca afetiva com as pessoas que mais importaram e ainda importam na trajetória de Lucilia Bechara Sanchez, cuja capacidade de amar é o que melhor a define.",
		additionalInfo: (
			<>
				<blockquote style={{ fontStyle: "italic", marginBottom: "20px", paddingLeft: "20px", borderLeft: "3px solid #FDFDE1", color: "#ccc" }}>
					"Seu compromisso humanista, eternizado nesse livro e em seus sonhos continuará inspirando as novas gerações."
					<br />
					<cite style={{ fontSize: "14px", marginTop: "10px", display: "block" }}>Regina Scarpa – Diretora Pedagógica da Escola e do Instituto Vera Cruz</cite>
				</blockquote>
			</>
		),
		img: MemoriasImpressasImg,
	},
	{
		id: "uma-vida-cheia-de-som",
		title: "Uma Vida Cheia de Som",
		subtitle: "Leia no volume máximo",
		description:
			"Escuta essa! Antônio Márcio Ferros apresenta em seu primeiro livro de contos as músicas que mais tocaram no seu coração. O leitor (sem perceber) é transformado em ouvinte das histórias que compõem essa autobiografia musical. Leia no volume máximo!",
		additionalInfo: (
			<>
				<blockquote style={{ fontStyle: "italic", marginBottom: "20px", paddingLeft: "20px", borderLeft: "3px solid #FDFDE1", color: "#ccc" }}>
					"Com uma linguagem precisa e bem humorada, o autor nos remete ao humor clássico de Woody Allen."
					<br />
					<cite style={{ fontSize: "14px", marginTop: "10px", display: "block" }}>Djanira Pio - Escritora</cite>
				</blockquote>
				<blockquote style={{ fontStyle: "italic", marginBottom: "0", paddingLeft: "20px", borderLeft: "3px solid #FDFDE1", color: "#ccc" }}>
					"Som e palavras entrelaçados, vindos do coração. Surpreendente!"
					<br />
					<cite style={{ fontSize: "14px", marginTop: "10px", display: "block" }}>Emiliano José – Escritor</cite>
				</blockquote>
			</>
		),
		img: UmaVidaCheiaDeSomImg,
	},
];

function ProjectCard({ project, isMobile, onProjectClick }) {
	return (
		<div
			className="aximo-project-featured"
			style={{
				display: "flex",
				flexDirection: isMobile ? "column" : "row",
				gap: "40px",
				alignItems: "center",
				backgroundColor: "rgba(255, 255, 255, 0.03)",
				padding: isMobile ? "40px 30px" : "60px",
				borderRadius: "20px",
				border: "1px solid rgba(255, 255, 255, 0.1)",
				cursor: "pointer",
				transition: "all 0.3s ease",
				height: "100%",
			}}
			onClick={() => onProjectClick(project)}
			onMouseEnter={(e) => {
				if (!isMobile) {
					e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
					e.currentTarget.style.transform = "translateY(-5px)";
				}
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
				e.currentTarget.style.transform = "translateY(0)";
			}}
		>
			{!isMobile && (
				<div
					style={{
						flex: "0 0 45%",
						maxWidth: "45%",
						width: "100%",
					}}
				>
					<div style={{ aspectRatio: "auto", overflow: "hidden", borderRadius: "12px", maxHeight: "600px" }}>
						<Image
							src={project.img}
							alt={project.title}
							style={{
								width: "100%",
								height: "auto",
								objectFit: "contain",
							}}
						/>
					</div>
				</div>
			)}
			<div
				style={{
					flex: "1",
					width: "100%",
				}}
			>
				<div style={{ textAlign: isMobile ? "center" : "left" }}>
					{isMobile && (
						<div style={{ marginBottom: "30px" }}>
							<div style={{ overflow: "hidden", borderRadius: "12px", maxWidth: "300px", margin: "0 auto", maxHeight: "500px" }}>
								<Image
									src={project.img}
									alt={project.title}
									style={{
										width: "100%",
										height: "auto",
										objectFit: "contain",
									}}
								/>
							</div>
						</div>
					)}
					<h3
						style={{
							fontSize: isMobile ? "28px" : "clamp(28px, 4vw, 42px)",
							fontWeight: "bold",
							marginBottom: "10px",
							color: "#fff",
						}}
					>
						{project.title}
					</h3>
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
							fontSize: isMobile ? "16px" : "18px",
							lineHeight: "1.8",
							color: "#ccc",
							marginBottom: "30px",
						}}
					>
						{project.description}
					</p>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "15px",
							justifyContent: isMobile ? "center" : "flex-start",
						}}
					>
						<span style={{ color: "#fff", fontSize: "16px", fontWeight: "600" }}>
							Ver detalhes
						</span>
						<svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
								stroke="#FDFDE1"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

function Projects() {
	const [selectedProject, setSelectedProject] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const swiperRef = useRef(null);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const handleProjectClick = (project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedProject(null);
	};

	const swiperSettings = {
		modules: [Navigation, Autoplay],
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".projects-swiper-button-next",
			prevEl: ".projects-swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 1,
			},
		},
	};

	return (
		<div id="projetos" className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h2>
						Nossos
						<span className="aximo-title-animation">
							projetos editoriais
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10 col-xl-8" style={{ position: "relative" }}>
						<div
							className="aximo-projects-carousel"
							style={{
								position: "relative",
								paddingBottom: isMobile ? "0" : "0",
							}}
						>
							<Swiper {...swiperSettings} ref={swiperRef}>
								{projectsData.map((project) => (
									<SwiperSlide key={project.id}>
										<FadeInUp>
											<ProjectCard project={project} isMobile={isMobile} onProjectClick={handleProjectClick} />
										</FadeInUp>
									</SwiperSlide>
								))}
							</Swiper>
							<div
								className="aximo-projects-carousel-arrows"
								style={{
									position: "absolute",
									top: isMobile ? "50%" : "50%",
									bottom: isMobile ? "auto" : "auto",
									left: isMobile ? "-16px" : "-96px",
									right: isMobile ? "-16px" : "-96px",
									display: "flex",
									justifyContent: isMobile ? "space-between" : "space-between",
									alignItems: "center",
									transform: isMobile ? "translateY(-50%)" : "translateY(-50%)",
									gap: isMobile ? "12px" : "24px",
									zIndex: 10,
									pointerEvents: "none",
								}}
							>
								<div 
									className="projects-swiper-button-prev" 
									style={{
										pointerEvents: "auto",
										width: "72px",
										height: "52px",
										cursor: "pointer",
										borderRadius: "50px",
										transition: "all 0.4s",
										backgroundSize: "27px 44px",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",
										backgroundColor: "rgba(255, 255, 255, 0.1)",
										border: "2px solid rgba(255, 255, 255, 0.3)",
										boxShadow: "0 2px 0 0 rgba(255, 255, 255, 0.2)",
										backgroundImage: `url("data:image/svg+xml,%3Csvg width='34' height='28' viewBox='0 0 34 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.0205 2C14.0205 2 13.5 8 8.02046 11.2C5.51133 12.6653 2.02046 14 2.02046 14M2.02046 14H32M2.02046 14C2.02046 14 5.46612 15.415 8.02046 16.8C14.0205 20.0533 14.0205 26 14.0205 26' stroke='%23FDFDE1' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
										e.currentTarget.style.boxShadow = "none";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
										e.currentTarget.style.boxShadow = "0 2px 0 0 rgba(255, 255, 255, 0.2)";
									}}
								></div>
								<div 
									className="projects-swiper-button-next" 
									style={{
										pointerEvents: "auto",
										width: "72px",
										height: "52px",
										cursor: "pointer",
										borderRadius: "50px",
										transition: "all 0.4s",
										backgroundSize: "27px 44px",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",
										backgroundColor: "rgba(255, 255, 255, 0.1)",
										border: "2px solid rgba(255, 255, 255, 0.3)",
										boxShadow: "0 2px 0 0 rgba(255, 255, 255, 0.2)",
										backgroundImage: `url("data:image/svg+xml,%3Csvg width='34' height='28' viewBox='0 0 34 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26' stroke='%23FDFDE1' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
										e.currentTarget.style.boxShadow = "none";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
										e.currentTarget.style.boxShadow = "0 2px 0 0 rgba(255, 255, 255, 0.2)";
									}}
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
		</div>
	);
}

export default Projects;
