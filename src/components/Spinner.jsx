import React, { Component } from "react";
import { ThreeCircles } from "react-loader-spinner";

export default class Spinner extends Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <ThreeCircles
          height="50"
          width="50"
          color="#4fa94d"
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="red"
          innerCircleColor="green"
          middleCircleColor="black"
        />
      </div>
    );
  }
}
