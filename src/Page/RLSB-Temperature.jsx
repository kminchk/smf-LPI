import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Chart from "react-apexcharts";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class Heater_pv_1_pv extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: this.props.categories,
        },
        colors: ["#0161FF", "#FF4560", "#FF4560", "#FFAB00", "#FFAB00"], // colors for the series (red and yellow)
        stroke: {
          width: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5], // Set the line widths for each series
        },
      },
      series: [
        {
          name: this.props.name1,
          data: this.props.seriesData,
        },
        {
          name: "LSL",
          // สร้างอาร์เรย์ที่มีความยาวเท่ากับ categories และใช้ค่าเป็น 205 สำหรับทุก ๆ สมาชิก
          data: Array(this.props.categories.length).fill(195),
        },
        {
          name: "USL",
          // สร้างอาร์เรย์ที่มีความยาวเท่ากับ categories และใช้ค่าเป็น 205 สำหรับทุก ๆ สมาชิก
          data: Array(this.props.categories.length).fill(215),
        },
      ],
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.seriesData !== prevProps.seriesData ||
      this.props.categories !== prevProps.categories
    ) {
      this.setState(this.getInitialState());
    }
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width="100%"
        height="100%"
      />
    );
  }
}

class Ir1_pv_12_pv extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: this.props.categories,
        },
        colors: [
          "#0161FF",
          "#0161FF",
          "#FF4560",
          "#FF4560",
          "#FFAB00",
          "#FFAB00",
        ], // colors for the series (red and yellow)
        stroke: {
          width: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5], // Set the line widths for each series
        },
      },
      series: [
        {
          name: this.props.name1,
          data: this.props.seriesData1,
        },
        {
          name: this.props.name2,
          data: this.props.seriesData2,
        },
        {
          name: "LSL",
          // สร้างอาร์เรย์ที่มีความยาวเท่ากับ categories และใช้ค่าเป็น 205 สำหรับทุก ๆ สมาชิก
          data: Array(this.props.categories.length).fill(175),
        },
        {
          name: "USL",
          // สร้างอาร์เรย์ที่มีความยาวเท่ากับ categories และใช้ค่าเป็น 205 สำหรับทุก ๆ สมาชิก
          data: Array(this.props.categories.length).fill(235),
        },
      ],
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.seriesData !== prevProps.seriesData ||
      this.props.categories !== prevProps.categories
    ) {
      this.setState(this.getInitialState());
    }
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width="100%"
        height="100%"
      />
    );
  }
}

class Heater_pv_2_pv extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: this.props.categories,
        },
        colors: ["#0161FF", "#FF4560", "#FF4560", "#FFAB00", "#FFAB00"], // colors for the series (red and yellow)
        stroke: {
          width: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5], // Set the line widths for each series
        },
      },
      series: [
        {
          name: this.props.name1,
          data: this.props.seriesData,
        },
        {
          name: "LSL",
          // สร้างอาร์เรย์ที่มีความยาวเท่ากับ categories และใช้ค่าเป็น 205 สำหรับทุก ๆ สมาชิก
          data: Array(this.props.categories.length).fill(179),
        },
        {
          name: "USL",
          // สร้างอาร์เรย์ที่มีความยาวเท่ากับ categories และใช้ค่าเป็น 205 สำหรับทุก ๆ สมาชิก
          data: Array(this.props.categories.length).fill(219),
        },
      ],
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.seriesData !== prevProps.seriesData ||
      this.props.categories !== prevProps.categories
    ) {
      this.setState(this.getInitialState());
    }
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width="100%"
        height="100%"
      />
    );
  }
}

