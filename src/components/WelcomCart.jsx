import { PropTypes } from "prop-types";

export default function WelcomCart({ navig, isLoading }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#0E7490] to-[#22D3EE] px-4">
      <div className="bg-[#020617]/80 backdrop-blur-md text-white w-full max-w-xl p-8 rounded-3xl shadow-2xl flex flex-col gap-8">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-wide">
            Quiz Challenge
          </h1>
          <p className="text-sm mt-2 text-white/80">
            Think fast. Choose wisely.
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-white/10 rounded-2xl p-6">
          <ul className="space-y-4 text-sm leading-relaxed text-white/90">
            <li>
             You will answer <strong>10 questions</strong>
            </li>

            <li>
               Each question has <strong>15 seconds</strong><br />
              Unanswered questions are skipped automatically
            </li>

            <li>
               Questions may be <strong>True / False</strong> or
              <strong> Multiple Choice (A–D)</strong>
            </li>

            <li>
             Select the option you think is correct
            </li>

            <li className="text-yellow-300">
               <strong>NB:</strong> Skipped questions give no points
            </li>
          </ul>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            disabled={isLoading}
            onClick={navig}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200
              ${
                isLoading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-emerald-500 hover:bg-emerald-600 active:scale-95 shadow-lg"
              }`}
          >
            {isLoading ? "Loading..." : " Start Quiz"}
          </button>
        </div>

      </div>
    </div>
  );
}

WelcomCart.propTypes = {
  navig: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
