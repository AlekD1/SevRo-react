import NewsSliderSlice from "../../slices/NewsSlider-slice/NewsSlider";
import ErrorBlock from "../../components/ErrorBlock/ErrorBlock";
import "./Error.scss";

function Error() {
	return (
		<div className="ErrorPage">
			<ErrorBlock />
			<NewsSliderSlice />
		</div>
	);
}

export default Error;
