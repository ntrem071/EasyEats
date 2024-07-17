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
          <Route path="/EasyEats/" element={<Home />} />
          <Route path="/EasyEats/plan" element={<Plans />} />
          <Route path="/EasyEats/recipe" element={<Recipes />} />
          <Route path="/EasyEats/faq" element={<Faq />} />
          <Route path="/EasyEats/meal/:id" element={<Meal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;