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
      <div className="bg-[#020617]/80 backdrop-blur-md text-white w-full max-w-xl p-8 rounded-3xl shadow-2xl flex flex-col">

        {/* Top Bar */}
        <div className="flex justify-between items-center text-sm text-white/80">
          <h3 className="font-semibold">
            Question {number}/{totalQuestion}
          </h3>
          <span className="flex items-center gap-1">
            ⏱️ <strong>{time}s</strong>
          </span>
        </div>

        {/* Meta Info */}
        <div className="flex justify-between text-xs mt-4 text-white/70">
          <p>
            Category: <span className="font-semibold">{question?.category}</span>
          </p>
          <p>
            Difficulty:{" "}
            <span className="capitalize font-semibold">
              {question?.difficulty}
            </span>
          </p>
        </div>

        {/* Question */}
        <div className="mt-8 bg-white/10 rounded-2xl p-6 text-center text-lg font-semibold">
          {escapeHtml(question?.question)}
        </div>

        {/* Answers */}
        <div className="flex flex-col gap-4 mt-8">
          {question?.type === "boolean" ? (
            <>
              <button
                onClick={() => next(question, "True")}
                className="w-full flex items-center gap-4 px-6 py-4 rounded-full
                  border border-emerald-400/60
                  shadow-[0_0_15px_rgba(34,197,94,0.4)]
                  hover:bg-emerald-500/20 transition active:scale-95"
              >
                <span className="w-8 h-8 rounded-full bg-emerald-400 text-black font-bold flex items-center justify-center">
                  A
                </span>
                True
              </button>

              <button
                onClick={() => next(question, "False")}
                className="w-full flex items-center gap-4 px-6 py-4 rounded-full
                  border border-red-400/60
                  shadow-[0_0_15px_rgba(239,68,68,0.4)]
                  hover:bg-red-500/20 transition active:scale-95"
              >
                <span className="w-8 h-8 rounded-full bg-red-400 text-black font-bold flex items-center justify-center">
                  B
                </span>
                False
              </button>
            </>
          ) : (
            <>
              {question?.incorrect_answers
                ?.concat(question?.correct_answer)
                .sort()
                .map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => next(question, answer)}
                    className="w-full flex items-center gap-4 px-6 py-4 rounded-full
                      border border-cyan-400/60
                      shadow-[0_0_15px_rgba(34,211,238,0.4)]
                      hover:bg-cyan-500/20 transition active:scale-95"
                  >
                    <span className="w-8 h-8 rounded-full bg-cyan-400 text-black font-bold flex items-center justify-center">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {escapeHtml(answer)}
                  </button>
                ))}
            </>
          )}
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
