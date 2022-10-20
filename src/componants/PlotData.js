import { render } from "@testing-library/react";
import React from "react";

import { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react.js";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PlotData = (props) => {
  var customMarkers = [];
  console.log(props);
  const hourData = props.hourData;

  var chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Image as marker",
    },
    theme: "theme2",
    animationEnabled: true,
    data: [
      {
        type: "stepLine",
        markerType: "none",
        dataPoints: [
          { x: 10, y: 71, markerImageUrl: "http://i.imgur.com/TUmQf5n.png" },
          { x: 20, y: 55, markerImageUrl: "http://i.imgur.com/rx4VPtF.png" },
          { x: 30, y: 50, markerImageUrl: "http://i.imgur.com/qrqIve0.png" },
          { x: 40, y: 70, markerImageUrl: "http://i.imgur.com/TUmQf5n.png" },
        ],
      },
    ],
  });


  // function formatter(e) {
  //   if (e.index === 0 && e.dataPoint.x === 0) {
  //     return " Mini " + e.dataPoint.y[e.index] + "°";
  //   } else if (e.index == 1 && e.dataPoint.x === 0) {
  //     return " Max " + e.dataPoint.y[e.index] + "°";
  //   } else {
  //     return e.dataPoint.y[e.index] + "°";
  //   }
  // }
  function addImage(chart) {
    for (var i = 0; i < chart.data[0].dataPoints.length; i++) {
      customMarkers.push(
        document
          .createElement("img")
          .attr("src", chart.data[0].dataPoints[i].markerImageUrl)
          .css("display", "none")
          .css("height", 30)
          .css("width", 30)
          .appendTo(
            document.getElementsByClassName(
              "#canvasjs-react-chart-container-0>canvasjs-chart-container"
            )
          )
      );
      positionImage(customMarkers[i], i);
    }
  }
  function positionImage(image, index) {
    var imageCenter = chart.axisX[0].convertValueToPixel(
      chart.data[0].dataPoints[index].x
    );
    var imageTop = chart.axisY[0].convertValueToPixel(chart.axisY[0].maximum);

    image
      .width("40px")
      .css({
        left: imageCenter - 20 + "px",
        position: "absolute",
        top: imageTop + "px",
        position: "absolute",
      });
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
        "{name} </br> <strong>Temperature: </strong> {y[0]}</br> Feels Like: {y[1]} °C ",
    },
    backgroundColor: "rgba(0, 0, 0, 0)",
    theme: "dark2",
    data: [
      {
        type: "rangeSplineArea",
        fillOpacity: 0.2,
        color: "#1DB3DC",

        dataPoints: [
          {
            label: hourData[0].time,
            y: [hourData[0].temp_c, hourData[0].feelslike_c],
            name: hourData[0].condition.text,
          },
          {
            label: hourData[6].time,
            y: [hourData[6].temp_c, hourData[6].feelslike_c],
            name: hourData[6].condition.text,
          },
          {
            label: hourData[12].time,
            y: [hourData[12].temp_c, hourData[12].feelslike_c],
            name: hourData[12].condition.text,
          },
          {
            label: hourData[18].time,
            y: [hourData[18].temp_c, hourData[18].feelslike_c],
            name: hourData[18].condition.text,
          },
          {
            label: hourData[23].time,
            y: [hourData[23].temp_c, hourData[23].feelslike_c],
            name: hourData[23].condition.text,
          },
        ],
      },
    ],
  };
  return (
    <div style={{ width: "100%", hight: "100%" }}>
      <CanvasJSChart options={options} containerProps={{}} />
    </div>
  );
};

export default PlotData;
