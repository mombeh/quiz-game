import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getCategories } from "../services/api";

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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#0E7490] to-[#22D3EE] text-white">
        <p className="text-lg animate-pulse">Loading categories...</p>
      </div>
    );
  }
return (
  <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#0E7490] to-[#22D3EE] px-4 py-10">
    <div className="max-w-6xl mx-auto">

      <h1 className="text-3xl font-extrabold text-white text-center mb-10 tracking-wide">
     Choose a Category
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="
              bg-[#020617]/80 backdrop-blur-md
              text-white p-6 rounded-3xl shadow-2xl
              cursor-pointer text-center
              border border-cyan-400/30
              hover:bg-cyan-500/10
              hover:-translate-y-1
              hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
              transition-all duration-200
            "
          >
            <h2 className="text-lg font-semibold">
              {category.name}
            </h2>
          </div>
        ))}
      </div>

    </div>
  </div>
);

}
