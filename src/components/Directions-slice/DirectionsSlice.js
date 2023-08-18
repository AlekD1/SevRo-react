import '../Directions-slice/directions.scss';
import DirectionCard from '../DirectionCard/DirectionCard';
import '../DirectionCard/DirectionCard.scss';
import { useState } from "react";
import { Link } from 'react-router-dom';

function DirectionsSlice() {

    const items = [0, 1, 2, 3, 4, 5, 6];
    const [activeCard, setActiveCard] = useState(items[0]);
    return (

        <div className="Directions-slice">
            <div className="container Directions-slice-container">
                <div className="Directions-slice__info">
                    <div className="Directions-slice__info__header">направления</div>
                    <div className="Directions-slice__info__title"> Студенческие Педагогические Отряды</div>
                    <div className="Directions-slice__info__description">Молодежная общероссийская общественная организация «Российские Студенческие Отряды» (РСО) – крупнейшая молодежная организация страны, которая обеспечивает временной трудовой занятостью более 150 тысяч молодых людей из 81 субъекта РФ, а также занимается гражданским.</div>
                    <div className="Directions-slice__info__button">
                        <Link to={"/SquadPage"}>
                            <button className="Directions-slice__info__button__stylebtn">
                                Перейти
                                <img src="./img/arrow-right.png" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="Directions-slice__icons" >

                    {items.map((value) => {
                        return (
                            <div onClick={() => setActiveCard(value)}>
                                <DirectionCard key={value} type={activeCard === value ? "DirectionCard active" : "DirectionCard"} />

                            </div>
                        );
                    })}

                </div>
            </div>
        </div >
    );
}

export default DirectionsSlice;
