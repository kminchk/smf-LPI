import React from "react";
import Plot from "react-plotly.js";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

const ChartComponent = ({ dataplot, categories }) => {
  // Define the keys to retrieve from dataplot
  const keys = [
    "cpk_x_data_upper_limit_pv",
    "cpk_x_data_lower_limit_pv",
    "cpk_x_data_max_pv",
    "cpk_x_data_min_pv",
    "cpk_x_data_average_pv",
    "cpk_y_data_upper_limit_pv",
    "cpk_y_data_lower_limit_pv",
    "cpk_y_data_max_pv",
    "cpk_y_data_min_pv",
    "cpk_y_data_average_pv",
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
      color="primary"
      avatar={
        <Avatar
          style={{
            width: `${
              value.toString().length >= 3
                ? value.toString().length * 10
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
      // color: key === "cycle_time_pv" ? "#FF0000" : "#0161FF",
    },
    name: key,
  }));

  const layout = {
    title: "Cycle Time",
    xaxis: {
      tickangle: -45,
      automargin: true,
    },
    yaxis: {
      title: "Sec",
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