class Ir2_pv_12_pv extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: this.props.categories,
        },
        colors: [
          "#0161FF",
          "#0161FF",
          "#FF4560",
          "#FF4560",
          "#FFAB00",
          "#FFAB00",
        ], // colors for the series (red and yellow)
        stroke: {
          width: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5], // Set the line widths for each series
        },
      },
      series: [
        {
          name: this.props.name1,
          data: this.props.seriesData1,
        },
        {
          name: this.props.name2,
          data: this.props.seriesData2,
        },
        {
          name: "LSL",
          // สร้างอาร์เรย์ที่มีความยาวเท่ากับ categories และใช้ค่าเป็น 205 สำหรับทุก ๆ สมาชิก
          data: Array(this.props.categories.length).fill(179),
        },
        {
          name: "USL",
          // สร้างอาร์เรย์ที่มีความยาวเท่ากับ categories และใช้ค่าเป็น 205 สำหรับทุก ๆ สมาชิก
          data: Array(this.props.categories.length).fill(219),
        },
      ],
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.seriesData !== prevProps.seriesData ||
      this.props.categories !== prevProps.categories
    ) {
      this.setState(this.getInitialState());
    }
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width="100%"
        height="100%"
      />
    );
  }
}

class Heater_pv_3456_pv extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: this.props.categories,
        },
        colors: [
          "#0161FF",
          "#0161FF",
          "#0161FF",
          "#0161FF",
          "#FF4560",
          "#FF4560",
          "#FFAB00",
          "#FFAB00",
        ], // colors for the series (red and yellow)
        stroke: {
          width: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5], // Set the line widths for each series
        },
      },
      series: [
        {
          name: this.props.name1,
          data: this.props.seriesData1,
        },
        {
          name: this.props.name2,
          data: this.props.seriesData2,
        },
        {
          name: this.props.name3,
          data: this.props.seriesData3,
        },
        {
          name: this.props.name4,
          data: this.props.seriesData4,
        },
        {
          name: "LSL",
          // สร้างอาร์เรย์ที่มีความยาวเท่ากับ categories และใช้ค่าเป็น 205 สำหรับทุก ๆ สมาชิก
          data: Array(this.props.categories.length).fill(176),
        },
        {
          name: "USL",
          // สร้างอาร์เรย์ที่มีความยาวเท่ากับ categories และใช้ค่าเป็น 205 สำหรับทุก ๆ สมาชิก
          data: Array(this.props.categories.length).fill(196),
        },
      ],
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.seriesData !== prevProps.seriesData ||
      this.props.categories !== prevProps.categories
    ) {
      this.setState(this.getInitialState());
    }
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width="100%"
        height="100%"
      />
    );
  }
}

class Ir1_pv_3456_pv extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: this.props.categories,
        },
        colors: [
          "#0161FF",
          "#0161FF",
          "#0161FF",
          "#0161FF",
          "#FF4560",
          "#FF4560",
          "#FFAB00",
          "#FFAB00",
        ],
        stroke: {
          width: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5], // Set the line widths for each series
        },
      },
      series: [
        {
          name: this.props.name1,
          data: this.props.seriesData1,
        },
        {
          name: this.props.name2,
          data: this.props.seriesData2,
        },
        {
          name: this.props.name3,
          data: this.props.seriesData3,
        },
        {
          name: this.props.name4,
          data: this.props.seriesData4,
        },
        {
          name: "LSL",
          data: Array(this.props.categories.length).fill(176),
        },
        {
          name: "USL",
          data: Array(this.props.categories.length).fill(196),
        },
      ],
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.seriesData !== prevProps.seriesData ||
      this.props.categories !== prevProps.categories
    ) {
      this.setState(this.getInitialState());
    }
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width="100%"
        height="100%"
      />
    );
  }
}

