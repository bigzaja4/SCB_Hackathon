import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './views/Login'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="home" component={Login} />
    </Router>
  )
}

export default App;
