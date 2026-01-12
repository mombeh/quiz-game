import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getCategories } from '../services/api';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      if (data) {
        setCategories(data);
      }
      setIsLoading(false);
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/subject/${categoryId}`);
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Choose a Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-100"
            onClick={() => handleCategoryClick(category.id)}
          >
            <h2 className="text-lg font-semibold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}