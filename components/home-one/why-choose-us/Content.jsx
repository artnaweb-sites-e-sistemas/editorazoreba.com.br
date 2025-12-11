import Image from "next/image";
import Star2Img from "./star2.png";

function Content() {
	return (
		<div className="aximo-default-content">
			<h2>
				<span className="aximo-title-animation">
					Por que escolher
					<span className="aximo-title-icon">
						<Image src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				nossa editora
			</h2>
			<p>
				Somos uma editora nova, mas com muita paixão e dedicação. Nosso foco é em produções infantis 
				de qualidade e no apoio genuíno a novos autores que têm histórias incríveis para contar.
			</p>
			<p>
				Acreditamos que cada história merece ser contada e cada autor merece uma oportunidade. 
				Por isso, oferecemos um processo editorial cuidadoso e acolhedor, desde o primeiro contato 
				até a publicação final.
			</p>
		</div>
	);
}

export default Content;
