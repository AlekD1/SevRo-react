import StatisticsBlock from "../../components/StatisticsBlock/StatisticsBlock";
import "./statistics.scss";

function StatisticsSlice() {
	return (
		<div className="Statistics-slice">
			<div className="container Statistics-slice-container">
				<StatisticsBlock />
				<StatisticsBlock />
				<StatisticsBlock />
			</div>
		</div>
	);
}

export default StatisticsSlice;
