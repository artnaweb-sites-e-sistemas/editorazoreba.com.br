"use client";
import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="aximo-counter-wrap">
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={1} duration={3} redraw={true} enableScrollSpy />
					</span>
				</h2>
				<p>Livro publicado</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={5} duration={3} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Autores apoiados</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={100} duration={3} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Ilustrações criadas</p>
			</div>
		</div>
	);
}

export default AboutCounter;
