import StatisticsBlock from "../../components/StatisticsBlock/StatisticsBlock";
import "./statistics.scss";

function StatisticsSlice() {
	return (
		<article className="Statistics-slice SliceMargin">
			<div className="container Statistics-slice-content">
				<StatisticsBlock name="направлений" value="7" />
				<StatisticsBlock name="отрядов" value="20+" />
				<StatisticsBlock name="бойцов" value="1000+" />
			</div>
		</article>
	);
}

export default StatisticsSlice;
