import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import StarShapeHalfImg from "../../../public/images/v3/star-shape-half2.png";
import ContactForm from "./ContactForm";

function CallToAction() {
	return (
		<div id="contato" className="section dark-bg aximo-section-padding2 position-relative overflow-hidden">
			<div className="container">
				<FadeInStaggerTwo className="row">
					<FadeInStaggerTwoChildren className="col-lg-7">
						<div className="aximo-default-content familjen-grotesk light m-right-gap">
							<h2>Pronto para transformar sua história em livro?</h2>
							<p>
								Somos especializados em publicações infantis e no apoio a novos autores. 
								Oferecemos um processo editorial completo, desde a revisão até a publicação, 
								com qualidade profissional e dedicação em cada etapa.
							</p>
							<div className="aximo-contact-info">
								<h3>Entre em contato conosco:</h3>
								<ul>
									<li>
										<a href="tel:+5511999999999">
											<i className="icon-phone"></i>
											+55 (11) 99999-9999
										</a>
									</li>
									<li>
										<a href="mailto:contato@editorazoreba.com.br">
											<i className="icon-message"></i>
											contato@editorazoreba.com.br
										</a>
									</li>
									<li>
										<a>
											<i className="icon-map"></i>
											Brasil
										</a>
									</li>
								</ul>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-lg-5">
						<div className="aximo-form-wrap2">
							<h3>Envie sua mensagem</h3>
							<p>
								Preencha o formulário e nossa equipe entrará em contato para discutir seu projeto editorial.
							</p>
							<ContactForm />
						</div>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
			</div>
			<div className="aximo-star-shape-half2">
				<Image src={StarShapeHalfImg} alt="StarShapeHalfImg" sizes="100vw" />
			</div>
		</div>
	);
}

export default CallToAction;
