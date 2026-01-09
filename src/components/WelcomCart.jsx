import { PropTypes } from "prop-types";

export default function WelcomCart({ navig, isLoading }) {
  return (
    <div className="bg-[linear-gradient(#5c2438,#85304e,#8c2549)] text-white w-[650px] mx-auto mt-50 p-8 font-sans rounded-lg flex flex-col justify-between">
      <div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome to my quiz app</h1>
        </div>
        <div className="mt-10">
          <ol className="p-8 mt-10 list-decimal list-inside leading-7">
            <li>You will be given 10 questions to answer</li>
            <li>Each question is to be answered in 15 second and if after 15 seconds you
              <br />haven't answered the question, it authomatically move to another question</li>
            <li>Answer (True or False)</li>
            <li><strong>NB:</strong> A question pass without being answered awards no point</li>
          </ol>
        </div>
        <div className="text-center mt-12">
          <button
            disabled={isLoading}
            onClick={() => navig()}
            className={`px-4 py-3 rounded-lg border-none text-white font-bold text-lg w-36 cursor-pointer ${isLoading ? "bg-gray-500" : "bg-[#5f1b32] hover:bg-[#671a35]"}`}
          >
            Start game
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