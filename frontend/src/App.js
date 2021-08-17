import Form from "./components/Form.js";
import FormData from "./components/FormData.js"
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
          <Route path="/list" render={() => {
            return
          }}>
            <FormData />
          </Route>
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
