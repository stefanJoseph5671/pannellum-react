import React, { Component } from 'react';
import { render } from 'react-dom';
import "./index.css";
import ImageThreeSixty from "./components/ImageThreeSixty";




class Demo extends Component {
  

  render() {
    return (
      <div className="app">
        <ImageThreeSixty />
      </div>
    );
  }

}


render(<Demo />, document.querySelector('#demo'));