export default function QuantitySelect() {
  const [quantity, setQuantity] = useState(24);
  const [data, setData] = useState([]);

  const [heater_pv_1_pv, setheater_pv_1_pv] = useState([]);
  const [heater_pv_2_pv, setheater_pv_2_pv] = useState([]);
  const [heater_pv_3_pv, setheater_pv_3_pv] = useState([]);
  const [heater_pv_4_pv, setheater_pv_4_pv] = useState([]);
  const [heater_pv_5_pv, setheater_pv_5_pv] = useState([]);
  const [heater_pv_6_pv, setheater_pv_6_pv] = useState([]);
  const [ir1_pv_1_pv, setir1_pv_1_pv] = useState([]);
  const [ir1_pv_2_pv, setir1_pv_2_pv] = useState([]);
  const [ir2_pv_1_pv, setir2_pv_1_pv] = useState([]);
  const [ir2_pv_2_pv, setir2_pv_2_pv] = useState([]);
  const [ir1_pv_3_pv, setir1_pv_3_pv] = useState([]);
  const [ir1_pv_4_pv, setir1_pv_4_pv] = useState([]);
  const [ir1_pv_5_pv, setir1_pv_5_pv] = useState([]);
  const [ir1_pv_6_pv, setir1_pv_6_pv] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, [quantity]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://10.17.77.111:3001/jwdb_r23662_actv/data?hours=${quantity}`
      );
      const data = response.data;
      setData(data);

      const heater_pv_1_pv = data.map((item) => item.heater_pv_1_pv);
      const ir1_pv_1_pv = data.map((item) => item.ir1_pv_1_pv);
      const ir1_pv_2_pv = data.map((item) => item.ir1_pv_2_pv);

      const heater_pv_2_pv = data.map((item) => item.heater_pv_2_pv);
      const ir2_pv_1_pv = data.map((item) => item.ir2_pv_1_pv);
      const ir2_pv_2_pv = data.map((item) => item.ir2_pv_2_pv);

      const heater_pv_3_pv = data.map((item) => item.heater_pv_3_pv);
      const heater_pv_4_pv = data.map((item) => item.heater_pv_4_pv);
      const heater_pv_5_pv = data.map((item) => item.heater_pv_5_pv);
      const heater_pv_6_pv = data.map((item) => item.heater_pv_6_pv);
      const ir1_pv_3_pv = data.map((item) => item.ir1_pv_3_pv);
      const ir1_pv_4_pv = data.map((item) => item.ir1_pv_4_pv);
      const ir1_pv_5_pv = data.map((item) => item.ir1_pv_5_pv);
      const ir1_pv_6_pv = data.map((item) => item.ir1_pv_6_pv);

      const categories = data.map((item) => {
        let date = new Date(item.ptime);
        return date.toLocaleString();
      });

      setheater_pv_1_pv(heater_pv_1_pv);
      setheater_pv_2_pv(heater_pv_2_pv);
      setheater_pv_3_pv(heater_pv_3_pv);
      setheater_pv_4_pv(heater_pv_4_pv);
      setheater_pv_5_pv(heater_pv_5_pv);
      setheater_pv_6_pv(heater_pv_6_pv);

      setir1_pv_1_pv(ir1_pv_1_pv);
      setir1_pv_2_pv(ir1_pv_2_pv);
      setir2_pv_1_pv(ir2_pv_1_pv);
      setir2_pv_2_pv(ir2_pv_2_pv);
      setir1_pv_3_pv(ir1_pv_3_pv);
      setir1_pv_4_pv(ir1_pv_4_pv);
      setir1_pv_5_pv(ir1_pv_5_pv);
      setir1_pv_6_pv(ir1_pv_6_pv);

      setCategories(categories);
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    setData([]);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setData([]);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    setData([]);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#ffffff", height: "100vh", paddingTop: 10 }}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <TextField
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                label="Hr"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton onClick={handleDecrement}>
                        <RemoveIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleIncrement}>
                        <AddIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  inputProps: {
                    style: {
                      textAlign: "center",
                    },
                  },
                }}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={3.5}>
              <TextField
                value={`Current Date : ${categories[categories.length - 1]}`}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ minWidth: "100%" }}
                variant="standard"
              />
            </Grid>
            {data.length > 0 ? (
              <>
                <Grid item xs={12}>
                  <Card sx={{ minWidth: "100%" }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        heater_pv_1_pv
                      </Typography>{" "}
                      <CardContent
                        sx={{
                          display: "flex",
                          justifyContent: "right",
                        }}
                      >
                        heater_pv_1_pv :{" "}
                        {heater_pv_1_pv[heater_pv_1_pv.length - 1]}
                      </CardContent>
                      <Heater_pv_1_pv
                        categories={categories}
                        seriesData={heater_pv_1_pv}
                        name1={"heater_pv_1_pv"}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ minWidth: "100%" }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        ir1_pv_1_pv & ir1_pv_2_pv
                      </Typography>
                      <CardContent
                        sx={{
                          display: "flex",
                          justifyContent: "right",
                        }}
                      >
                        <div>
                          ir1_pv_1_pv : {ir1_pv_1_pv[ir1_pv_1_pv.length - 1]}{" "}
                          ir1_pv_2_pv : {ir1_pv_2_pv[ir1_pv_2_pv.length - 1]}
                        </div>
                      </CardContent>
                      <Ir1_pv_12_pv
                        categories={categories}
                        seriesData1={ir1_pv_1_pv}
                        name1={"ir1_pv_1_pv"}
                        seriesData2={ir1_pv_2_pv}
                        name2={"ir1_pv_2_pv"}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ minWidth: "100%" }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        heater_pv_2_pv
                      </Typography>
                      <CardContent
                        sx={{
                          display: "flex",
                          justifyContent: "right",
                        }}
                      >
                        heater_pv_2_pv :{" "}
                        {heater_pv_2_pv[heater_pv_2_pv.length - 1]}
                      </CardContent>
                      <Heater_pv_2_pv
                        categories={categories}
                        seriesData={heater_pv_2_pv}
                        name1={"heater_pv_2_pv"}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ minWidth: "100%" }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        ir2_pv_1_pv & ir2_pv_2_pv
                      </Typography>
                      <CardContent
                        sx={{
                          display: "flex",
                          justifyContent: "right",
                        }}
                      >
                        <div>
                          ir2_pv_1_pv :{ir2_pv_1_pv[ir2_pv_1_pv.length - 1]}{" "}
                          ir2_pv_2_pv :{ir2_pv_2_pv[ir2_pv_2_pv.length - 1]}
                        </div>
                      </CardContent>
                      <Ir2_pv_12_pv
                        categories={categories}
                        seriesData1={ir2_pv_1_pv}
                        name1={"ir2_pv_1_pv"}
                        seriesData2={ir2_pv_2_pv}
                        name2={"ir2_pv_2_pv"}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ minWidth: "100%" }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        Heater_pv_3,4,5,6_pv
                      </Typography>
                      <CardContent
                        sx={{
                          display: "flex",
                          justifyContent: "right",
                        }}
                      >
                        <div>
                          heater_pv_3_pv :{" "}
                          {heater_pv_3_pv[heater_pv_3_pv.length - 1]}{" "}
                          heater_pv_4_pv :{" "}
                          {heater_pv_4_pv[heater_pv_4_pv.length - 1]}{" "}
                          heater_pv_5_pv :{" "}
                          {heater_pv_5_pv[heater_pv_5_pv.length - 1]}{" "}
                          heater_pv_6_pv:{" "}
                          {heater_pv_6_pv[heater_pv_6_pv.length - 1]}
                        </div>
                      </CardContent>
                      <Heater_pv_3456_pv
                        categories={categories}
                        seriesData1={heater_pv_3_pv}
                        name1={"heater_pv_3_pv"}
                        seriesData2={heater_pv_4_pv}
                        name2={"heater_pv_4_pv"}
                        seriesData3={heater_pv_5_pv}
                        name3={"heater_pv_5_pv"}
                        seriesData4={heater_pv_6_pv}
                        name4={"heater_pv_6_pv"}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ minWidth: "100%" }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        Ir1_pv_3,4,5,6_pv
                      </Typography>
                      <CardContent
                        sx={{
                          display: "flex",
                          justifyContent: "right",
                        }}
                      >
                        <div>
                          ir1_pv_3_pv :{ir1_pv_3_pv[ir1_pv_3_pv.length - 1]}{" "}
                          ir1_pv_4_pv :{ir1_pv_4_pv[ir1_pv_4_pv.length - 1]}{" "}
                          ir1_pv_5_pv :{ir1_pv_5_pv[ir1_pv_5_pv.length - 1]}{" "}
                          ir1_pv_6_pv :{ir1_pv_6_pv[ir1_pv_6_pv.length - 1]}
                        </div>
                      </CardContent>
                      <Ir1_pv_3456_pv
                        categories={categories}
                        seriesData1={ir1_pv_3_pv}
                        name1={"ir1_pv_3_pv"}
                        seriesData2={ir1_pv_4_pv}
                        name2={"ir1_pv_4_pv"}
                        seriesData3={ir1_pv_5_pv}
                        name3={"ir1_pv_5_pv"}
                        seriesData4={ir1_pv_6_pv}
                        name4={"ir1_pv_6_pv"}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
