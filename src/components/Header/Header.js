import React, { useEffect } from 'react'
import { HashLink as Link, } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";
import "../Header/header.scss";
import { useState } from "react";
function Header() {

	const { pathname, hash, key } = useLocation();

	useEffect(() => {

		if (hash === '') {
			window.scrollTo(0, 0);
		}

		else {
			setTimeout(() => {
				const id = hash.replace('#', '');
				const element = document.getElementById(id);
				if (element) {
					element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
				}
			}, 0);
		}
	}, [pathname, hash, key]);
	const ActionMenu = (event) => {
		const logo = document.querySelectorAll(".Header-slice__burger__button");
		event.currentTarget.classList.toggle("active-menu");
	};

	const handleLink = () => {
		document.body.style.overflowY = "auto";
		document.body.style.overflowX = "hidden";
		//const modal = document.querySelector(".Header__burger-modal");
		//modal.style.display = "";
		isOpen = false;
		//const active = document.querySelector(".Header__burger__button");
		document.getElementById("menu-button").classList.toggle("active-menu");
		//active.classList.remove("active-menu");
	};

	const Scroll = () => {
		window.scrollTo(0, 0);
	};


	const [isOpen, setIsOpen] = useState(false);
	const [hideOrShow, setHideOrShow] = useState({});
	const handleMenu = () => {
		setIsOpen((prev) => !prev);
		if (isOpen) {
			setHideOrShow(() => {
				document.body.style.overflowY = "auto";
				document.body.style.overflowX = "hidden";
				return {};
			});
		} else {
			setHideOrShow(() => {
				document.body.style.overflow = "hidden";
				return { display: "block" };
			});
		}
	};
	return (
		<header className="Header">
			<div className="container Header__container">
				<div className="Header__headerLogo">
					<Link to="/" onClick={Scroll}>
						{" "}
						<img width={50} height={50} src="img/logo-rso.png" />
					</Link>
					<Link to="/" onClick={Scroll}>
						{" "}
						<img width={50} height={50} src="img/logo-sevro.png" />
					</Link>
				</div>

				<div className='Header__headerLinks' >
					<ul>
						<li>
							<Link to="/about" onClick={Scroll} >о нас</Link>
						</li>
						<li>
							<Link to="/news" onClick={Scroll}>новости</Link>
						</li>
						<li>
							<Link to="/gallery" onClick={Scroll} >галерея</Link>
						</li>
						<li>
							<Link to="/fighters" onClick={Scroll}>бойцам</Link>
						</li>
						<li>
							<Link to="/#form"  >сотрудничество</Link>
						</li>
						<li>
							<Link to="/#question" >Q&A</Link>
						</li>
					</ul>
				</div>
				<div className="Header__headerButton">
					<button className="Header__headerButton__button">
						Вступить
					</button>
				</div>
				<div className="Header__burger">
					{isOpen ? (
						<button
							onClick={handleMenu}
							className="Header__burger__menu"
						>
							<svg width="50" height="36" viewBox="0 0 50 36" fill="none" id="menu-button" className="Header__burger__button" onClick={ActionMenu} >
								<rect id="bar1" width="50" height="4" rx="2" fill="#F7F7F7" />
								<rect id="bar2" y="16" width="50" height="4" rx="2" fill="#F7F7F7" />
								<rect id="bar3" y="32" width="50" height="4" rx="2" fill="#F7F7F7" />
							</svg>
						</button>
					) : (
						<button onClick={handleMenu} className="Header__burger__menu" >
							<svg width="50" height="36" viewBox="0 0 50 36" fill="none" id="menu-button" className="Header__burger__button" onClick={ActionMenu} >
								<rect id="bar1" width="50" height="4" rx="2" fill="#F7F7F7" />
								<rect id="bar2" y="16" width="50" height="4" rx="2" fill="#F7F7F7" />
								<rect id="bar3" y="32" width="50" height="4" rx="2" fill="#F7F7F7" />
							</svg>
						</button>
					)}
					<div className="Header__burger-modal container" style={hideOrShow} >
						<div className="Header__burger-modal-items">
							<div className="Header__burger-modal__headerLogo">
								<Link to="/" onClick={handleLink}>
									<img width={50} height={50} src="img/logo-rso.png" ></img>
								</Link>
								<Link to="/" onClick={handleLink}>
									<img width={50} height={50} src="img/logo-sevro.png" ></img>
								</Link>
							</div>
							<div className="Header__burger-modal__headerLinks">
								<ul>
									<li>
										<Link to="/about" onClick={handleLink} >о нас</Link>
									</li>
									<li>
										<Link to="/news" onClick={handleLink}>новости</Link>
									</li>
									<li>
										<Link to="/gallery" onClick={handleLink}>галерея</Link>
									</li>
									<li>
										<Link to="/fighters" onClick={handleLink}>бойцам</Link>
									</li>
									<li>
										<Link to="/#form" onClick={handleLink}>сотрудничество</Link>
									</li>
									<li>
										<Link to="/#question" onClick={handleLink}>Q&A</Link>
									</li>
								</ul>
							</div>
							<div className="Header__burger-modal__headerButton">
								<button className="Header__burger-modal__headerButton__button">
									Вступить
								</button>
							</div>
							<div className="Header__burger-modal__header-icons">
								<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" className="Header__burger-modal__header-icons__tg" >
									<g clip-path="url(img/ico13-tg.svg)">
										<path d="M46.57 19.1701C45.85 18.5901 44.88 18.5801 44.7 18.5801C43.35 18.6001 41.78 19.1201 32.57 22.9501C29.52 24.2201 23.33 26.8801 14.18 30.8701C12.26 31.6401 11.35 32.4201 11.23 33.4101C11.01 35.2001 12.85 35.7801 14.64 36.3401L15.32 36.5601C16.67 37.0001 19.14 37.7401 20.51 37.7701C21.74 37.7701 23.09 37.3101 24.51 36.3401C29.38 33.0501 32.48 30.9801 34.43 29.6901C32.87 31.1801 31.05 32.8801 30.09 33.7701C29.31 34.4901 28.76 35.0101 28.64 35.1301C28.4 35.3801 28.16 35.6101 27.93 35.8401C26.91 36.8201 25.96 37.7401 26.07 39.0301C26.18 40.2601 27.3 41.1301 28.13 41.6801C29.41 42.5201 30.43 43.2201 31.46 43.9201C32.59 44.6901 33.71 45.4601 35.17 46.4101C35.53 46.6501 35.87 46.8901 36.2 47.1301C37.47 48.0301 38.77 48.9601 40.4 48.9601C40.53 48.9601 40.66 48.9501 40.8 48.9401C41.86 48.8401 43.25 48.0601 43.85 44.9001C44.86 39.5101 46.94 27.3101 47.43 22.1401C47.49 21.5601 47.41 20.9001 47.37 20.6301C47.33 20.4001 47.21 19.6901 46.57 19.1701ZM45.45 21.9401C44.97 26.9801 42.86 39.3301 41.89 44.5201C41.57 46.2501 41.03 46.9001 40.63 46.9401C39.55 47.0401 38.59 46.3601 37.37 45.4901C37.02 45.2401 36.65 44.9801 36.27 44.7301C34.82 43.7801 33.71 43.0201 32.59 42.2601C31.56 41.5601 30.53 40.8601 29.24 40.0101C28.16 39.3001 28.08 38.9201 28.07 38.8401C28.04 38.5101 28.75 37.8201 29.32 37.2701C29.57 37.0301 29.83 36.7801 30.09 36.5101C30.2 36.4001 30.72 35.9101 31.46 35.2301C38.52 28.6701 38.91 28.0901 39.04 27.5601C39.12 27.2101 39.12 26.5001 38.58 26.0301C38.26 25.7401 37.89 25.6701 37.59 25.6701C37.35 25.6701 37.16 25.7201 37.04 25.7401C36.73 25.8101 36.44 25.8801 23.4 34.6801C22.32 35.4201 21.37 35.8101 20.57 35.7701C19.77 35.7501 18.04 35.3401 15.96 34.6601L15.26 34.4401C14.53 34.2101 13.56 33.9101 13.27 33.6601C13.4 33.5201 13.79 33.1901 14.96 32.7301L14.99 32.7201C24.14 28.7301 30.32 26.0701 33.36 24.8101C41.47 21.4401 43.7 20.6101 44.76 20.5901C44.95 20.5601 45.23 20.6501 45.33 20.7301C45.36 20.7601 45.39 20.8001 45.42 20.9801C45.43 21.1501 45.48 21.6201 45.45 21.9401Z" fill="white" />
										<path d="M32 0.25C14.49 0.25 0.25 14.49 0.25 32C0.25 49.51 14.49 63.75 32 63.75C49.51 63.75 63.75 49.51 63.75 32C63.75 14.49 49.51 0.25 32 0.25ZM32 61.75C15.6 61.75 2.25 48.4 2.25 32C2.25 15.6 15.6 2.25 32 2.25C48.4 2.25 61.75 15.6 61.75 32C61.75 48.4 48.4 61.75 32 61.75Z" fill="white" fill-opacity="0.2" />
									</g>
									<defs>
										<clipPath id="clip0_208_1836">
											<rect width="64" height="64" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" className="Header__burger-modal__header-icons__vk" >
									<g clip-path="url(img/ico12-vk.svg)">
										<path d="M49.9761 43.1901C48.28 37.0161 43.6201 33.6004 41.6951 32.4149C48.4502 27.4968 48.5793 21.8392 48.5793 21.5928C48.5793 21.4343 48.5206 21.2876 48.4091 21.1761C48.2976 21.0646 48.1509 21 47.9924 21H42.3348C42.0766 21 41.8477 21.1702 41.7714 21.4167C39.9286 27.3794 36.1901 29.0345 34.6701 29.4688V21.5869C34.6701 21.2641 34.406 21 34.0832 21H28.5724C28.2496 21 27.9855 21.2641 27.9855 21.5869V35.813C26.2248 34.9503 21.8232 31.7811 21.3243 21.5634C21.3067 21.2524 21.0485 21.0059 20.7374 21.0059H14.5869C14.2641 21.0059 14 21.27 14 21.5928V23.8405C14 34.9209 23.0146 43.9355 34.0891 43.9355C34.4119 43.9355 34.676 43.6714 34.676 43.3486V36.2649C40.85 37.3917 42.5696 43.2488 42.6459 43.5012C42.7163 43.7535 42.9511 43.9296 43.2093 43.9296H49.4127C49.5946 43.9296 49.7707 43.8416 49.8763 43.7007C49.9937 43.554 50.0289 43.3662 49.9761 43.1901ZM43.626 42.7617C43.045 41.1889 40.5859 35.7778 34.1595 35.0031C33.9952 34.9796 33.825 35.0324 33.7017 35.1498C33.5785 35.2613 33.5022 35.4198 33.5022 35.59V42.7558C23.3432 42.4389 15.1738 34.0758 15.1738 23.8347V22.1738H20.1916C21.025 35.2907 28.1322 37.1628 28.4432 37.2391C28.6193 37.2802 28.8012 37.2391 28.9421 37.1276C29.083 37.0161 29.1651 36.8459 29.1651 36.664V22.1679H33.5022V30.1906C33.5022 30.3608 33.5726 30.5193 33.7017 30.6308C33.825 30.7423 33.9952 30.7951 34.1595 30.7775C34.406 30.7482 40.1692 29.9793 42.7691 22.1738H47.3468C47.1003 23.7525 45.9207 28.1952 40.2749 31.9748C40.0988 32.0921 40.0049 32.2917 40.0166 32.503C40.0284 32.7142 40.1516 32.8962 40.3394 32.9901C40.404 33.0194 46.4254 36.083 48.6262 42.7558H43.626V42.7617Z" fill="white" />
										<path d="M31.75 0C14.24 0 0 14.24 0 31.75C0 49.26 14.24 63.5 31.75 63.5C49.26 63.5 63.5 49.26 63.5 31.75C63.5 14.24 49.26 0 31.75 0ZM31.75 61.5C15.35 61.5 2 48.15 2 31.75C2 15.35 15.35 2 31.75 2C48.15 2 61.5 15.35 61.5 31.75C61.5 48.15 48.15 61.5 31.75 61.5Z" fill="white" fill-opacity="0.2" />
									</g>
									<defs>
										<clipPath id="clip0_208_1832">
											<rect width="64" height="64" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</div>
						</div>
					</div>
				</div>

			</div>
		</header>
	);
}

export default Header;
