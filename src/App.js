import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home-page/Homepage";
import AboutPage from "./pages/About-page/AboutPage";
import NewsPage from "./pages/News-page/Newspage";
import GalleryPage from "./pages/Gallery-page/GalleryPage";
import FightersPage from "./pages/Fighters-page/FightersPage";
import SquadPage from "./pages/Squad-page/SquadPage";
import NewsOpenPage from "./pages/NewsOpen-page/NewsOpenPage";
import GalleryOpenPage from "./pages/GalleryOpen-page/GalleryOpenPage";
import SquadOpenPage from "./pages/SquadOpen-page/SquadOpenPage";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error-page/Error";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/news" element={<NewsPage />} />
					<Route path="/404" element={<Error />} />
					<Route path="/gallery" element={<GalleryPage />} />
					<Route path="/fighters" element={<FightersPage />} />
					<Route path="/squads" element={<SquadPage />} />
					<Route path="/news/open" element={<NewsOpenPage />} />
					<Route path="/gallery/open" element={<GalleryOpenPage />} />
					<Route path="/squads/open" element={<SquadOpenPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
