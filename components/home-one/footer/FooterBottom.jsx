"use client";
import Image from "next/image";
import LogoWhiteImg from "../../../public/images/logo/logo-white.svg";
import LogoWImg from "../../../public/images/logo/logow.webp";

function FooterBottom() {
	return (
		<>
			<style dangerouslySetInnerHTML={{
				__html: `
					@keyframes heartPulse {
						0%, 100% {
							transform: scale(1);
						}
						50% {
							transform: scale(1.2);
						}
					}
					.heart-pulse {
						animation: heartPulse 1.5s ease-in-out infinite;
						display: inline-block;
					}
				`
			}} />
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<a href="#">
						<Image src={LogoWhiteImg} alt="Logo" width={180} height={46} style={{ maxWidth: "180px", height: "auto" }} />
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					<p>
						Desenvolvido com{" "}
						<span className="heart-pulse">❤️</span> por:{" "}
						<a href="http://agenciawebroad.com.br/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "5px", textDecoration: "none" }}>
							<Image src={LogoWImg} alt="Logo" width={80} height={30} />
						</a>
					</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
