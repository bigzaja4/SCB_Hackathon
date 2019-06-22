import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './views/Login'
import Welcome from './views/Welcome'

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Route path="welcome" component={Welcome} />
      <Route path="home" component={Login} />
      <Route exact path="/" component={Login} />
    </Router>
=======
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Welcome} />
      {/* <Route path="welcome" component={Welcome} /> */}
    </Switch>
>>>>>>> 758fc90686ad2657b0fef1f8de48792ec8dc6a5c
  )
}

export default App;
