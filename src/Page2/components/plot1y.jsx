import React from "react";
import Plot from "react-plotly.js";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

const ChartComponent = ({ dataplot, categories }) => {
  // Define the keys to retrieve from dataplot
  const keys = [
    //"after_vac_center_y_pv",
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
      color={value >= -35 && value <= 35 ? "primary" : "error"}
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
    type: "scattergl",
    mode: "lines+markers",
    // line: {
    //   color: key === "after_vac_center_y_pv" ? "#FF0000" : "#0161FF",
    // },
    name: key,
  }));
  data.push({
    x: categories,
    y: dataplot.map((item) => item.algnlim_cmrpitc_y_sv), // แทนที่ `another_key` ด้วยชื่อ key ที่ต้องการ
    type: "scattergl",
    mode: "lines",
    line: {
      color: "#FF0000", // เปลี่ยนสีตามต้องการ
    },
    name: "(+)algnlim_cmrpitc_y_sv", // แทนที่ "Another Trace" ด้วยชื่อที่ต้องการ
  });
  data.push({
    x: categories,
    y: dataplot.map((item) => -item.algnlim_cmrpitc_y_sv), // แทนที่ `another_key` ด้วยชื่อ key ที่ต้องการ
    type: "scattergl",
    mode: "lines",
    line: {
      color: "#FF0000", // เปลี่ยนสีตามต้องการ
    },
    name: "(-)algnlim_cmrpitc_y_sv", // แทนที่ "Another Trace" ด้วยชื่อที่ต้องการ
  });
  // เพิ่มเส้น Trace อีก 1 เส้น
  data.push({
    x: categories,
    y: Array(categories.length).fill(45),
    type: "scattergl",
    mode: "lines",
    line: {
      color: "#F57C00", // เปลี่ยนสีตามต้องการ
    },
    name: "Ref Max", // แทนที่ "Another Trace" ด้วยชื่อที่ต้องการ
  });

  // เพิ่มเส้น Trace อีก 1 เส้น
  data.push({
    x: categories,
    y: Array(categories.length).fill(-45),
    type: "scattergl",
    mode: "lines",
    line: {
      color: "#F57C00", // เปลี่ยนสีตามต้องการ
    },
    name: "Ref Min", // แทนที่ "Another Trace" ด้วยชื่อที่ต้องการ
  });
  const layout = {
    title: "Alignment Y",
    xaxis: {
      tickangle: -45,
      automargin: true,
    },
    yaxis: {
      title: "um",
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
