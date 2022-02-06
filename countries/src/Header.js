import React, { Component } from 'react';
import globalLogo from './img/global-logo.png';
import './Header.css'

export default class Header extends Component {
  render() {
    return(
        <div className="header-div">
            <img className="header-logo" src={globalLogo}></img>
            <h1>Around The World</h1>
        </div>
    ) 
  }
}

