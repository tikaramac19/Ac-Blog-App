import "./App.css";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
