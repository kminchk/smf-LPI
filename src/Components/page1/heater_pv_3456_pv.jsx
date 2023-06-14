import React from "react";
import Plot from "react-plotly.js";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

const ChartComponent = ({
  categories,
  heaterPv1,
  heaterPv2,
  heaterPv3,
  heaterPv4,
}) => {
  const latestValue1 = heaterPv1[heaterPv1.length - 1]; // ค่าล่าสุด
  const latestValue2 = heaterPv2[heaterPv2.length - 1]; // ค่าล่าสุด
  const latestValue3 = heaterPv3[heaterPv3.length - 1]; // ค่าล่าสุด
  const latestValue4 = heaterPv4[heaterPv4.length - 1]; // ค่าล่าสุด
  const datelast = categories[categories.length - 1]; // ค่าล่าสุด

  const isInRange1 = latestValue1 >= 176 && latestValue1 <= 196;
  const isInRange2 = latestValue2 >= 176 && latestValue2 <= 196;
  const isInRange3 = latestValue3 >= 176 && latestValue3 <= 196;
  const isInRange4 = latestValue4 >= 176 && latestValue4 <= 196;

  const chipColor1 = isInRange1 ? "primary" : "error";
  const chipColor2 = isInRange2 ? "primary" : "error";
  const chipColor3 = isInRange3 ? "primary" : "error";
  const chipColor4 = isInRange4 ? "primary" : "error";

  const data = [
    {
      x: categories,
      y: heaterPv1,
      type: "scatter",
      mode: "lines",
      line: {
        color: "#0161FF", // สีของเส้นหลัก
      },
      name: "heater_pv_3_pv",
    },
    {
      x: categories,
      y: heaterPv2,
      type: "scatter",
      mode: "lines",
      line: {
        color: "#0161FF", // สีของเส้นหลัก
      },
      name: "heater_pv_4_pv",
    },
    {
      x: categories,
      y: heaterPv3,
      type: "scatter",
      mode: "lines",
      line: {
        color: "#0161FF", // สีของเส้นหลัก
      },
      name: "heater_pv_5_pv",
    },
    {
      x: categories,
      y: heaterPv4,
      type: "scatter",
      mode: "lines",
      line: {
        color: "#0161FF", // สีของเส้นหลัก
      },
      name: "heater_pv_6_pv",
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
    title: "Heater PV 3,4,5,6 PV",
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
          label="heater_pv_6_pv"
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
          label="heater_pv_6_pv"
        />
        <Chip
          variant="outlined"
          color={chipColor3}
          avatar={
            <Avatar
              style={{
                width: `${
                  latestValue3.toString().length >= 3
                    ? latestValue3.toString().length * 10
                    : "auto"
                }px`,
                height: "auto",
                borderRadius: `${latestValue3.toString().length * 2}px`,
              }}
            >
              {latestValue3}
            </Avatar>
          }
          label="heater_pv_6_pv"
        />
        <Chip
          variant="outlined"
          color={chipColor4}
          avatar={
            <Avatar
              style={{
                width: `${
                  latestValue4.toString().length >= 3
                    ? latestValue4.toString().length * 10
                    : "auto"
                }px`,
                height: "auto",
                borderRadius: `${latestValue4.toString().length * 2}px`,
              }}
            >
              {latestValue4}
            </Avatar>
          }
          label="heater_pv_6_pv"
        />
      </div>
      <div>
        <Plot data={data} layout={layout} config={{ responsive: true }} />
      </div>
    </>
  );
};

export default ChartComponent;
