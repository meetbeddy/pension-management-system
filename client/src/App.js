import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./containers/landing/Index";
import Auth from "./components/auth/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/auth/signin" element={<Auth type="signin" />} />
        <Route exact path="/auth/register" element={<Auth type="register" />} />
      </Routes>
    </div>
  );
}

export default App;
