import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Link from "next/link";
import ShapeImg from "../../../public/images/v1/shape1.png";
import StarImg from "../../../public/images/v1/star.png";
function HeroContent() {
	return (
		<FadeInStaggerTwo className="aximo-hero-content">
			<FadeInStaggerTwoChildren>
				<h1>
					<span className="aximo-title-animation">
						Uma editora
						<Image src={StarImg} alt="StarImg" />
					</span>{" "}
					dedicada à literatura infantil
				</h1>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<p>
					{`Somos uma editora recém-fundada, especializada em produções infantis e no apoio a novos autores. 
								Nossa missão é dar vida a histórias encantadoras que inspirem e formem pequenos leitores, 
								oferecendo uma plataforma acolhedora para talentos literários emergentes.`}
				</p>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<Link className="aximo-call-btn" href="/contact-us">
					Entre em contato <i className="icon-call"></i>
				</Link>
				<div className="aximo-hero-shape">
					<Image src={ShapeImg} alt="ShapeImg" />
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroContent;
