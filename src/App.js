import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './views/Login'
import Welcome from './views/Welcome'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Welcome} />
      {/* <Route path="welcome" component={Welcome} /> */}
    </Switch>
  )
}

export default App;
