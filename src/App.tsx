import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Login from "./view/login";
import SignUp from "./view/signup";
import Main from "./view/main";
import Setting from "./view/setting";
import Nav from "./view/nav";
import Word from "./view/word";

function App() {
    return (
        <div className="App">
            <Nav />
            <Switch>
                <Route exact path="/" render={() => <Login />} />
                <Route path="/signUp" render={() => <SignUp />} />
                <Route path="/main" render={() => <Main />} />
                <Route path="/setting" render={() => <Setting />} />
                <Route path="/word" render={() => <Word />} />
            </Switch>
        </div>
    );
}

export default App;
