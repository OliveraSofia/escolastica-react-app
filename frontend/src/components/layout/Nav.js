import { Link } from "react-router-dom";
import "../../styles/components/layout/Nav.css"
const Nav = (props) => {
    return(
        <div class="container">
        <nav class="navbar">
        <div className="nav-elements">
          <ul>
           <li class="nav-link"><Link to="/">HomePage</Link></li>
           <li><Link to="Horarios">Horarios</Link></li>
           <li><Link to="Materias">Materias</Link></li>
           <li><Link to="Estudiantes">Estudiantes</Link></li>
          </ul>
         </div>
    </nav></div>
)}

export default Nav;