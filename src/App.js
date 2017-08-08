import React, { Component } from "react";
import photo from "./images/large-round.png";
import "photonkit/dist/css/photon.css";
import "./App.css";

class Model {
  videos = [
    { source : "https://www.youtube.com/embed/NCXfKyfpBKI?ecver=1&autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1", title : "Deep End" },
    { source : "https://www.youtube.com/embed/lBN9VDFDvOk?ecver=1&autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1", title : "Heart Stop" },
    { source : "https://www.youtube.com/embed/zeP7bqMySmE?ecver=1&autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1", title : "Strangled Love" }
  ];
  currentVideo = this.videos[0];
}

class DeepEnd extends Component {
  windowStyle = { cursor: "pointe" }
  paneStyle = { overflowY: "visible", borderLeft: "none" }
  iframeStyle = { border : 0 }

  item(video) {
    return (
        <li onClick={ (e) => this.props.play(video)} 
            key={video.source} 
            className={ "list-group-item " + (video.source === this.props.model.currentVideo.source ? "active" : "")}>
          <img className="img-circle media-object pull-left" src={photo} width="32" height="32" alt="Jannine Weigel" />
          <div className="media-body">
            <strong>{video.title}</strong>
            <p>Jannine Weigel</p>
          </div>
        </li>
    );
  }

  render() {
    return (
      <div className="window" style={this.windowStyle}>
        <header className="toolbar toolbar-header">
          <div className="toolbar-actions">
            <button className="btn btn-default pull-right">
              <span className="icon icon-facebook"></span>
            </button>
          </div>
        </header>
        <div className="window-content">
          <div className="pane" style={this.paneStyle}>
            <ul className="list-group">
                {this.props.model.videos.map(x => this.item(x))}
            </ul>
          </div>
          <div className="pane">
            <iframe style={this.iframeStyle} title="video" width="560" height="315" src={this.props.model.currentVideo.source}></iframe>
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
  constructor(props) {
    super(props);
    this.state = new Model();
    this.play = this.play.bind(this)
  }

  play(video) {
    this.setState({
      videos : this.state.videos,
      currentVideo : video
    });
  }

  render() {
    return (
      <div>
        <DeepEnd play={this.play} model={this.state}></DeepEnd>
      </div>
    );
  }
}

export default App;