import DocumentSlice from "../../slices/Document-slice/DocumentSlice";
import NewsSlider from "../../slices/NewsSlider-slice/NewsSlider";
import "./fighterspage.scss"

function FightersPage() {
	return (
		<div className="Fighterspage">
			<DocumentSlice />
			<NewsSlider />
		</div>
	);
}

export default FightersPage;
