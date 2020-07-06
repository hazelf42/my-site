import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home  from './components/Home';
import About  from './components/About';
import Contact  from './components/Contact';
  

function App() {
  return (

    <div  style={{ overflow:'auto'}}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Router>
      </div>

  );
}

export default App;
