import { Link } from "react-router-dom";
import "../../styles/components/layout/Nav.css"
const Nav = (props) => {
    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to="/">HomePage</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to="Horarios">Horarios</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to="Materias">Materias</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

)}

export default Nav;