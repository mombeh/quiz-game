import { PropTypes } from "prop-types";
import he from "he";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#0E7490] to-[#22D3EE] px-4">
      <div className="bg-white/10 backdrop-blur-md text-white w-full max-w-2xl p-8 rounded-2xl shadow-2xl flex flex-col">

        {/* Top Bar */}
        <div className="flex justify-between items-center text-sm text-white/90">
          <h3 className="font-semibold">
            Question <span>{number}/{totalQuestion}</span>
          </h3>

          <div className="flex items-center gap-2">
            <span>⏱️</span>
            <span className="font-semibold">{time}s</span>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex justify-between text-xs mt-6 text-white/80">
          <p>
            Category: <span className="font-semibold">{question?.category}</span>
          </p>
          <p>
            Difficulty: <span className="capitalize font-semibold">{question?.difficulty}</span>
          </p>
        </div>

        {/* Question Card */}
        <div className="mt-10 bg-white/10 rounded-xl p-6 flex-1 overflow-y-auto">
          <p className="text-lg leading-relaxed text-center">
            {escapeHtml(question?.question)}
          </p>
        </div>

        {/* Answer Buttons */}
        <div className="flex gap-6 mt-10 justify-center">
          <button
            onClick={() => next(question, "True")}
            className="w-40 py-4 rounded-xl font-bold text-lg bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition shadow-lg"
          >
             True
          </button>

          <button
            onClick={() => next(question, "False")}
            className="w-40 py-4 rounded-xl font-bold text-lg bg-red-500 hover:bg-red-600 active:scale-95 transition shadow-lg"
          >
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
