import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';




function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact>
         <AllMeetups />
      </Route>
     <Route path="/favorites">
         <Favorites/>
      </Route>
     <Route path="/AllMeets">
         <NewMeetups/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
