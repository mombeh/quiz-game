import QuestionCard from "../components/QuestionCard";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/context";
import { useNavigate } from "react-router";
import { useParams } from 'react-router'
import { getQuestion, getCategories } from "../services/api";
import { saveToStorage } from "../utils";

export default function Questionnaire() {
  const { categoryId } = useParams()
  const [time, setTime] = useState(15)
  const { tabQuestions, setQuestions, setTabReponse, tabReponse, } =
    useContext(DataContext);
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [categoryName, setCategoryName] = useState('');

  const handleNext = (question, response) => {
    setTime(15)
    const newQuestion = { ...question, yours: response };
    setTabReponse([...tabReponse, newQuestion]);
    if (currentQuestionIndex + 1 >= tabQuestions.length) {
      return navigate("/ScorePage");
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  useEffect(() => {
    let t
    if (time > 0) {
      t = setTimeout(() => {
        setTime(time - 1)
      }, 1000);
    } else if (time === 0) {
      handleNext(tabQuestions[currentQuestionIndex], "")
    }

    return () => {
      clearTimeout(t)
    }
  }, [time])

  useEffect(() => {
    if (tabQuestions?.length > 0) return;

    const fetchQuestions = async () => {
      const data = await getQuestion(categoryId);
      if (data) {
        setQuestions(data);
        saveToStorage("questions", data);
      } else {
        navigate("/");
      }
    };
    fetchQuestions();
  }, [categoryId]);

  return (
    <QuestionCard
      next={handleNext}
      question={tabQuestions[currentQuestionIndex]}
      totalQuestion={tabQuestions.length}
      number={currentQuestionIndex + 1}
      time={time}
    />
  );
}

