import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import Thumb1Img from "../../../public/images/v1/t_thumb1.png";
import Thumb2Img from "../../../public/images/v1/t_thumb2.png";
import Thumb3Img from "../../../public/images/v1/t_thumb3.png";
import Thumb4Img from "../../../public/images/v1/t_thumb4.png";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Experiência incrível!",
		description:
			"A editora foi fundamental para realizar meu sonho de publicar meu primeiro livro infantil. O processo foi muito bem acompanhado e o resultado final superou minhas expectativas. Recomendo de coração!",
		author: "Maria Silva",
		designation: "Autora",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Suporte excepcional para novos autores",
		description:
			"Como autor iniciante, encontrei na editora um parceiro que realmente se importa com o sucesso do projeto. A equipe foi paciente, profissional e ajudou em cada etapa do processo editorial.",
		author: "João Santos",
		designation: "Escritor",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Livros de qualidade",
		description:
		"Comprei alguns livros da editora para meus filhos e ficamos encantados! As ilustrações são lindas, as histórias são envolventes e o material é de ótima qualidade. Virei fã!",
		author: "Ana Costa",
		designation: "Mãe e Educadora",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Profissionalismo e carinho",
		description:
			"O que mais me impressionou foi o cuidado que a editora tem com cada detalhe. Desde a edição até o design final, tudo foi feito com muito profissionalismo e carinho. É uma editora que realmente valoriza a literatura infantil.",
		author: "Pedro Oliveira",
		designation: "Professor",
		img: Thumb4Img,
	},
];

function Testimonial() {
	return (
		<div id="depoimentos" className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						O que dizem
						<span className="aximo-title-animation">
							sobre nós
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial, index) => (
						<FadeInStagger index={index} className="col-lg-6" key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
