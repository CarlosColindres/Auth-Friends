import SignIn from "./components/SignIn";
import { Route, Switch, useParams } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import PrivateRoute from './components/PrivateRoute'
import FriendId from "./components/FriendId";
function App() {
  
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <PrivateRoute exact path="/friendslist" component={FriendsList} />
        <PrivateRoute exact path={`/friend/:id`} component={FriendId} />
      </Switch>
    </div>
  );
}

export default App;
