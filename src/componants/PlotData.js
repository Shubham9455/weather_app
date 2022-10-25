import React from "react";
import CanvasJSReact from "../assets/canvasjs.react.js";


var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PlotData = (props) => {
  console.log(props);
  const hourData = props.hourData;

  
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
            label: hourData[0].time.slice(11),
            y: [hourData[0].temp_c, hourData[0].feelslike_c],
            name: hourData[0].condition.text,
          },
          {
            label: hourData[6].time.slice(11),
            y: [hourData[6].temp_c, hourData[6].feelslike_c],
            name: hourData[6].condition.text,
          },
          {
            label: hourData[12].time.slice(11),
            y: [hourData[12].temp_c, hourData[12].feelslike_c],
            name: hourData[12].condition.text,
          },
          {
            label: hourData[18].time.slice(11),
            y: [hourData[18].temp_c, hourData[18].feelslike_c],
            name: hourData[18].condition.text,
          },
          {
            label: hourData[23].time.slice(11),
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
