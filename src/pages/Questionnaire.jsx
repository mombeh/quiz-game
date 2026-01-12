import QuestionCard from "../components/QuestionCard";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/context";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { getQuestion, getCategories } from "../services/api";
import { saveToStorage } from "../utils";

export default function Questionnaire() {
  const { categoryId } = useParams();
  const [time, setTime] = useState(15);
  const { tabQuestions, setQuestions, setTabReponse, tabReponse } =
    useContext(DataContext);
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [categoryName, setCategoryName] = useState("");

  const handleNext = (question, response) => {
    if (!question) return; // 🛡 Prevent navigation if question missing

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
    // Only run timer if there’s a current question
    const currentQuestion = tabQuestions[currentQuestionIndex];
    if (!currentQuestion) return; // Prevent timer before questions load

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

  useEffect(() => {
    // Reset states before fetching
    setQuestions([]);
    setTabReponse([]);
    setCurrentQuestionIndex(0);
    setTime(15);

    const fetchQuestions = async () => {
      const data = await getQuestion(Number(categoryId));
      if (data && data.length > 0) {
        setQuestions(data);
        saveToStorage("questions", data);
      } else {
        // If API returns no questions, navigate back safely
        navigate("/");
      }
    };
    fetchQuestions();
  }, [categoryId]);

  if (!tabQuestions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading questions...
      </div>
    );
  }

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
