import ResultList from "../components/ResultList";
import { DataContext } from "../context/context";
import { useContext, useMemo } from "react";
import { useNavigate } from 'react-router'
import { removeFromStorage } from "../utils";

export default function ScorePage() {
  const { tabReponse, setTabReponse } = useContext(DataContext);

  const score = useMemo(() => tabReponse.filter(item => item.correct_answer === item.yours).length
    , [tabReponse])


  const navigate = useNavigate()

  const handleStar = () => {
    setTabReponse([])
    navigate("/");
    removeFromStorage("questions");
  }

  return (
    <>
      <ResultList
        tabResponse={tabReponse}
        score={score}
        star={handleStar} />
    </>
  );
}