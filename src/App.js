import React, { useState } from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Mywallet from "./components/mywallet/Mywallet";
import Remaining from "./components/Remaining/Remaining";
import Totalspent from "./components/totalexpenses/Totalspent";
import Listmaping from "./components/expensesList.js/Listmaping";
import Addexpense from "./components/addexpense/Addexpense";
import Login from "./components/registration/Login";
import Signup from "./components/registration/Signup";
import Footer from "./components/footer/Footer";
import ToDo from "./components/todo/ToDo";
import Api from "./components/api/Api";
function App() {
  const [userSignupInformation, setUserSignupInformation] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [userLoginInformation, setUserLoginInformation] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Signup
            userSignupInformation={userSignupInformation}
            setUserSignupInformation={setUserSignupInformation}
          />
        </Route>
        <Route exact path="/login">
          <Login
            userLoginInformation={userLoginInformation}
            setUserLoginInformation={setUserLoginInformation}
          />
        </Route>
        <Route exact path="/expense">
          <div className="container10">
            <div className="container2">
              <h1>My Wallet</h1>
              <Mywallet />
              <Remaining />
              <Totalspent />
              <h1>Expenses</h1>
              <Listmaping />
            </div>

            <div className="add-form">
              <Addexpense />
            </div>
          </div>
        </Route>
        <Route path="/todo">
          <div className="todo-page">
            <h1>ToDo App</h1>
            <ToDo />
          </div>
        </Route>
        <Route path="/weather">
          <Api />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
