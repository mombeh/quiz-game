import { PropTypes } from "prop-types";

export default function WelcomCart({ navig, isLoading }) {
  return (
    <div className="box">
      <div className="card-box">
        <div className="row">
          <h1>welcome in quiz game</h1>
        </div>
        <div className="row">
          <p>
            you have 10 seconds to answer the question asked with truth or
            false. <br /> after this time we automatically move on to the next question <br />
            NB: a question passed without an answer will not award you any
            points
          </p>
        </div>
        <div className="row">
          {isLoading ? (
            <button
              onClick={() => navig()}
              className="btn btn-outline-success bouton"
            >
              start game
            </button>
          ) : (
            <button
              onClick={() => navig()}
              className="btn btn-outline-success bouton disabled"
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