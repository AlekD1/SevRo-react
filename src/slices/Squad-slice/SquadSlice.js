import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SquadCard from "../../components/SquadCard/SquadCard";
import { useState } from "react";
import "./squadslice.scss";

function SquadSlice() {
	const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const [activeCard, setActiveCard] = useState(items[2]);

	return (
		<div className="Squad-slice">
			<div className="container">
				<div className="Squad-slice__content">
					<h2 className="Squad-slice__title">отряды</h2>
					<ResponsiveMasonry columnsCountBreakPoints={{ 2: 1, 426: 2, 880: 3, 1180: 4 }}>
						<Masonry gutter="20px" className="Masonry-grid">
							{items.map((id) => {
								return (
									<div onClick={() => setActiveCard(id)}>
										<SquadCard key={id} name={"Стальные львы"} description={"У нас крепкие Стальные нервы и большое Львиное сердце!"} type={activeCard === id ? "squad-card squad-card_active" : "squad-card"}></SquadCard>
									</div>
								);
							})}
						</Masonry>
					</ResponsiveMasonry>
				</div>
			</div>
		</div>
	);
}

export default SquadSlice;
