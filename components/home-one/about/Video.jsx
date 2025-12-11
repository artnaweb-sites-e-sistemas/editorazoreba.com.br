"use client";
import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import VideoBg from "../../../public/images/v1/video-bg-new.jpg";

function Video() {
	return (
		<FadeInUp className="aximo-video-wrap">
			<Image src={VideoBg} alt="Crianças lendo livros" sizes="(max-width:768px) 100vw, 70vw" />
		</FadeInUp>
	);
}

export default Video;
