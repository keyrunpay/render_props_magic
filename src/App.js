import React from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="app">
      <div className="title">Render Props Magic #Buggged</div>
      <Nav />
      <Route path="/" exact component={Users} />
      <Route path="/posts" exact component={Posts} />
      <Route path="/todos" exact component={Todos} />
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <NavLink to="/" activeClassName="on" exact>
        Users
      </NavLink>
      <NavLink to="/posts" activeClassName="on" exact>
        Posts
      </NavLink>
      <NavLink to="/todos" activeClassName="on" exact>
        Todos
      </NavLink>
    </nav>
  );
}

export default App;
