import DocumentSlice from "../../slices/Document-slice/DocumentSlice";
import NewsSlider from "../../slices/NewsSlider-slice/NewsSlider";

function FightersPage() {
	return (
		<div className="Fighterspage">
			<DocumentSlice />
			<NewsSlider />
		</div>
	);
}

export default FightersPage;
