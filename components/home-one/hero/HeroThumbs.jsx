import FadeInRight from "@/components/animation/FadeInRight";
import Image from "next/image";
import HeroThumbImg from "../../../public/images/v1/hero-thumb-unsplash.jpg";

function HeroThumbs() {
	return (
		<FadeInRight className="aximo-hero-thumb">
			<Image 
				src={HeroThumbImg}
				alt="Livros infantis coloridos e ilustrados" 
				sizes="100vw" 
				priority
				style={{
					objectFit: "cover",
					borderRadius: "12px",
				}}
			/>
		</FadeInRight>
	);
}

export default HeroThumbs;
