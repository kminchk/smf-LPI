import React from "react";
import Plot from "react-plotly.js";

const ChartComponent = ({
  categories,
  ir1_pv_3_pv,
  ir1_pv_4_pv,
  ir1_pv_5_pv,
  ir1_pv_6_pv,
}) => {
  const latestValue1 = ir1_pv_3_pv[ir1_pv_3_pv.length - 1]; // ค่าล่าสุด
  const latestValue2 = ir1_pv_4_pv[ir1_pv_4_pv.length - 1]; // ค่าล่าสุด
  const latestValue3 = ir1_pv_5_pv[ir1_pv_5_pv.length - 1]; // ค่าล่าสุด
  const latestValue4 = ir1_pv_6_pv[ir1_pv_6_pv.length - 1]; // ค่าล่าสุด
  const datelast = categories[categories.length - 1]; // ค่าล่าสุด

  const data = [
    {
      x: categories,
      y: ir1_pv_3_pv,
      type: "scatter",
      mode: "lines",
      line: {
        color: "#0161FF", // สีของเส้นหลัก
      },
      name: "ir1_pv_3_pv",
    },
    {
      x: categories,
      y: ir1_pv_4_pv,
      type: "scatter",
      mode: "lines",
      line: {
        color: "#0161FF", // สีของเส้นหลัก
      },
      name: "ir1_pv_4_pv",
    },
    {
      x: categories,
      y: ir1_pv_5_pv,
      type: "scatter",
      mode: "lines",
      line: {
        color: "#0161FF", // สีของเส้นหลัก
      },
      name: "ir1_pv_5_pv",
    },
    {
      x: categories,
      y: ir1_pv_6_pv,
      type: "scatter",
      mode: "lines",
      line: {
        color: "#0161FF", // สีของเส้นหลัก
      },
      name: "ir1_pv_6_pv",
    },
    {
      x: categories,
      y: Array(categories.length).fill(176),
      type: "scatter",
      mode: "lines",
      name: "LSL",
      line: {
        color: "#FF4560", // สีของเส้น LSL
      },
    },
    {
      x: categories,
      y: Array(categories.length).fill(196),
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
            {/* {title} {latestValue1} {datelast}
            {title} {latestValue2} {datelast}
            {title} {latestValue3} {datelast}
            {title} {latestValue4} {datelast} */}
          </h5>
        </div>
      </div>
      <Plot data={data} layout={layout} config={{ responsive: true }} />
    </div>
  );
};

export default ChartComponent;
