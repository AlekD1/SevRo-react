import "./promo.scss";

function PromoSlice() {
	return (
		<div className="Promo-slice SliceMargin">
			<div className="container Promo-slice__content">
				<h1 className="Promo-slice__info">Найди работу в студенческих отрядах</h1>
				<button className="Promo-slice__button">
					<p>Вступить</p>
					<img src="./img/arrow-right.png"></img>
				</button>
			</div>
		</div>
	);
}

export default PromoSlice;
