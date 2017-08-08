import React, { Component } from 'react';
import logo from './logo.svg';
import "photonkit/dist/css/photon.css";
import './App.css';

class DeepEnd {
  template() {
    return (
      <div className="window">
        <header className="toolbar toolbar-header">
          <div className="toolbar-actions">
            <button className="btn btn-default pull-right">
              <span className="icon icon-facebook"></span>
            </button>
          </div>
        </header>
        <div className="window-content">
          <div className="pane">
            <ul className="list-group">
              <li className="list-group-item active" id="s1">
                <img className="img-circle media-object pull-left" src="images/large-round.png" width="32" height="32" />
                <div className="media-body">
                  <strong>Deep End</strong>
                  <p>Jannine Weigel</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="pane">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/NCXfKyfpBKI?ecver=1&controls=0&showinfo=0&rel=0&?modestbranding=1" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <footer className="toolbar toolbar-footer">
          <h1 className="title"></h1>
        </footer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      new DeepEnd().template()
    );
  }
}

export default App;
