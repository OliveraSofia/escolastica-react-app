import "../../styles/components/layout/Header.css"

const Header = (props) => {
    return(
    <header> 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <div className="holder">
        <img src="images/logo.png" width="200" alt="Escolastica App"></img>
        <h1 class="bigblue">Escolastica App</h1>
        </div>
    </header>);
}

export default Header;