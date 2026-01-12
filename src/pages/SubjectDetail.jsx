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
    navigate(`/questionnaire/${id}`);
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
      <div className="bg-white/10 backdrop-blur-md text-white w-full max-w-xl p-8 rounded-2xl shadow-2xl text-center flex flex-col gap-6">
        <h1 className="text-2xl font-bold mb-4">{category.name}</h1>
        <p className="mb-4">Test your knowledge in {category.name}!</p>
        <button
          onClick={handleAnswerQuestions}
          className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 bg-emerald-500 hover:bg-emerald-600 active:scale-95 shadow-lg"
        >
          Answer Questions
        </button>
      </div>
    </div>
  );
}
