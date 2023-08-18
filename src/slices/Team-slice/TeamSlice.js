import PeopleCard from "../../components/PeopleCard/PeopleCard";
import "./TeamSlice.scss";

function TeamSlice() {
	return (
		<div className="Team-slice">
			<div className="container Team-slice-container">
				<div className="Team-slice__title"> Команда СевРО</div>
				<div className="Team-slice__PeopleCards">
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
				</div>
			</div>
		</div>
	);
}

export default TeamSlice;
