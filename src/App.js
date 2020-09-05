import React, { Header } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './customize/main.css';
import Headers from './components/Headers';
import Home from './components/home/Home';
import Work from './components/work/Work';
import WorkItem from './components/work/WorkItem';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <section>
          <Headers />
            <Switch>
              <Route exact path='/work' component={Work} />
              <Route exact path='/' component={Home} />
              <Route path='/work/:workTag' component={WorkItem} />
            </Switch>
          <Footer />
      </section>
    </div>
  );
}

export default App;
