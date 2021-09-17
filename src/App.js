import { Route, Switch } from "react-router";
import "./App.css";
import { Login, Register } from "./components";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
