import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home, Plans, Recipes, Faq, Meal } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/plan" element = {<Plans />}/>
        <Route path="/recipe" element = {<Recipes />}/>
        <Route path="/faq" element = {<Faq />}/>
        <Route path="/meal/:id" element={<Meal />} />
      </Routes>
    </div>
  );
}

export default App;