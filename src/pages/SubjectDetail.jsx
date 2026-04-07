import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getCategories } from "../services/api";

export default function SubjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      if (categories) {
        const selectedCategory = categories.find(
          (cat) => cat.id === parseInt(id)
        );
        setCategory(selectedCategory);
      }
      setIsLoading(false);
    };
    fetchCategories();
  }, [id]);

  const handleAnswerQuestions = () => {
    navigate(`/difficulty/${id}`);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!category) {
    return (
      <div className="flex justify-center items-center h-screen">
        Category not found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#0E7490] to-[#22D3EE] px-4">
      <div
        className="
        bg-[#020617]/80 backdrop-blur-md
        text-white w-full max-w-xl p-10
        rounded-3xl shadow-2xl
        text-center flex flex-col gap-6
        border border-cyan-400/30
      "
      >
        <h1 className="text-3xl font-extrabold tracking-wide">
          {category.name}
        </h1>

        <p className="text-white/80 text-sm">
          Test your knowledge in{" "}
          <span className="font-semibold">{category.name}</span>!
        </p>

        <button
          onClick={handleAnswerQuestions}
          className="
          w-full py-4 rounded-xl font-bold text-lg
          bg-emerald-500 hover:bg-emerald-600
          active:scale-95 transition-all duration-200
          shadow-[0_0_20px_rgba(16,185,129,0.4)]
        "
        >
         Start Quiz
        </button>
      </div>
    </div>
  );
}
