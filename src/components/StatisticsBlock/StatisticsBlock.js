import "../StatisticsBlock/statisticsblock.scss";

function StatisticsBlock(props) {
	return (
		<div className="StatisticsBlock">
			<p className="StatisticsBlock__title">{props.name}</p>
			<p className="StatisticsBlock__value">{props.value}</p>
		</div>
	);
}

export default StatisticsBlock;
