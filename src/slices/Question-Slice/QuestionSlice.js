import QuestionBlock from "../../components/QuestionBlock/QuestionBlock";
import "./question.scss";

function QuestionSlice() {
	return (
		<div className="Question-slice SliceMargin" id="question">
			<div className="container">
				<h2 className="Question-slice__header">Вопросы и ответы</h2>
				<div className="Question-slice__blocks">
					<QuestionBlock />
					<QuestionBlock />
					<QuestionBlock />
					<QuestionBlock />
				</div>
			</div>
		</div>
	);
}

export default QuestionSlice;
