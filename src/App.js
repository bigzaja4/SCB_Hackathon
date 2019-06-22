import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './views/Login'
import Welcome from './views/Welcome'

function App() {
  return (
    <Router>
      <Route path="welcome" component={Welcome} />
      <Route path="home" component={Login} />
      <Route exact path="/" component={Login} />
    </Router>
  )
}

export default App;
