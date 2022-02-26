import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Login from "./view/login";

function App() {
    return (
        <div className="App">
            hello
            <Switch>
                <Route exact path="/" render={() => <Login />} />
            </Switch>
        </div>
    );
}

export default App;
