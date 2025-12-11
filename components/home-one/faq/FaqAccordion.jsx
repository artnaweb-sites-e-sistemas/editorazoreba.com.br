import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";

function FaqAccordion() {
	return (
		<FadeInStaggerTwo className="row">
			<FadeInStaggerTwoChildren className="col-lg-6">
				<div className="accordion aximo-accordion-wrap2" id="aximo-accordion-col1">
					<div className="accordion-item ">
						<h3 className="accordion-header">
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
							>
								Como posso enviar meu manuscrito para avaliação?
							</button>
						</h3>
						<div
							id="collapseOne"
							className="accordion-collapse collapse show"
							data-bs-parent="#aximo-accordion-col1"
						>
							<div className="accordion-body">
								Você pode enviar seu manuscrito através do nosso formulário de contato ou pelo e-mail 
								especificado na seção de contato. Nossa equipe avalia todas as propostas com cuidado 
								e retorna em até 30 dias úteis.
							</div>
						</div>
					</div>
					<div className="accordion-item ">
						<h3 className="accordion-header">
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
							>
								Vocês publicam apenas livros infantis?
							</button>
						</h3>
						<div
							id="collapseTwo"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion-col1"
						>
							<div className="accordion-body">
								Sim, somos especializados exclusivamente em literatura infantil. Trabalhamos com 
								histórias para crianças de todas as idades, desde primeiros leitores até pré-adolescentes.
							</div>
						</div>
					</div>
					<div className="accordion-item ">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
							>
								Qual o processo editorial após a aprovação?
							</button>
						</h3>
						<div
							id="collapseThree"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion-col1"
						>
							<div className="accordion-body">
								Após a aprovação, seguimos com revisão editorial, criação de ilustrações, design gráfico, 
								revisão final e finalmente a publicação. Todo o processo é acompanhado de perto pelo autor 
								em cada etapa.
							</div>
						</div>
					</div>
				</div>
			</FadeInStaggerTwoChildren>

			<FadeInStaggerTwoChildren className="col-lg-6">
				<div className="accordion aximo-accordion-wrap2" id="aximo-accordion-col2">
					<div className="accordion-item ">
						<h3 className="accordion-header">
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFour"
							>
								Vocês oferecem suporte para autores iniciantes?
							</button>
						</h3>
						<div
							id="collapseFour"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion-col2"
						>
							<div className="accordion-body">
								Sim! Apoiamos novos autores em todas as etapas. Oferecemos orientação sobre o processo 
								editorial, revisão de texto, sugestões de melhoria e acompanhamento durante todo o 
								processo de publicação.
							</div>
						</div>
					</div>
					<div className="accordion-item ">
						<h3 className="accordion-header">
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFive"
							>
								Quanto tempo leva para publicar um livro?
							</button>
						</h3>
						<div
							id="collapseFive"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion-col2"
						>
							<div className="accordion-body">
								O tempo pode variar dependendo da complexidade da obra e das ilustrações. Em média, 
								o processo completo leva de 4 a 6 meses, desde a aprovação até a publicação final.
							</div>
						</div>
					</div>
					<div className="accordion-item ">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseSix"
							>
								Como funciona a distribuição dos livros?
							</button>
						</h3>
						<div
							id="collapseSix"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion-col2"
						>
							<div className="accordion-body">
								Trabalhamos com distribuidores parceiros para garantir que os livros cheguem às principais 
								livrarias físicas e online do país. Também disponibilizamos os livros em nossa plataforma 
								digital.
							</div>
						</div>
					</div>
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default FaqAccordion;



