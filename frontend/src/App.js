import Form from "./components/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/" render={() => {
            return
          }}>
            <Form />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
