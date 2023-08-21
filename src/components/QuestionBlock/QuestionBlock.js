import "./questionblock.scss";

function QuestionBlock() {
	return (
		<details className="QuestionBlock">
			<summary className="QuestionBlock__title">
				<span>Вступить в отряд можно в любое время?</span>
				<div className="QuestionBlock__title__circle">
					<img src="./img/arrow-bottom.png"></img>
				</div>
			</summary>
			<p className="QuestionBlock__text">Стать бойцом студенческого отряда можно в возрасте 18 лет. А если ты еще не достиг совершеннолетия, то ты можешь стать бойцом трудового отряда подростков.</p>
		</details>
	);
}

export default QuestionBlock;
