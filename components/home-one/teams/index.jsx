import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import TeamCard from "./TeamCard";

function Teams({ teams }) {
	return (
		<div id="equipe" className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Nossa
						<span className="aximo-title-animation">
							equipe apaixonada
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					{teams.map((team, index) => (
						<FadeInStagger key={team.id} index={index} className="col-xl-3 col-md-6">
							<TeamCard team={team} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Teams;
