import { Link } from "react-router-dom";
import "./squadcard.scss";

function SquadCard(props) {

	const handleClick = event => {
		let card = document.querySelectorAll('squad-card_active');


		if (card) {
			event.currentTarget.classList.toggle('squad-card_active');
		}
	}
	return (
		<div className={props.type} onClick={handleClick}>
			<img src="./img/squad_SL.jpg" className="squad-card__img" />
			<div className="squad-card__name">Стальные Львы</div>
			<p className="squad-card__description">У нас крепкие Стальные нервы и большое Львиное сердце!</p>
			<button className="squad-card__button">Перейти</button>
		</div>
	);
}

export default SquadCard;
