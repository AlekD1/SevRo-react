import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

function NewsCard() {
	return (

		<div className="News-card">
			<Link to="/news/open">
				<div className="News-card__photo">
					<img src="./img/new__photo.png"></img>
				</div>
				<div className="News-card__text">
					<div className="News-card__title">8 лет СевРо</div>
					<div className="News-card__description">
						Студенческие педагогические отряды (СПО) – ежегодно
						организовывают каникулярный отдых детей организовывают
						каникулярный отдых детей каникулярный отдых детей
						Студенческие педагогические отряды (СПО) – ежегодно
						организовывают каникулярный отдых детей организовывают
						каникулярный отдых детей каникулярный отдых детей
					</div>
				</div>
			</Link>
		</div>

	);
}

export default NewsCard;
