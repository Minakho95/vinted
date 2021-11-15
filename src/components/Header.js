import logo from "../logo.png";
import searchIcon from "../search-icon.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = ({ userToken, setUser, title, setTitle, handleSearch }) => {
  const history = useHistory();

  return (
    <div className="header">
      <div className="header-container">
        <div>
          <Link to="/">
            {" "}
            <div className="logo-header">
              <img src={logo} alt="logo" />
            </div>
          </Link>
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Recherche des articles"
            onChange={handleSearch}
          />
          <img src={searchIcon} alt="" />
        </div>
        {userToken ? (
          <button
            className="header-button button-logout"
            onClick={() => {
              history.push("/");

              setUser(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <div>
            <Link to="/signup">
              <button className="header-button button-l-s button-s">
                S'inscrire
              </button>
            </Link>

            <Link to="/login">
              <button className="header-button button-l-s">Se connecter</button>
            </Link>
          </div>
        )}
        <div>
          <Link to="/publish">
            <button className="header-button button-sell">
              Vends tes articles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
