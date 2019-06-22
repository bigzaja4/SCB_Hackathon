import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from './views/Login'
import Welcome from './views/Welcome'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Welcome} />
      {/* <Route path="welcome" component={Welcome} /> */}
    </Router>
  )
}

export default App;
