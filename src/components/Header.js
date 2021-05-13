import logo from "../logo.png";
import { Link } from "react-router-dom";

const Header = ({ userToken, setUser }) => {
  return (
    <div>
      <div className="header">
        <Link to="/">
          {" "}
          <div className="logo-header">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <div className="navbar">
          {userToken ? (
            <button onClick={() => setUser(null)}>Se déconnecter</button>
          ) : (
            <div>
              <Link to="/signup">S'inscrire</Link>
              <Link to="/login">Se connecter</Link>
            </div>
          )}
          <div>
            <Link to="/publish">Vends tes articles</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
