import { Route, Switch } from "react-router";
import "./App.css";
import { Login, Register, Home } from "./components";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
