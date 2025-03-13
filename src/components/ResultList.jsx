import PropTypes from "prop-types";

export default function ResultList({ tabResponse, score, star }) {
  return (
    <div className="container bo">
      <div className="card list">
        <div className="card-header d-flex align-items-center g-1">
          <h3>score : {score} / </h3>10{" "}
          {score > 5 ? (
            <h3 className="mx-2">you win</h3>
          ) : (
            <h3 className="mx-2 ">you lost</h3>
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
          <button onClick={() => star()} className="btn btn-outline-info ">
            restard
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