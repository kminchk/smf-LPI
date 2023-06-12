import React from "react";
import Plot from "react-plotly.js";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

const ChartComponent = ({ dataplot, categories }) => {
  // Define the keys to retrieve from dataplot
  const keys = [
    "after_vac_center_x_pv",
    "after_vac_center_y_pv",
    "after_vac_pos_1x_pv",
    "after_vac_pos_2x_pv",
    "after_vac_pos_3x_pv",
    "after_vac_pos_4x_pv",
    "after_vac_pos_1y_pv",
    "after_vac_pos_2y_pv",
    "after_vac_pos_3y_pv",
    "after_vac_pos_4y_pv",
  ];

  // Retrieve the latest values for the specified keys
  const latestValues = keys.reduce((result, key) => {
    result[key] = dataplot[dataplot.length - 1][key];
    return result;
  }, {});

  // สร้างชิปสำหรับแสดงค่าล่าสุดแต่ละตัว
  const latestValueChips = Object.entries(latestValues).map(([key, value]) => (
    <Chip
      key={key}
      variant="outlined"
      color={value <= 200000 ? "primary" : "error"}
      avatar={
        <Avatar
          style={{
            width: `${
              value.toString().length >= 3
                ? value.toString().length * 8
                : "auto"
            }px`,
            height: "auto",
            borderRadius: `${value.toString().length * 2}px`,
          }}
        >
          {value}
        </Avatar>
      }
      label={key}
    />
  ));

  // สร้างข้อมูลกราฟ
  const data = Object.entries(latestValues).map(([key, value]) => ({
    x: categories,
    y: dataplot.map((item) => item[key]),
    type: "scatter",
    mode: "lines",
    line: {
      color: "#0161FF",
    },
    name: key,
  }));

  const layout = {
    title: "Chart1",
    xaxis: {
      tickangle: -45,
      automargin: true,
    },
    yaxis: {
      title: "%",
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
        {latestValueChips}
      </div>
      <div>
        <Plot data={data} layout={layout} config={{ responsive: true }} />
      </div>
    </>
  );
};

export default ChartComponent;
