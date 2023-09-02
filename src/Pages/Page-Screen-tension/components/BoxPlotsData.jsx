import Plot from "react-plotly.js";
import React, { useState, useEffect } from "react";

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

    const dateData = datas.map((item) => {
      // แปลงข้อมูล date_time เป็นรูปแบบที่ถูกต้องสำหรับแกน x
      const date = new Date(item.date_time);
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
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

    setDateData(dateData);
    console.log(x_1Data);
  }, [datas]);

  const data = [
    {
      type: "box",
      y: X1_data,
      x: DateData,
      boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
      name: "x1",
    },
    {
      type: "box",
      y: X1_data,
      x: DateData,
      boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
      name: "y1",
    },

    {
      type: "box",
      y: X2_data,
      x: DateData,
      boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
      name: "x2",
    },
    {
      type: "box",
      y: Y2_data,
      x: DateData,
      boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
      name: "y2",
    },

    {
      type: "box",
      y: X3_data,
      x: DateData,
      boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
      name: "x3",
    },
    {
      type: "box",
      y: Y3_data,
      x: DateData,
      boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
      name: "y3",
    },

    {
      type: "box",
      y: X4_data,
      x: DateData,
      boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
      name: "x4",
    },
    {
      type: "box",
      y: Y4_data,
      x: DateData,
      boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
      name: "y4",
    },

    {
      type: "box",
      y: X5_data,
      x: DateData,
      boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
      name: "x5",
    },
    {
      type: "box",
      y: Y5_data,
      x: DateData,
      boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
      name: "y5",
    },
  ];

  const layout = {
    title: "Screen Tension",
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
      <Plot data={data} layout={layout} />
    </div>
  );
}

export default BoxPlotExample;
