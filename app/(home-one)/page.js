import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";
import Faq from "@/components/home-one/faq";
import Hero from "@/components/home-one/hero";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import WhyChooseUs from "@/components/home-one/why-choose-us";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Publicação de Livros Infantis",
		description:
			"Transformamos histórias infantis em livros de qualidade, com ilustrações cuidadosas e design pensado para crianças.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Apoio a Novos Autores",
		description:
			"Oferecemos suporte completo para autores iniciantes, desde a revisão do manuscrito até a publicação e distribuição da obra.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Ilustração e Design",
		description:
			"Criamos ilustrações encantadoras e design gráfico que dão vida às histórias, tornando cada livro uma experiência visual única.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Edição e Revisão",
		description:
			"Serviços profissionais de edição e revisão textual para garantir que cada obra alcance seu potencial máximo de qualidade.",
		icon: "icon-design-thinking",
	},
];
export default function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<WhyChooseUs />
			<AutoSlider />
			<Faq />
		</>
	);
}
