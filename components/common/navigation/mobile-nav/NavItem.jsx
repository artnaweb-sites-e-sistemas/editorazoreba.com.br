/* eslint-disable react/prop-types */
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "./Dropdown";

const NavItem = ({ items, depthLevel, showMenu, setShowMenu }) => {
	const [dropdown, setDropdown] = useState(false);

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
			// Fechar o menu mobile após clicar
			setShowMenu(false);
		}
	};

	const closeDropdown = () => {
		dropdown && setDropdown(false);
		showMenu && setShowMenu(false);
	};

	const toggleDropdown = (e) => {
		e.stopPropagation();
		setDropdown((prev) => !prev);
	};

	const animationVariants = {
		initial: {
			rotate: 0,
		},
		animate: () => {
			if (dropdown) {
				return {
					rotate: -180,
					transition: {
						// delay: 0,
						duration: 0.25,
					},
				};
			}
		},
	};

	const isAnchorLink = items.url && items.url.startsWith("#");

	return items.submenu ? (
		<li className="nav-item nav-item-has-children" onClick={closeDropdown}>
			<button type="button" aria-expanded={dropdown ? "true" : "false"} onClick={(e) => toggleDropdown(e)}>
				{items.title}

				<motion.i
					variants={animationVariants}
					initial="initial"
					animate="animate"
					className="fas fa-angle-down"
				></motion.i>
			</button>
			{dropdown && <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />}
		</li>
	) : (
		<li className="nav-item" onClick={closeDropdown}>
			{isAnchorLink ? (
				<a href={items.url} onClick={(e) => handleAnchorClick(e, items.url)}>
					{items.title}
				</a>
			) : (
				<Link href={items.url}>{items.title}</Link>
			)}
		</li>
	);
};

export default NavItem;
