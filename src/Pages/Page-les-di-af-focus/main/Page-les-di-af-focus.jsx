import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { format } from "date-fns";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Papa from "papaparse";
import ChartComponent1 from "../components/plot1x";

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

  const [selectedmc_code, setselectedmc_code] = useState(null);
  const [distinctmc_code, setdistinctmc_code] = useState([]);
  const fetchdistinctmc_code = async () => {
    try {
      const response = await axios.get(
        "http://10.17.77.111:3001/api/asteria_lsedi_screen_exposedata/distinctMachine"
      );
      const distinctmc_code = response.data;
      setdistinctmc_code(distinctmc_code);
    } catch (error) {
      console.error(`Error fetching distinct factories: ${error}`);
    }
  };
  const handlemc_codeChange = (event, newValue) => {
    console.log(newValue);
    setselectedmc_code(newValue);
  };

  const [selecteddata_file, setselecteddata_file] = useState({
    data_file: "ALL",
  });
  const [distinctdata_file, setdistinctdata_file] = useState([]);
  const fetchdistinctdata_file = async () => {
    try {
      const response = await axios.get(
        `http://10.17.77.111:3001/api/asteria_lsedi_screen_exposedata/distinctdata_file?mc_code=${selectedmc_code.mc_code}`
      );
      const distinctdata_file = response.data;
      setdistinctdata_file([{ data_file: "ALL" }, ...distinctdata_file]);
    } catch (error) {
      console.error(`Error fetching distinct factories: ${error}`);
    }
  };
  const handledata_fileChange = (event, newValue) => {
    console.log(newValue);
    setselecteddata_file(newValue);
  };

  useEffect(() => {
    fetchdistinctmc_code();
  }, []);
  useEffect(() => {
    if (selectedmc_code && selectedmc_code.mc_code !== null) {
      fetchdistinctdata_file();
    }
  }, [selectedmc_code]);

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (
      selectedmc_code &&
      selectedmc_code.mc_code !== null &&
      selecteddata_file &&
      selecteddata_file.data_file
    ) {
      fetchDataapi();
    } else if (selectedmc_code === null) {
      setData([]);
    }
  }, [selectedmc_code, selecteddata_file, quantity]);

  const fetchDataapi = async () => {
    try {
      const response = await axios.get(
        `http://10.17.77.111:3001/api/asteria_lsedi_screen_exposedata/page5/plot?mc_code=${selectedmc_code.mc_code}&data_file=${selecteddata_file.data_file}&hours=${quantity}`
      );
      const dataapi = response.data;
      setData(dataapi);
      console.log(dataapi);
      const categories = dataapi.map((item) => {
        let date = new Date(item.processing_end_time);
        return date.toLocaleString();
      });
      setCategories(categories); // ตั้งค่า categories ที่นี่
    } catch (error) {
      console.error(`Error fetching distinct mc_codes: ${error}`);
    }
  };

  const handleExportCSV = () => {
    if (data.length > 0) {
      const csvDay = Papa.unparse(data);
      const csvdata = new Blob([csvDay], {
        type: "text/csv;charset=utf-8;",
      });
      const csvURLDay = window.URL.createObjectURL(csvdata);
      const tempLinkDay = document.createElement("a");
      tempLinkDay.href = csvURLDay;
      tempLinkDay.setAttribute("download", "data.csv");
      tempLinkDay.click();
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box maxWidth="xl" sx={{ height: 800, width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xl={2} md={2}>
              <Item>
                <Autocomplete
                  options={distinctmc_code}
                  getOptionLabel={(option) => option && option.mc_code}
                  value={selectedmc_code}
                  onChange={handlemc_codeChange}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="เลือก mc_code"
                      variant="outlined"
                    />
                  )}
                />
              </Item>
            </Grid>
            <Grid item xl={3} md={3}>
              <Item>
                <Autocomplete
                  options={distinctdata_file}
                  getOptionLabel={(option) => option && option.data_file}
                  value={selecteddata_file}
                  onChange={handledata_fileChange}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="เลือก data file"
                      variant="outlined"
                    />
                  )}
                />
              </Item>
            </Grid>
            <Grid item xl={3} md={3}>
              <Item>
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
              </Item>
            </Grid>
            <Grid item xl={2} mt={2.5}>
              <Button variant="outlined" onClick={handleExportCSV}>
                Export CSV
              </Button>
            </Grid>
            <Grid item xl={2}>
              <div style={{ display: "flex", justifyContent: "right" }}>
                <Chip
                  variant="outlined"
                  color="primary"
                  label={categories[categories.length - 1]}
                />
              </div>
            </Grid>
            {data.length > 0 ? (
              <React.Fragment>
                <Container maxWidth="xl">
                  <Box maxWidth="xl" sx={{ height: 800, width: "100%" }}>
                    <Grid container spacing={2}>
                      <Grid item xl={12} mt={2}>
                        <ChartComponent1
                          dataplot={data}
                          categories={categories}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Container>
              </React.Fragment>
            ) : (
              <Container maxWidth="xl">
                <Box maxWidth="xl" sx={{ height: 800, width: "100%" }}>
                  <Grid container spacing={2}>
                    <Grid item xl={12} mt={2}>
                      <Item>... Wait Data API ...</Item>
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            )}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
