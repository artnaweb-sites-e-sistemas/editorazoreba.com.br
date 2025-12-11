"use client";
import Link from "next/link";
function HeaderButton() {
	return (
		<>
			<style dangerouslySetInnerHTML={{
				__html: `
					.aximo-header-btn-custom {
						width: 220px !important;
						min-width: 220px !important;
						padding-left: 40px !important;
						padding-right: 40px !important;
						white-space: nowrap !important;
						text-align: center !important;
					}
				`
			}} />
			<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
				<Link className="aximo-default-btn pill aximo-header-btn aximo-header-btn-custom" href="/contact-us">
					Entre em contato
				</Link>
			</div>
		</>
	);
}

export default HeaderButton;
