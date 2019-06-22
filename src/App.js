import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './views/Login'
import Welcome from './views/Welcome'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="home" component={Login} />
      {/* <Route path="welcome" component={Welcome} /> */}
    </Router>
  )
}

export default App;
