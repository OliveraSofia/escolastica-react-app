import "../../styles/components/layout/Header.css"

const Header = (props) => {
    return(
    <header> 
        <div className="holder">
        <img src="images/logo.png" width="100" alt="Escolastica App"></img>
        <h1 class="bigblue">Escolastica App</h1>
        </div>
    </header>);
}

export default Header;