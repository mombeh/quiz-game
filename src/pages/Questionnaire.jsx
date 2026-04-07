import QuestionCard from "../components/QuestionCard";
import { useState, useContext, useEffect, useRef } from "react";
import { DataContext } from "../context/context";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { getQuestion, getCategories } from "../services/api";
import { saveToStorage } from "../utils";

export default function Questionnaire() {
  const { categoryId, difficulty } = useParams();
  const [time, setTime] = useState(15);
  const { tabQuestions, setQuestions, setTabReponse, tabReponse } =
    useContext(DataContext);
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [categoryName, setCategoryName] = useState("");

  const handleNext = (question, response) => {
    if (!question) return;

    setTime(15);
    const newQuestion = { ...question, yours: response };
    setTabReponse((prev) => [...prev, newQuestion]);

    if (currentQuestionIndex + 1 >= tabQuestions.length) {
      navigate("/ScorePage");
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const currentQuestion = tabQuestions[currentQuestionIndex];
    if (!currentQuestion) return;

    let t;
    if (time > 0) {
      t = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      handleNext(currentQuestion, "");
    }

    return () => clearTimeout(t);
  }, [time, tabQuestions, currentQuestionIndex]);

const fetchedRef = useRef(false);

useEffect(() => {
  if (fetchedRef.current) return;
  fetchedRef.current = true;

  setQuestions([]);
  setTabReponse([]);
  setCurrentQuestionIndex(0);
  setTime(15)

    const fetchQuestions = async () => {
      const data = await getQuestion(Number(categoryId), difficulty);

      if (!data) {
        console.warn("Questions not available yet (rate limited)");
        return;
      }

      if (data.length === 0) {
        alert("No questions available for this category and difficulty.");
        return;
      }

      setQuestions(data);
      saveToStorage("questions", data);
    };

    fetchQuestions();
  }, [categoryId, difficulty]);
  
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
