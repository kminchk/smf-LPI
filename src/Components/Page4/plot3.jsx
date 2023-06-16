import React from "react";
import Plot from "react-plotly.js";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

const ChartComponent = ({ dataplot, categories }) => {
  // Define the keys to retrieve from dataplot
  const keys = [
    "l_arm_measurement_x_value_pv",
    "l_arm_measurement_y_value_pv",
    // "l_arm_measurement_x_max_pv",
    // "l_arm_measurement_y_max_pv",
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
      color={value <= 25 && value >= -25 ? "primary" : "error"}
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
      color:
        key === "cpk_x_data_upper_limit_pv" ||
        key === "cpk_x_data_lower_limit_pv" ||
        key === "cpk_y_data_upper_limit_pv" ||
        key === "l_arm_measurement_y_max_pv"
          ? "#00939A"
          : "",
    },
    name: key,
  }));

  // เพิ่มเส้น Trace อีก 1 เส้น
  data.push({
    x: categories,
    y: Array(categories.length).fill(25),
    type: "scatter",
    mode: "lines",
    line: {
      color: "#ED4B04 ", // เปลี่ยนสีตามต้องการ
    },
    name: "Target+", // แทนที่ "Another Trace" ด้วยชื่อที่ต้องการ
  });
  // เพิ่มเส้น Trace อีก 1 เส้น
  data.push({
    x: categories,
    y: Array(categories.length).fill(-25),
    type: "scatter",
    mode: "lines",
    line: {
      color: "#ED4B04 ", // เปลี่ยนสีตามต้องการ
    },
    name: "Target-", // แทนที่ "Another Trace" ด้วยชื่อที่ต้องการ
  });
  // เพิ่มเส้น Trace อีก 1 เส้น
  data.push({
    x: categories,
    y: Array(categories.length).fill(50),
    type: "scatter",
    mode: "lines",
    line: {
      color: "#FF0000", // เปลี่ยนสีตามต้องการ
    },
    name: "USL", // แทนที่ "Another Trace" ด้วยชื่อที่ต้องการ
  });
  // เพิ่มเส้น Trace อีก 1 เส้น
  data.push({
    x: categories,
    y: Array(categories.length).fill(-50),
    type: "scatter",
    mode: "lines",
    line: {
      color: "#FF0000", // เปลี่ยนสีตามต้องการ
    },
    name: "LSL", // แทนที่ "Another Trace" ด้วยชื่อที่ต้องการ
  });
  const layout = {
    title: "Measurement L_arm Data",
    xaxis: {
      tickangle: -45,
      automargin: true,
      ticktext: dataplot.map((category) => category.roll),
      tickvals: dataplot.map((_, index) => index),
    },
    yaxis: {
      title: "um.",
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
