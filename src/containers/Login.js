import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // requête axios pour se loguer
      const response = await axios.post("http://localhost:3000/user/login", {
        email: email,
        password: password,
      });
      if (response.data.token) {
        // On enregistre le token dans un Cookie
        setUser(response.data.token);
        // Redirection vers Home
        history.push("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage("Mauvais email et/ou mot de passe");
      }
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <span>{errorMessage}</span>
        <input type="submit" value="Se connecter" />
      </form>
    </div>
  );
};

export default Login;
