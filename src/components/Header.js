import logo from "../logo.png";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo-header">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar">
          <div>
            <button>S'inscrire</button>
          </div>
          <div>
            <button>Se connecter</button>
          </div>
          <div>
            <button>Vends tes articles</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
