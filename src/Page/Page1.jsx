import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Plot from "react-plotly.js";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import ChartComponent from "../Components/page1/heater_pv_1_pv";
import ChartComponent2 from "../Components/page1/heater_pv_2_pv";
import ChartComponent3 from "../Components/page1/Ir1_pv_12_pv";
import ChartComponent4 from "../Components/page1/Ir2_pv_12_pv";
import ChartComponent5 from "../Components/page1/heater_pv_3456_pv";
import ChartComponent6 from "../Components/page1/Ir1_pv_3456_pv";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function QuantitySelect() {
  const [quantity, setQuantity] = useState(24);
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

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
  const [data, setData] = useState([]);

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
      console.log(data);
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
      setCategories(categories);
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
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
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
            <Grid item xs={10}>
              <div style={{ display: "flex", justifyContent: "right" }}>
                <Chip
                  variant="outlined"
                  color="primary"
                  label={categories[categories.length - 1]}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <ChartComponent
                  categories={categories}
                  heaterPv={heater_pv_1_pv}
                  title={"heater_pv_1_pv"}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <ChartComponent3
                  categories={categories}
                  ir1_pv_1_pv={ir1_pv_1_pv}
                  ir1_pv_2_pv={ir1_pv_2_pv}
                  title={"Ir1_pv_12_pv"}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <ChartComponent2
                  categories={categories}
                  heaterPv={heater_pv_2_pv}
                  title={"heater_pv_2_pv"}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <ChartComponent4
                  categories={categories}
                  ir2_pv_1_pv={ir2_pv_1_pv}
                  ir2_pv_2_pv={ir2_pv_2_pv}
                  title={"Ir2_pv_12_pv"}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <ChartComponent5
                  categories={categories}
                  heaterPv1={heater_pv_3_pv}
                  heaterPv2={heater_pv_4_pv}
                  heaterPv3={heater_pv_5_pv}
                  heaterPv4={heater_pv_6_pv}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <ChartComponent6
                  categories={categories}
                  ir1_pv_3_pv={ir1_pv_3_pv}
                  ir1_pv_4_pv={ir1_pv_4_pv}
                  ir1_pv_5_pv={ir1_pv_5_pv}
                  ir1_pv_6_pv={ir1_pv_6_pv}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
