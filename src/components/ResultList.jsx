import PropTypes from "prop-types";
import he from "he"

export default function ResultList({ tabResponse, score, star }) {

  function escapeHtml(word) {
    return he.decode(word)

  }
  return (
    <div className="p-5 w-[60vw] mx-auto mt-12 bg-[linear-gradient(#5c2438,#85304e,#8c2549)] text-white rounded-xl">
      <div className="flex justify-between items-center">
        <h2>Scored : {score} / 10{" "}</h2>
        {score > 5 ? (
          <h2>You Won</h2>
        ) : (
          <h2>You Loose</h2>
        )}
      </div>
      <div className="mt-8">
        <table className="w-full border-collapse leading-5 border-r border-t border-gray-300">
          <thead>
            <tr>
              <th className="p-3 text-left border-b border-r border-l border-gray-300">Question</th>
              <th className="p-3 text-left border-b border-r border-gray-300">Correct answer</th>
              <th className="p-3 text-left border-b border-r border-gray-300">Your answer</th>
            </tr>
          </thead>
          <tbody>
            {tabResponse.map((item, index) => {
              return (
                <tr key={index + 1} className="hover:bg-gray-100 hover:text-black">
                  <td className="p-3 text-left border-b border-r border-l border-gray-300">{escapeHtml(item.question)}</td>
                  <td className="p-3 text-left border-b border-r border-gray-300">{item.correct_answer}</td>
                  <td className="p-3 text-left border-b border-r border-gray-300">{item.yours}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-center mt-5">
          <button onClick={() => star()} className="px-4 py-3 rounded-lg border-none text-white bg-[#5d162f] font-bold w-36 h-12 mx-2 cursor-pointer hover:bg-[#671a35]">
            Restart
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