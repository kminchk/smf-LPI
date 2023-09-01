import Plot from "react-plotly.js";
import React, { useState, useEffect } from "react";

function BoxPlotExample({ datas }) {
  const [Xdata, setXdata] = useState([]);
  const [Ydata, setYdata] = useState([]);
  const [DateData, setDateData] = useState([]);

  useEffect(() => {
    const xData = datas.map((item) => item.avg_x);
    const yData = datas.map((item) => item.avg_y);
    const dateData = datas.map((item) => {
      // แปลงข้อมูล date_time เป็นรูปแบบที่ถูกต้องสำหรับแกน x
      const date = new Date(item.date_time);
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    });

    setXdata(xData);
    setYdata(yData);
    setDateData(dateData);
  }, [datas]);

  const data = [
    {
      type: "box",
      y: Xdata,
      x: DateData,
      // boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
      name: "avg_x",
    },
    {
      type: "box",
      y: Ydata,
      x: DateData,
      // boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
      name: "avg_y",
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
