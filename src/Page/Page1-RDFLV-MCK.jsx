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
import Autocomplete from "@mui/material/Autocomplete";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Plot from "react-plotly.js";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function QuantitySelect() {
  const [quantity, setQuantity] = useState(24);
  const [selectedMachine, setselectedMachine] = useState([]);
  const [distinctMachine, setdistinctMachine] = useState([{ mc_code: 2 }]);

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

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [quantity, selectedMachine]);

  const [creanroll_exch_period_actv_pv, setcreanroll_exch_period_actv_pv] =
    useState([]);
  const [lamiroll_exch_period_actv_pv, setlamiroll_exch_period_actv_pv] =
    useState([]);
  const [temp_upper_lami_roll_pv, settemp_upper_lami_roll_pv] = useState([]);
  const [temp_lower_lami_roll_pv, settemp_lower_lami_roll_pv] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://10.17.77.111:3001/jwdb_rdflv_mck_actv/data?hours=${quantity}machine=${selectedMachine.mc_code}`
      );
      const data = response.data;
      setData(data);
      console.log(data);

      const creanroll_exch_period_actv_pv = data.map(
        (item) => item.creanroll_exch_period_actv_pv
      );
      const lamiroll_exch_period_actv_pv = data.map(
        (item) => item.lamiroll_exch_period_actv_pv
      );
      const temp_upper_lami_roll_pv = data.map(
        (item) => item.temp_upper_lami_roll_pv
      );
      const temp_lower_lami_roll_pv = data.map(
        (item) => item.temp_lower_lami_roll_pv
      );

      const categories = data.map((item) => {
        let date = new Date(item.ptime);
        return date.toLocaleString();
      });
      setCategories(categories);
      setcreanroll_exch_period_actv_pv(creanroll_exch_period_actv_pv);
      setlamiroll_exch_period_actv_pv(lamiroll_exch_period_actv_pv);
      settemp_upper_lami_roll_pv(temp_upper_lami_roll_pv);
      settemp_lower_lami_roll_pv(temp_lower_lami_roll_pv);
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
  };

  useEffect(() => {
    fetchDistinctMachine();
  }, []);

  const fetchDistinctMachine = async () => {
    try {
      const response = await axios.get(
        "http://10.17.77.111:3001/jwdb_rdflv_mck_actv/distinctMachine"
      );
      const distinctMachine = response.data;
      setdistinctMachine(distinctMachine);
    } catch (error) {
      console.error(`Error fetching distinct machines: ${error}`);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#ffffff", height: "100vh", paddingTop: 10 }}>
          <Grid container spacing={2}>
            <Grid item xs={2} md={3}>
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
            <Grid item xs={3} md={3}>
              <Item>
                <Autocomplete
                  options={distinctMachine}
                  getOptionLabel={(option) => option.mc_code}
                  value={selectedMachine}
                  onChange={(event, newValue) => setselectedMachine(newValue)}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="เลือก Machine"
                      variant="outlined"
                    />
                  )}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
