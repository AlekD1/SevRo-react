import AlbumCard from "../../components/AlbumCard/AlbumCard";
import "./GallerySlice.scss";

function GallerySlice() {
	return (
		<div className="Gallery-slice">
			<div className="container Gallery-slice-container">
				<div className="Gallery-slice__title">галерея</div>
				<div className="Gallery-slice__albums">
					<AlbumCard />
					<AlbumCard />
					<AlbumCard />
					<AlbumCard />
					<AlbumCard />
					<AlbumCard />
					<AlbumCard />
					<AlbumCard />
					<AlbumCard />
					<AlbumCard />
					<AlbumCard />
				</div>
			</div>
		</div>
	);
}

export default GallerySlice;
