import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import SubjectDetail from "./pages/SubjectDetail";
import Questionnaire from "./pages/Questionnaire";
import ScorePage from "./pages/ScorePage";
import { UseData } from "./context/context";

function App() {
  return (
    <UseData>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/subject/:id" element={<SubjectDetail />} />
          <Route
            path="/questionnaire/:categoryId"
            element={<Questionnaire />}
          />
          <Route path="/ScorePage" element={<ScorePage />} />
        </Routes>
      </BrowserRouter>
    </UseData>
  );
}

export default App;