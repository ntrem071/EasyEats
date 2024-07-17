import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home, Plans, Recipes, Faq, Meal } from './pages';

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Routes>
          <Route path="./" element={<Home />} />
          <Route path="./plan" element={<Plans />} />
          <Route path="./recipe" element={<Recipes />} />
          <Route path="./faq" element={<Faq />} />
          <Route path="./meal/:id" element={<Meal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;