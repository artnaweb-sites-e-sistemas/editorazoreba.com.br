import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import AboutCounter from "./AboutCounter";
import Video from "./Video";

function About() {
	return (
		<div id="sobre" className="section aximo-section-padding">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title">
					<div className="row">
						<div className="col-lg-7">
							<h2>
								<span className="aximo-title-animation">
									Somos uma editora
									<span className="aximo-title-icon">
										<Image src={Star2Img} alt="Star2Img" />
									</span>
								</span>{" "}
								recém-fundada com grandes sonhos
							</h2>
						</div>
						<div className="col-lg-4 offset-lg-1 d-flex align-items-center">
							<p>
								Focada em produções infantis e no apoio a novos autores, nossa editora nasceu da paixão por 
								transformar histórias em livros que encantam crianças e famílias. Estamos iniciando nossas 
								atividades com entusiasmo e dedicação.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<Video />
					</div>
					<div className="col-lg-4">
						<AboutCounter />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
