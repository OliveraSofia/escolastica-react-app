import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
        <nav>
         <div>
          <ul>
           <li><Link to="/">HomePage</Link></li>
           <li><Link to="Horarios">Horarios</Link></li>
           <li><Link to="Materias">Materias</Link></li>
           <li><Link to="Estudiantes">Estudiantes</Link></li>
          </ul>
         </div>
    </nav>
)}

export default Nav;