import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SMP from "./pages/SMP";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SMP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
