"use client";
import Image from "next/image";

function ProjectCard({ project: { title, description, img }, onProjectClick }) {
	return (
		<div className="swiper-slide">
			<div className="aximo-project-thumb" style={{ aspectRatio: "3/4", overflow: "hidden" }}>
				<Image
					src={img}
					alt={title}
					sizes="100vw"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
				<div className="aximo-project-wrap">
					<div className="aximo-project-data">
						<button
							onClick={onProjectClick}
							style={{
								background: "none",
								border: "none",
								padding: 0,
								cursor: "pointer",
								textAlign: "left",
								width: "100%",
							}}
						>
							<h3>{title}</h3>
						</button>
						<p>{description}</p>
					</div>
					<button
						className="aximo-project-icon"
						onClick={onProjectClick}
						style={{
							background: "none",
							border: "none",
							cursor: "pointer",
							padding: 0,
						}}
					>
						<svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
								stroke="#FDFDE1"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
