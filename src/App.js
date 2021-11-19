import { Container } from "@mui/material";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";

function App() {
  return (
    <Container maxWidth="false" disableGutters={true}>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Container>
    </Container>
  );
}

export default App;
