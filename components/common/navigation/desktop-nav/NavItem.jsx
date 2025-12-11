/* eslint-disable react/prop-types */
"use client";
import Link from "next/link";

function NavItem({ dropdown, title, children, url = "" }) {
	const handleAnchorClick = (e, href) => {
		if (href.startsWith("#")) {
			e.preventDefault();
			const element = document.querySelector(href);
			if (element) {
				const headerOffset = 80; // Altura do header fixo
				const elementPosition = element.getBoundingClientRect().top;
				const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
			}
		}
	};

	const urlFormated = url !== "/" ? `/${url}` : "/";
	const isAnchorLink = url.startsWith("#");

	return dropdown ? (
		<li className="nav-item nav-item-has-children">
			<a href="#" className="nav-link-item drop-trigger">
				{title} <i className="fas fa-angle-down"></i>
			</a>
			{children}
		</li>
	) : (
		<li className="nav-item">
			{isAnchorLink ? (
				<a
					href={url}
					className="nav-link-item"
					onClick={(e) => handleAnchorClick(e, url)}
				>
					{children || title}
				</a>
			) : (
				<Link href={urlFormated} className="nav-link-item">
					{children || title}
				</Link>
			)}
		</li>
	);
}

export default NavItem;
