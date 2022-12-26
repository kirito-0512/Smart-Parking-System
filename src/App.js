import './App.css';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Slot from './components/Slot';
import Book from './components/Book';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
 
function App() {
  localStorage.setItem('count', '20');
  return (
    <>
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/slot" element={<Slot/>}/>
        <Route path="/book" element={<Book/>}/>
      </Routes>
    </>
  );
}
 
export default App;
