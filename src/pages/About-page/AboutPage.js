import DirectionsSlice from "../../slices/Directions-slice/DirectionsSlice";
import TeamSlice from "../../slices/Team-slice/TeamSlice";
import "./aboutpage.scss"

function AboutPage() {
	return (
		<div className="AboutPage">
			<DirectionsSlice />
			<TeamSlice />
		</div>
	);
}

export default AboutPage;
