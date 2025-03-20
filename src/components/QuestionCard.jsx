import { PropTypes } from "prop-types";

export default function QuestionCard({
  next,
  question,
  number,
  totalQuestion,
  time,
}) {
  function escapeHtml(word) {
    return word

  }

  return (
    <div className="box">
      <div className="row-time">
        <h3>
          Question{" "}
          <span>
            {number}/{totalQuestion}
          </span>
        </h3>
        <h3> Time given: {time} </h3>
      </div>
      <div className="rowm">
        <div className="col-6">
          <h4>
            Category : <span>{question?.category}</span>
          </h4>
        </div>
        <div className="col-6">
          <h4>
            Difficulty : <span> {question?.difficulty} </span>
          </h4>
        </div>
      </div>
      <div className="questions">
        <span className="question">{escapeHtml(question.question)}</span>
      </div>
      <div className="row-quest">
        <div className="col">
          <button
            onClick={() => next(question, "True")}
            className="btn"
          >
            {" "}
            True{" "}
          </button>
        </div>
        <div className="col1">
          <button
            onClick={() => next(question, "False")}
            className="btn-btn "
          >
            {" "}
            False
          </button>
        </div>
      </div>
    </div>
  );
}

QuestionCard.propTypes = {
  next: PropTypes.func.isRequired,
  question: PropTypes.object,
  number: PropTypes.number,
  totalQuestion: PropTypes.number,
  time: PropTypes.number,
};