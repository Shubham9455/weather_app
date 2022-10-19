
import './App.css';
import HomePage from './pages/HomePage';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import ForecastPage from './pages/ForecastPage';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}

      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/forecast" exact element={<ForecastPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
