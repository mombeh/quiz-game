import PropTypes from "prop-types";
import he from "he"

export default function ResultList({ tabResponse, score, star }) {

  function escapeHtml(word) {
    return he.decode(word)

  }
  return (
    
    <div className="card-list">
      <div className="card-header ">
        <h2>Scored : {score} / 10{" "}</h2>
        {score > 5 ? (
          <h2 className="mx-2">You Won</h2>
        ) : (
          <h2 className="mx-2 ">You Loose</h2>
        )}
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">N_o</th> */}
              <th scope="col">Question</th>
              <th scope="col">Correct answer</th>
              <th scope="col">Your answer</th>
            </tr>
          </thead>
          <tbody>
            {tabResponse.map((item, index) => {
              return (
                <tr key={index + 1}>
                  {/* <th scope="row">{index + 1}</th> */}
                  <td> {escapeHtml(item.question)}</td>
                  <td>{item.correct_answer}</td>
                  <td> {item.yours} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="row-btn ">
          <button onClick={() => star()}>
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