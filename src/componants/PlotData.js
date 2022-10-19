import React from "react";

import { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react.js";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PlotData = () => {
  function formatter(e) {
    if (e.index === 0 && e.dataPoint.x === 0) {
      return " Min " + e.dataPoint.y[e.index] + "°";
    } else if (e.index == 1 && e.dataPoint.x === 0) {
      return " Max " + e.dataPoint.y[e.index] + "°";
    } else {
      return e.dataPoint.y[e.index] + "°";
    }
  }

  const options = {
    title: {
      text: "Weekly Weather Forecast",
    },
    axisY: {
      suffix: " °C",
      maximum: 40,
      gridThickness: 1,
    },
    toolTip: {
      shared: true,
      content:
        "{name} </br> <strong>Temperature: </strong> </br> Min: {y[0]} °C, Max: {y[1]} °C",
    },
    // backgroundColor: "rgba(0, 0, 0, 0)",
    data: [
      {
        type: "rangeSplineArea",
        fillOpacity: 0.2,
        color: "#1DB3DC",
        indexLabelFormatter: formatter,
        dataPoints: [
          { label: "Monday", y: [15, 26], name: "rainy" },
          { label: "Tuesday", y: [15, 27], name: "rainy" },
          { label: "Wednesday", y: [13, 27], name: "sunny" },
          { label: "Thursday", y: [14, 27], name: "sunny" },
          { label: "Friday", y: [15, 26], name: "cloudy" },
          { label: "Saturday", y: [17, 26], name: "sunny" },
          { label: "Sunday", y: [16, 27], name: "rainy" },
        ],
      },
    ],
  };
  return (
    <div style={{ width: "100%", hight: "100%"}}>
      <CanvasJSChart
        options={options}
        containerProps={{  }}
      />
    </div>
  );
};

export default PlotData;
