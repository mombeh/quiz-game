import { useParams, useNavigate } from "react-router";

export default function DifficultySelection() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const difficulties = [
    { id: 'easy', name: 'Easy', description: 'Beginner friendly questions' },
    { id: 'medium', name: 'Medium', description: 'Moderate challenge' },
    { id: 'hard', name: 'Hard', description: 'Expert level questions' }
  ];

  const handleDifficultyClick = (difficulty) => {
    navigate(`/questionnaire/${categoryId}/${difficulty}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#0E7490] to-[#22D3EE] px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-white text-center mb-10 tracking-wide">
          Choose Difficulty Level
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {difficulties.map((difficulty) => (
            <div
              key={difficulty.id}
              onClick={() => handleDifficultyClick(difficulty.id)}
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
              <h2 className="text-lg font-semibold mb-2">
                {difficulty.name}
              </h2>
              <p className="text-white/70 text-sm">
                {difficulty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}