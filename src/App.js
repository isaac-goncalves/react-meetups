import './App.css';
import { Route, Switch} from "react-router-dom";
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';
import MainNavigation from './layout/MainNavigation';

function App() {
  return (
<div>
  <MainNavigation/>
    <Switch>
      <Route path="/" exact>
         <NewMeetups />
      </Route>
     <Route path="/favorites">
         <Favorites/>
      </Route>
     <Route path="/new-meetup">
         <AllMeetups/>
      </Route>
    </Switch>
</div>
  );
}

export default App;
