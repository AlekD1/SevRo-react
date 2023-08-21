import "../RsoBlock/rsoblock.scss";

function RsoBlock(props) {
	return (
		<div className="RsoBlock__style">
			<img src={props.img}></img>
			<p>{props.text}</p>
		</div>
	);
}

export default RsoBlock;
