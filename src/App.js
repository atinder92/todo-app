import { Container } from "@mui/material";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import AccountSettings from "./components/Account";
import requireAuth from "./components/requireAuth";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <Container maxWidth="false" disableGutters={true}>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={requireAuth(Dashboard)} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={requireAuth(Dashboard)} />
          <Route path="/edit/:id" component={requireAuth(EditTodo)} />
          <Route path="/account" component={requireAuth(AccountSettings)} />
        </Switch>
      </Container>
    </Container>
  );
}

export default App;
