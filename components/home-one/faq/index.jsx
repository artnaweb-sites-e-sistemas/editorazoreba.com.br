import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import FaqAccordion from "./FaqAccordion";

function Faq() {
	return (
		<div id="faq" className="section aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Perguntas
						<span className="aximo-title-animation">
							Frequentes
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>

				<FaqAccordion />
			</div>
		</div>
	);
}

export default Faq;

