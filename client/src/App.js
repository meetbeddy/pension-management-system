import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./containers/landing/Index";
import Login from "./components/auth/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/signin" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
