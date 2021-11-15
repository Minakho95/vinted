import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Header from "./components/Header";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [title, setTitle] = useState();

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  const handleSearch = (event) => {
    setTitle(event.target.value);
  };
  return (
    <Router>
      <Header
        userToken={userToken}
        setUser={setUser}
        title={title}
        setTitle={setTitle}
        handleSearch={handleSearch}
      />
      <Switch>
        <Route path="/offer/:id">
          <Offer userToken={userToken} />
        </Route>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/publish">
          <Publish userToken={userToken} />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/">
          <Home title={title} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
