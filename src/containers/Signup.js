import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/signup", {
        username: username,
        email: email,
        password: password,
      });
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      } else {
        setErrorMessage("Une erreur est survenue.");
      }
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("email déjà existant");
      } else {
        setErrorMessage("Une erreur est survenue.");
      }
      console.log(error.response);
      console.log(error.message);
    }
  };

  return (
    <div style={{ padding: 50 }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <input
          type="checkbox"
          checked={checkbox}
          onChange={() => setCheckbox(!checkbox)}
        />
        <br />
        <span>{errorMessage}</span>
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default Signup;
