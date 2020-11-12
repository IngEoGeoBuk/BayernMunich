import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage'
import News from './pages/News';
import Tv from './pages/Tv';
import Teams from './pages/Teams';
import Matches from './pages/Matches';
import Club from './pages/Club';
import Fans from './pages/Fans';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/news' exact component={News} />
          <Route path='/tv' exact component={Tv} />
          <Route path='/teams' exact component={Teams} />
          <Route path='/matches' exact component={Matches} />
          <Route path='/club' exact component={Club} />
          <Route path='/fans' exact component={Fans} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
