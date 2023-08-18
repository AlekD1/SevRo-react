import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function GalleryOpenPage() {
	const items = Array.from({ length: 100 }).map((_, index) => <img key={index} src={`https://picsum.photos/280/${Math.floor(Math.random() * (300 - 200 + 1) + 200)}`} style={{ width: "100%", borderRadius: "8px" }} />);
	return (
		<div className="PhotoPage">
			<div className="container">
				<ResponsiveMasonry columnsCountBreakPoints={{ 425: 2, 600: 3, 1024: 4 }}>
					<Masonry className="Masonry-grid">{items}</Masonry>
				</ResponsiveMasonry>
			</div>
		</div>
	);
}

export default GalleryOpenPage;
