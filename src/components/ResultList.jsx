import PropTypes from "prop-types";
import he from "he";

export default function ResultList({ tabResponse, score, star }) {
  function escapeHtml(word) {
    return he.decode(word);
  }

  const isWin = score > 5;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#0E7490] to-[#22D3EE] px-4">
      <div className="bg-white/10 backdrop-blur-md text-white w-full max-w-5xl p-8 rounded-2xl shadow-2xl">

        {/* Result Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold">
            Score: <span className="text-emerald-400">{score}</span> / 10
          </h2>

          <div
            className={`text-xl font-extrabold px-6 py-2 rounded-xl ${
              isWin
                ? "bg-emerald-500/20 text-emerald-300"
                : "bg-red-500/20 text-red-300"
            }`}
          >
            {isWin ? "🎉 You Won!" : "❌ You Lost"}
          </div>
        </div>

        {/* Table */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-white/10 text-left">
                <th className="p-4 font-semibold">Question</th>
                <th className="p-4 font-semibold">Correct Answer</th>
                <th className="p-4 font-semibold">Your Answer</th>
              </tr>
            </thead>

            <tbody>
              {tabResponse.map((item, index) => {
                const correct = item.correct_answer === item.yours;

                return (
                  <tr
                    key={index}
                    className={`border-b border-white/10 ${
                      correct ? "bg-emerald-500/5" : "bg-red-500/5"
                    }`}
                  >
                    <td className="p-4">
                      {escapeHtml(item.question)}
                    </td>

                    <td className="p-4 font-semibold text-emerald-300">
                      {item.correct_answer}
                    </td>

                    <td
                      className={`p-4 font-semibold ${
                        correct ? "text-emerald-300" : "text-red-300"
                      }`}
                    >
                      {item.yours || "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Restart Button */}
        <div className="text-center mt-10">
          <button
            onClick={star}
            className="px-8 py-4 rounded-xl font-bold text-lg bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition shadow-lg"
          >
           Play Again
          </button>
        </div>

      </div>
    </div>
  );
}

ResultList.propTypes = {
  tabResponse: PropTypes.array,
  score: PropTypes.number.isRequired,
  star: PropTypes.func,
};
