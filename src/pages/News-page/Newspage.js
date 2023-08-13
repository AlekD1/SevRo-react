
import Header from "../../components/Header/Header";
import NewsSlice from "../News-page/News-slice/NewsSlice";

function Newspage() {
	return (
		<div className="Newspage">
			<Header />
			<NewsSlice />
		</div>
	);
}

export default Newspage;