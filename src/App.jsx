import './App.css';
import MainPage from './components/MainPage';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import MealInfo from './components/MealInfo';
import Footer from './components/Footer';
import About from './components/About';
import Favorites from './components/Favorites';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/meal/:mealid" element={<MealInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
