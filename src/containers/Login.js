import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const errorColor = "red";

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // requête axios pour se loguer
      const response = await axios.post(
        "https://vinted-michaels.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        // On enregistre le token dans un Cookie
        setUser(response.data.token);
        // Redirection vers Home
        history.push("/publish");
      }
    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage(error.response.data.message);
      }
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Se connecter</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          placeholder="Adresse email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
        />
        <input
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <span style={{ color: errorColor }}>{errorMessage}</span>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
