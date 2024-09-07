import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import StockPage from "./pages/stock";

function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stock/:id" element={<StockPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
