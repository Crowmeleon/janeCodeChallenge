import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Notes from './notes';
import AddNotes from './add_note';
import Navigation from './navigation';
import Landing from './landing';
import Footer from './footer';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Router>
            <div>
              <Navigation />
                <div className="container">
                  <Route exact path="/" component={Landing}/>
                  <Route exact path="/view/notes" component={Notes}/>
                  <Route exact path="/add/note" component={AddNotes}/>
                </div>
              <Footer />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
