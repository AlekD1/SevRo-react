import '../DirectionCard/DirectionCard.scss';

function DirectionCard(props) {


    return (

        <div className={props.type} >
            <img className="DirectionCard__style" src="img/directions2.jpg"></img>
            <div className="DirectionCard__overlay">
                <img className="DirectionCard__overlay__style" src="img/ico11-spo.svg"></img>
            </div>
        </div>
    );
}

export default DirectionCard;