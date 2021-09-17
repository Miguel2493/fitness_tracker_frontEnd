import { Route, Switch } from "react-router";
import "./App.css";
import { Login } from "./components";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
