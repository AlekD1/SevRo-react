import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
	return (
		<footer className="Footer-slice">
			<div className="container">
				<div className="Footer-slice__content">
					<div className="Footer-slice__content_nav">
						<div className="Footer-slice__content__links">
							навигация
							<div className="Footer-slice__content__links__nav">
								<ul>
									<li>
										<Link to="/about">о нас</Link>
									</li>
									<li>
										<Link to="/news">новости</Link>
									</li>
									<li>
										<Link to="/gallery">галерея</Link>
									</li>
									<li>
										<Link to="/fighters">бойцам</Link>
									</li>

									<li>
										<Link to="/cooperation">сотрудничество</Link>
									</li>
									<li>
										<Link to="/question">Q&A</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="Footer-slice__content__contact">
							контакты
							<div className="Footer-slice__content__contact_nav">
								<ul>
									<li>
										<a href="">вконтакте</a>
									</li>
									<li>
										<a href="">телеграм</a>
									</li>
									<li>
										<a href="">+79780002255</a>
									</li>
									<li>
										<a href="">sevro@mai.ru</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="Footer-slice__content__info">
						<p className="Footer-slice__content__info__name">Найди работу в студенческих отрядах</p>

						<button className="Footer-slice__content__info__button">
							<p>Вступить</p>
							<img src="./img/arrow-right-dark.png"></img>
						</button>
					</div>
				</div>
				<div className="Footer-slice__copyright">
					<p className="Footer-slice__copyright__text">
						© 2023. Все права защищены. Создано с <a href="https://vk.com/sds.codezilla">❤️</a> от Севро
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
