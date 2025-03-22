import QuestionCard from "../components/QuestionCard";
import { useState, useContext,useEffect } from "react";
import { DataContext } from "../context/context";
import { useNavigate } from "react-router";
import {useParams} from 'react-router'

export default function Questionnaire() {
  const {number: num} =useParams()
  const number = parseInt(num, 10)
  const [time,setTime]=useState(15)
  const { tabQuestions, setTabReponse, tabReponse } =
    useContext(DataContext);
  const navigate = useNavigate();

  const handleNext = (question, response) => {
    setTime(15)
    const newQuestion = { ...question, yours: response };
    setTabReponse([...tabReponse, newQuestion]);
    if (number === 10) {
     return navigate("/ScorePage");
    }
      navigate(`/Questionnaire/${number + 1}`);

    }
  

  useEffect(()=>{
    let t
    if(time > 0){
      t= setTimeout(()=>{
        setTime(time -1)
      },1000);
    }else if(time === 0){
      handleNext(tabQuestions[number],"")
    }
    return ()=>{
      clearTimeout(t)
    }
  },[time])

  return (
    <QuestionCard
      next={handleNext}
      question={tabQuestions[number-1]}
      totalQuestion={tabQuestions.length}
      number={number}
      time = {time}
    />
  );
}

