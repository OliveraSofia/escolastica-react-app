import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Horarios from './pages/Horarios';
import Materias from './pages/Materias';
import Estudiantes from './pages/Estudiantes';

//  <></>
function App() {
  return (
    <div className="App">
       <Header/>
       <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={ <HomePage/>}/>
          <Route path="Horarios" element={ <Horarios/>}/>
          <Route path="Materias" element={ <Materias/>}/>
          <Route path="Estudiantes" element={ <Estudiantes/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
