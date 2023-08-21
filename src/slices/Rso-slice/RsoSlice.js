import RsoBlock from "../../components/RsoBlock/RsoBlock";
import "./rso.scss";

function RsoSlice() {
	return (
		<div className="Rso-slice SliceMargin">
			<div className="container Rso-slice-container">
				<div className="Rso-slice__blocks">
					<RsoBlock img="./img/ico-love.png" text="любовь" />
					<RsoBlock img="./img/ico-friend.png" text="друзья" />
					<RsoBlock img="./img/ico-job.png" text="работа" />
				</div>
				<div className="Rso-slice__info">
					<h2 className="Rso-slice__info__header">о нас</h2>
					<h3 className="Rso-slice__info__title"> Российские Студенческие Отряды</h3>
					<p className="Rso-slice__info__description">Молодежная общероссийская общественная организация «Российские Студенческие Отряды» (РСО) – крупнейшая молодежная организация страны, которая обеспечивает временной трудовой занятостью более 150 тысяч молодых людей из 81 субъекта РФ, а также занимается гражданским и патриотическим воспитанием, развивает творческий и спортивный потенциал молодежи.</p>
					<button className="Rso-slice__info__button">
						<p>Подробнее</p>
						<img src="./img/arrow-right.png"></img>
					</button>
				</div>
			</div>
		</div>
	);
}

export default RsoSlice;
