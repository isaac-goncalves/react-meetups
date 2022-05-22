import './App.css';
import { Route, Switch} from "react-router-dom";
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetup';
import Layout from './layout/Layout';

function App() {
  return (
<Layout>
    <Switch>
      <Route path="/" exact>
         <AllMeetups />
      </Route>
     <Route path="/favorites">
         <Favorites/>
      </Route>
     <Route path="/new-meetup">
         <NewMeetups/>
      </Route>
    </Switch>
</Layout>
  );
}

export default App;
