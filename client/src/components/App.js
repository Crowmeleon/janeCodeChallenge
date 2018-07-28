import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Notes from './notes';
import AddNotes from './add_note';
import Navigation from './navigation';
import Landing from './landing';
import Footer from './footer';
import Toast from './toast';

let idleTimer;

class App extends Component {
  constructor(props){
    super(props);

    this.state = {x: 0, y: 0, timer: 30000, visible: false}
  }


  checkUserActive(e){
    window.clearTimeout(idleTimer);
    if(this.state.visible == true){
      this.setState({visible: false})
    }
    let userIdle = () => {
      this.setState({visible: true});
    }

    idleTimer = window.setTimeout(userIdle, this.state.timer);
  }

  render() {
    return (
      <div className="wut" onMouseMove={this.checkUserActive.bind(this)}>
        <Router>
            <div>
              <Navigation />
                <Toast visible={this.state.visible}/>
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
