import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { formatdateforboxplot } from "../../../utils/formatdate"; // Import formatDate function from utils

function BoxPlotExample({ datas }) {
  const [X1_data, setX1_data] = useState([]);
  const [Y1_data, setY1_data] = useState([]);
  const [X2_data, setX2_data] = useState([]);
  const [Y2_data, setY2_data] = useState([]);
  const [X3_data, setX3_data] = useState([]);
  const [Y3_data, setY3_data] = useState([]);
  const [X4_data, setX4_data] = useState([]);
  const [Y4_data, setY4_data] = useState([]);
  const [X5_data, setX5_data] = useState([]);
  const [Y5_data, setY5_data] = useState([]);
  const [spec_max, setspec_max] = useState([]);
  const [spec_min, setspec_min] = useState([]);

  const [DateData, setDateData] = useState([]);

  useEffect(() => {
    const x_1Data = datas.map((item) => item.x1);
    const y_1Data = datas.map((item) => item.y1);

    const x_2Data = datas.map((item) => item.x2);
    const y_2Data = datas.map((item) => item.y2);

    const x_3Data = datas.map((item) => item.x3);
    const y_3Data = datas.map((item) => item.y3);

    const x_4Data = datas.map((item) => item.x4);
    const y_4Data = datas.map((item) => item.y4);

    const x_5Data = datas.map((item) => item.x5);
    const y_5Data = datas.map((item) => item.y5);
    const spec_Max = datas.map((item) => item.spec_max);
    const spec_Min = datas.map((item) => item.spec_min);
    const dateData = datas.map((item) => {
      // Convert date_time data to the appropriate format for the x-axis
      const date = formatdateforboxplot(item.date_time);
      return date;
    });

    setX1_data(x_1Data);
    setY1_data(y_1Data);

    setX2_data(x_2Data);
    setY2_data(y_2Data);

    setX3_data(x_3Data);
    setY3_data(y_3Data);

    setX4_data(x_4Data);
    setY4_data(y_4Data);

    setX5_data(x_5Data);
    setY5_data(y_5Data);
    setspec_max(spec_Max);
    setspec_min(spec_Min);
    setDateData(dateData);
  }, [datas]);

  const scatterglData = [
    {
      type: "scattergl",
      mode: "markers",
      x: DateData,
      y: X1_data,
      name: "x1",
      marker: { color: "blue" },
    },
    {
      type: "scattergl",
      mode: "markers",
      x: DateData,
      y: Y1_data,
      name: "y1",
      marker: { color: "orange" },
    },
    {
      type: "scattergl",
      mode: "markers",
      x: DateData,
      y: X2_data,
      name: "x2",
      marker: { color: "blue" },
    },
    {
      type: "scattergl",
      mode: "markers",
      x: DateData,
      y: Y2_data,
      name: "y2",
      marker: { color: "orange" },
    },
    {
      type: "scattergl",
      mode: "markers",
      x: DateData,
      y: X3_data,
      name: "x3",
      marker: { color: "blue" },
    },
    {
      type: "scattergl",
      mode: "markers",
      x: DateData,
      y: Y3_data,
      name: "y3",
      marker: { color: "orange" },
    },
    {
      type: "scattergl",
      mode: "markers",
      x: DateData,
      y: X4_data,
      name: "x4",
      marker: { color: "blue" },
    },
    {
      type: "scattergl",
      mode: "markers",
      x: DateData,
      y: Y4_data,
      name: "y4",
      marker: { color: "orange" },
    },
    {
      type: "scattergl",
      mode: "markers",
      x: DateData,
      y: X5_data,
      name: "x5",
      marker: { color: "blue" },
    },
    {
      type: "scattergl",
      mode: "markers",
      x: DateData,
      y: Y5_data,
      name: "y5",
      marker: { color: "orange" },
    },
    {
      type: "scattergl",
      mode: "lines",
      x: DateData,
      y: spec_max,
      name: "spec_max",
      marker: { color: "red" },
    },
    {
      type: "scattergl",
      mode: "lines",
      x: DateData,
      y: spec_min,
      name: "spec_min",
      marker: { color: "red" },
    },
    // {
    //   type: "scattergl",
    //   mode: "lines",
    //   x: DateData,
    //   y: Array(DateData.length).fill(10), // Create an array with 125 for the target line
    //   name: "Target",
    //   line: { color: "red" }, // Set the line color for the target
    // },
  ];

  const layout = {
    title: "Screen Tension (scattergl Plot)",
    yaxis: {
      title: "Value",
    },
    xaxis: {
      title: "Date",
      tickformat: "%d",
      tickangle: -45,
      automargin: true,
    },
    width: 1500,
  };

  return (
    <div>
      <Plot data={scatterglData} layout={layout} />
    </div>
  );
}

export default BoxPlotExample;
