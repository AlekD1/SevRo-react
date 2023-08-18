import "./promo.scss";

function PromoSlice() {
	return (
		<div className="Promo-slice">
			<div className="container ">
				<div className="Promo-slice__info ">Найди работу в студенческих отрядах</div>
				<div className="Promo-slice__button">
					<button className="Promo-slice__button__stylebtn">
						Вступить
						<img src="./img/arrow-right.png"></img>
					</button>
				</div>
			</div>
		</div>
	);
}

export default PromoSlice;
