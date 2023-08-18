import RsoBlock from "../../components/RsoBlock/RsoBlock";
import "./rso.scss";

function RsoSlice() {
	return (
		<div className="Rso-slice">
			<div className="container Rso-slice-container">
				<div className="Rso-slice__blocks">
					<RsoBlock />
					<RsoBlock />
					<RsoBlock />
				</div>
				<div className="Rso-slice__info">
					<div className="Rso-slice__info__header">о нас</div>
					<div className="Rso-slice__info__title"> Российские Студенческие Отряды</div>
					<div className="Rso-slice__info__description">Молодежная общероссийская общественная организация «Российские Студенческие Отряды» (РСО) – крупнейшая молодежная организация страны, которая обеспечивает временной трудовой занятостью более 150 тысяч молодых людей из 81 субъекта РФ, а также занимается гражданским и патриотическим воспитанием, развивает творческий и спортивный потенциал молодежи.</div>
					<div className="Rso-slice__info__button">
						<button className="Rso-slice__info__button__stylebtn">
							Подробнее
							<img src="./img/arrow-right.png"></img>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RsoSlice;
