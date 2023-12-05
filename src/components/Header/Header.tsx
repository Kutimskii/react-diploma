import { Link } from "react-router-dom";
import  "./header.style.css"
// classnames library
import headerLogo from '../../img/header-logo.png'
export const Header = () => {
  return (
  <header className='container' >
  <div className="row">
    <div className="col">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to = "/" className="navbar-brand">
        <img src={headerLogo} alt="Bosa Noga"/>
        </Link>
        <div className = "collapse navbar-collapse" id="navbarMain">
          <ul className = "navbar-nav mr-auto">
            <li className="nav-item active">
              <Link  to ="/" className="nav-link" >Главная</Link>
            </li>
            <li className="nav-item">
              <Link to ="/catalog.html" className="nav-link" >Каталог</Link>
            </li>
            <li className = "nav-item">
              <Link  to = "/about.html" className = "nav-link">О магазине</Link>
            </li>
            <li className="nav-item">
              <Link to = "/contacts.html" className="nav-link" >Контакты</Link>
            </li>
          </ul>
          <div>
            <div className="header-controls-pics">
              <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
              <div className="header-controls-pic header-controls-cart">
                <div className="header-controls-cart-full"></div>
                <div className="header-controls-cart-menu"></div>
              </div>
            </div>
            <form data-id="search-form" className="header-controls-search-form form-inline invisible">
              <input className="form-control" placeholder="Поиск"/>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </div>
</header>);
} 
