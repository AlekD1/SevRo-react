import QuestionBlock from "../../components/QuestionBlock/QuestionBlock";
import "./question.scss";

function QuestionSlice() {
	return (
		<div className="Question-slice" id="question">
			<div className="container">
				<div className="Question-slice__header">Вопросы и ответы</div>
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
