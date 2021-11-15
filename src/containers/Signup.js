import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const errorColor = "red";

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://vinted-michaels.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      } else {
        setErrorMessage("Une erreur est survenue.");
      }
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data);
      }
      console.log(error.response);
    }
  };

  return (
    <div className="signup-container">
      <h2>S'inscrire</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="checkbox-container">
          <div className="checkbox">
            <input
              type="checkbox"
              checked={checkbox}
              onChange={() => setCheckbox(!checkbox)}
            />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p>
            En m'inscrivant, je confirme que j'ai accepté les Termes &
            Conditions de Vinted, avoir lu la Politique de Confidentialité, et
            que j'ai plus de 18 ans.
          </p>
        </div>

        <span style={{ color: errorColor }}>{errorMessage}</span>
        <button type="submit">S'inscrire</button>
      </form>
      <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
    </div>
  );
};

export default Signup;
