import React from "react";
import Plot from "react-plotly.js";

const ChartComponent = ({ ir2_pv_1_pv, ir2_pv_2_pv, title, categories }) => {
  const latestValue1 = ir2_pv_1_pv[ir2_pv_1_pv.length - 1]; // ค่าล่าสุด
  const latestValue2 = ir2_pv_2_pv[ir2_pv_2_pv.length - 1]; // ค่าล่าสุด
  const datelast = categories[categories.length - 1]; // ค่าล่าสุด

  const data = [
    {
      x: categories,
      y: ir2_pv_1_pv,
      type: "scatter",
      mode: "lines",
      line: {
        color: "#0161FF", // สีของเส้นหลัก
      },
      name: "ir2_pv_1_pv",
    },
    {
      x: categories,
      y: ir2_pv_2_pv,
      type: "scatter",
      mode: "lines",
      line: {
        color: "#0161FF", // สีของเส้นหลัก
      },
      name: "ir2_pv_2_pv",
    },
    {
      x: categories,
      y: Array(categories.length).fill(179),
      type: "scatter",
      mode: "lines",
      name: "LSL",
      line: {
        color: "#FF4560", // สีของเส้น LSL
      },
    },
    {
      x: categories,
      y: Array(categories.length).fill(219),
      type: "scatter",
      mode: "lines",
      name: "USL",
      line: {
        color: "#FF4560", // สีของเส้น USL
      },
    },
  ];

  const layout = {
    title: "Chart",
    xaxis: {
      tickangle: -45, // มุมการหมุนของเลเบลแกน x
      automargin: true, // ปรับขนาดแกน x ให้พอดีกับเลเบล
    },
    yaxis: {
      title: "Heater Pv",
    },
    width: 1450,
    height: 350,
    autosize: false,
    margin: {
      l: 50,
      r: 50,
      b: 100,
      t: 50,
      pad: 0,
    },
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {"latestValue1"} {latestValue1} {datelast}
            {"latestValue2"} {latestValue2} {datelast}
          </h5>
        </div>
      </div>
      <Plot data={data} layout={layout} config={{ responsive: true }} />
    </div>
  );
};

export default ChartComponent;
