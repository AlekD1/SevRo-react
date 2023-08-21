import PromoSlice from "../../slices/Promo-Slice/PromoSlice";
import StatisticsSlice from "../../slices/Statistics-slice/StatisticsSlice";
import RsoSlice from "../../slices/Rso-slice/RsoSlice";
import VideoSlice from "../../slices/Video-slice/VideoSlice";
import QuestionSlice from "../../slices/Question-Slice/QuestionSlice";
import NewsSliderSlice from "../../slices/NewsSlider-slice/NewsSlider";
import FormSlice from "../../slices/Form-slice/FormSlice";

function HomePage() {
	return (
		<main className="HomePage">
			<PromoSlice />
			<StatisticsSlice />
			<RsoSlice />
			{/* <VideoSlice /> */}
			<QuestionSlice />
			<NewsSliderSlice />
			<FormSlice />
		</main>
	);
}

export default HomePage;
