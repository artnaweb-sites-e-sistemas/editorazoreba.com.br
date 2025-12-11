import Image from "next/image";
import Shape1Img from "../../../public/images/v1/shape1.png";
import Star2Img from "../../../public/images/v1/star2.png";
function FooterContent() {
	return (
		<div className="aximo-default-content light position-relative">
			<h2 style={{ fontSize: "3rem" }}>
				<span className="aximo-title-animation">
					Vamos começar um
					<span className="aximo-title-icon">
						<Image src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				<br />
				projeto juntos
			</h2>
			<p>
				Trabalhamos de perto com nossos autores para entender seus objetivos, público-alvo e necessidades únicas. 
				Usamos nossa criatividade para transformar histórias em livros de qualidade que encantam e inspiram.
			</p>
			<div className="aximo-info-wrap">
				<div className="aximo-info">
					<ul>
						<li>Ligue para nós:</li>
						<li>
							<a href="tel:+5511999999999">+55 (11) 99999-9999</a>
						</li>
					</ul>
				</div>
				<div className="aximo-info">
					<ul>
						<li>Envie-nos um e-mail:</li>
						<li>
							<a href="mailto:contato@editorazoreba.com.br">contato@editorazoreba.com.br</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="aximo-social-icon social-large">
				<ul>
					<li>
						<a href="https://twitter.com/" target="_blank">
							<i className="icon-twitter"></i>
						</a>
					</li>
					<li>
						<a href="https://facebook.com/" target="_blank">
							<i className="icon-facebook"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/" target="_blank">
							<i className="icon-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/" target="_blank">
							<i className="icon-linkedin"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="aximo-hero-shape aximo-footer-shape">
				<Image src={Shape1Img} alt="Shape1Img" />
			</div>
		</div>
	);
}

export default FooterContent;
