import React, { Component } from 'react';
import './App.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="home-page">
          <div className="home-page-head">
            Everyone Deserves a Great Resume<br />
            Get yours in Less than 5 minutes
          </div>
          <div className="homeHow">
            <div className="home-page-how"> 
            <p>Want to Know How?</p>
            <button className="btn btn-primary btn-how"><a href="/home">How?</a></button>
            </div>
            
            <div className="home-page-build">
            <p>Start Building</p>
            <button className="btn btn-primary btn-how"><a href="/base">Click</a></button>
            </div>
          </div>
          <div className="home-page-foot">
            <p>About the Developer</p>
            <button className="btn btn-primary btn-how"><a href="/developer">Find Me</a></button>
            </div>
      </div>

    );
  }
}
 
export default Main;