import React from 'react'
import Home from '@pages/home/home'
import HelloWorld from '@pages/helloWorld/helloWorld'
import '@assets/css/public.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/helloWorld" component={HelloWorld}/>
            <Route render={() => <div>404</div>} />
        </Switch>
      </Router>
    </div>
  );
}
export default App
