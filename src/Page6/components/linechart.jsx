import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

const LineChart = ({ data, titles }) => {
  const [traceData, setTraceData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const trace1 = {
        type: "scattergl",
        mode: "lines+markers",
        name: "a2b1 Time",
        x: data.map((item) => item.pos_no),
        y: data.map((item) => item.avg_td),
        text: data.map((item) => item.pos_no),
      };

      const trace2 = {
        type: "scattergl",
        mode: "lines+markers",
        name: "Lock Holding Time",
        x: data.map((item) => item.pos_no),
        y: data.map((item) => item.avg_md),
        text: data.map((item) => item.pos_no),
      };

      const trace3 = {
        type: "scattergl",
        mode: "lines+markers",
        name: "Warning Holding Time",
        x: data.map((item) => item.pos_no),
        y: data.map((item) => item.avg_md),
        text: data.map((item) => item.pos_no),
      };

      setTraceData([trace1, trace2, trace3]);
    }

    setLayout({
      autosize: true,
      xaxis: {
        title: "Lot Number",
        type: "category",
      },
      title: titles,
      width: 1400,
      height: 500,
    });
  }, [data, titles]);

  const [layout, setLayout] = useState({}); // ตัวแปร layout เพิ่มที่นี่

  if (traceData.length === 0) {
    return <>NO DATA</>;
  }

  return <Plot data={traceData} layout={layout} />;
};

export default LineChart;
