import React, { Component } from "react";
import "./loader.style.css";

export default class loader extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div class="spinner">
          <div class="ball-1"></div>
          <div class="ball-2"></div>
          <div class="ball-3"></div>
        </div>
      </div>
    );
  }
}
