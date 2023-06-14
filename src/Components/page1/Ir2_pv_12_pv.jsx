import React from "react";
import Plot from "react-plotly.js";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

const ChartComponent = ({ ir2_pv_1_pv, ir2_pv_2_pv, title, categories }) => {
  const latestValue1 = ir2_pv_1_pv[ir2_pv_1_pv.length - 1]; // ค่าล่าสุด
  const latestValue2 = ir2_pv_2_pv[ir2_pv_2_pv.length - 1]; // ค่าล่าสุด
  const datelast = categories[categories.length - 1]; // ค่าล่าสุด

  const isInRange1 = latestValue1 >= 179 && latestValue1 <= 219;
  const isInRange2 = latestValue2 >= 179 && latestValue2 <= 219;

  const chipColor1 = isInRange1 ? "primary" : "error";
  const chipColor2 = isInRange2 ? "primary" : "error";

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
    title: "IR2 PV 1,2 PV",
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
    <>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <Chip
          variant="outlined"
          color={chipColor1}
          avatar={
            <Avatar
              style={{
                width: `${
                  latestValue1.toString().length >= 3
                    ? latestValue1.toString().length * 10
                    : "auto"
                }px`,
                height: "auto",
                borderRadius: `${latestValue1.toString().length * 2}px`,
              }}
            >
              {latestValue1}
            </Avatar>
          }
          label="ir2_pv_1_pv"
        />
        <Chip
          variant="outlined"
          color={chipColor2}
          avatar={
            <Avatar
              style={{
                width: `${
                  latestValue2.toString().length >= 3
                    ? latestValue2.toString().length * 10
                    : "auto"
                }px`,
                height: "auto",
                borderRadius: `${latestValue2.toString().length * 2}px`,
              }}
            >
              {latestValue2}
            </Avatar>
          }
          label="ir2_pv_2_pv"
        />
      </div>
      <div>
        <Plot data={data} layout={layout} config={{ responsive: true }} />
      </div>
    </>
  );
};

export default ChartComponent;
