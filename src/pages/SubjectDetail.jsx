import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

export default function SubjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      if (categories) {
        const selectedCategory = categories.find(cat => cat.id === parseInt(id));
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
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!category) {
    return <div className="flex justify-center items-center h-screen">Category not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{category.name}</h1>
      <p className="mb-4">Test your knowledge in {category.name}!</p>
      <button
        onClick={handleAnswerQuestions}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Answer Questions
      </button>
    </div>
  );
}