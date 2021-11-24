import { Container } from "@mui/material";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Container maxWidth="false" disableGutters={true}>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Container>
    </Container>
  );
}

export default App;
