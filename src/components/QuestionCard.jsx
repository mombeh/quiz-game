import { PropTypes } from "prop-types";
import he from "he"

export default function QuestionCard({
  next,
  question,
  number,
  totalQuestion,
  time,
}) {
  function escapeHtml(word) {
    return word ? he.decode(word) : "";
  }
  
  return (
    <div className="bg-[linear-gradient(#5c2438,#85304e,#8c2549)] text-white w-[650px] mx-auto mt-[200px] p-8 font-sans rounded-lg flex flex-col justify-between">
      <div className="flex justify-between text-sm">
        <h3>
          Question{" "}
          <span>
            {number}/{totalQuestion}
          </span>
        </h3>
        <h3> Time given: {time} </h3>
      </div>
      <div className="text-sm mt-8 flex justify-between">
        <h4>
          Category : <span>{question?.category}</span>
        </h4>
        <h4>
          Difficulty : <span>{question?.difficulty}</span>
        </h4>
      </div>
      <div className="text-white mt-[60px] max-h-[50vh] p-5 flex-1 overflow-y-auto">
        <span className="block">{escapeHtml(question?.question)}</span>
      </div>
      <div className="flex gap-5 mt-5 justify-center p-4 relative">
        <button
          onClick={() => next(question, "True")}
          className="px-4 py-2 w-24 h-10 rounded bg-[#671a35] text-white border-none cursor-pointer mt-20 hover:bg-[#5f1b32]"
        >
          True
        </button>
        <button
          onClick={() => next(question, "False")}
          className="px-4 py-2 w-24 h-10 rounded bg-[#671a35] text-white border-none cursor-pointer mt-20 hover:bg-[#5f1b32]"
        >
          False
        </button>
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