"use client";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import CountUp from "react-countup";

function Counter() {
	return (
		<div id="estatisticas" className="aximo-counter-section dark-bg">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-counter-title">
					<p>Nossos números falam por si só</p>
				</div>
				<FadeInStaggerTwo className="aximo-counter-wrap3">
					<FadeInStaggerTwoChildren className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={50} duration={3} redraw={true} enableScrollSpy />
							</span>
							+
						</h2>
						<p>Livros em produção</p>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={25} duration={3} redraw={true} enableScrollSpy />
							</span>
							+
						</h2>
						<p>Autores apoiados</p>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={100} duration={3} redraw={true} enableScrollSpy />
							</span>
							+
						</h2>
						<p>Ilustrações criadas</p>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={98} duration={3} redraw={true} enableScrollSpy />
							</span>
							%
						</h2>
						<p>Satisfação dos autores</p>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default Counter;



