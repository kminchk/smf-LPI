import React from "react";
import Plot from "react-plotly.js";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

const ChartComponent = ({ dataplot, categories }) => {
  // Define the keys to retrieve from dataplot
  const keys = [
    "re_head1_focus",
    "re_head2_focus",
    "re_head3_focus",
    "re_head4_focus",
    "re_head5_focus",
    "re_head6_focus",
  ];

  // Retrieve the latest values for the specified keys
  const latestValues = keys.reduce((result, key) => {
    result[key] = dataplot[dataplot.length - 1][key];
    return result;
  }, {});

  const minControlValues = dataplot.map((item) => item.min_control);
  const maxControlValues = dataplot.map((item) => item.max_control);
  const latestMinControl = minControlValues[minControlValues.length - 1];
  const latestMaxControl = maxControlValues[maxControlValues.length - 1];

  const latestValueChips = Object.entries(latestValues).map(([key, value]) => (
    <Chip
      key={key}
      variant="outlined"
      color={
        value <= latestMaxControl && value >= latestMinControl
          ? "primary"
          : "error"
      }
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

  const data = Object.entries(latestValues).map(
    ([key, value], index, array) => {
      const lightness = (index / array.length) * 70 + 30; // Adjust the range of lightness values as per your preference
      const color = `hsl(210, 100%, ${lightness}%)`;

      return {
        x: categories,
        y: dataplot.map((item) => item[key]),
        type: "scatter",
        mode: "lines",
        line: {
          color,
        },
        name: key,
      };
    }
  );

  data.push({
    x: categories,
    y: dataplot.map((item) => item.min_control),
    type: "scatter",
    mode: "lines",
    line: {
      color: "#ED4B04 ",
    },
    name: "min_control",
  });
  data.push({
    x: categories,
    y: dataplot.map((item) => item.max_control),
    type: "scatter",
    mode: "lines",
    line: {
      color: "#ED4B04 ",
    },
    name: "max_control",
  });
  const layout = {
    title: "AF-Focus",
    xaxis: {
      tickangle: -45,
      automargin: true,
      // ticktext: dataplot.map((category) => category.roll),
      // tickvals: dataplot.map((_, index) => index),
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
