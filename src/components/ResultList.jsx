import PropTypes from "prop-types";

export default function ResultList({ tabResponse, score, star }) {
  return (
    <div className="card-list">
      <div className="card-header ">
        <h2>Scored : {score} / 10{" "}</h2>
        {score > 5 ? (
          <h2 className="mx-2">You Win</h2>
        ) : (
          <h2 className="mx-2 ">You Loose</h2>
        )}
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">N_o</th>
              <th scope="col">quetion</th>
              <th scope="col">correct_answer</th>
              <th scope="col">your answer</th>
            </tr>
          </thead>
          <tbody>
            {tabResponse.map((item, index) => {
              return (
                <tr key={index + 1}>
                  <th scope="row">{index + 1}</th>
                  <td> {item.question}</td>
                  <td>{item.correct_answer}</td>
                  <td> {item.yours} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={() => star()} className="row-btn ">
          Restard
        </button>
      </div>
    </div>
  );
}

ResultList.propTypes = {
  tabResponse: PropTypes.array,
  score: PropTypes.number.isRequired,
  star: PropTypes.func,
};