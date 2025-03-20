import { PropTypes } from "prop-types";

export default function WelcomCart({ navig, isLoading }) {
  return (
    <div className="box">
      <div className="card-box">
        <div className="row">
          <h1>Welcome in Quiz Game</h1>
        </div>
        <div className="row">
          <ol>
            <li>You will be given 10 questions to answer</li>
            <li>Each question is to be answered in 15 second and if after 15 seconds you 
              <br />haven't answered the question, it authomatically move to another question</li>
            <li>Answer (True or False)</li>
            <li><strong>NB:</strong> A question pass without being answered awards no point</li>
          </ol>
        </div>
        <div className="row">
          {isLoading ? (
            <button
              onClick={() => navig()}
              className="btn-bouton"
            >
              start game
            </button>
          ) : (
            <button
              onClick={() => navig()}
              className="btn-disabled"
            >
              start game
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

WelcomCart.propTypes = {
  navig: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};