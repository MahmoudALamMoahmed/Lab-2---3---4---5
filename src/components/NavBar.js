import { Link } from "react-router-dom";

import "./fav.css"
import { useSelector } from "react-redux";

function NavBar() {
  const favorites = useSelector((state) => state.favorites.favorites);
  const favoritesCount = favorites.length;

  return (
    <nav className="container-fluid navbar navbar-expand-lg bg-info">
      <div className="container ">
        
        <Link className="navbar-brand" to="#">
          LOGO
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                login
              </Link>
            </li>
           {/*  <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
              
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/ListCompanies">
              Movies
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/favorites">
              Favorites
        {favoritesCount > 0 && (
          <span className="favorite-count" style={{backgroundColor:"red",color:"white",width:"20px",borderRadius:"20px",fontSize:"18px"}}>{favoritesCount}</span>
        )}
      </Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
