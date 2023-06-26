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
import ChartComponent from "../components/plot1x";
import ChartComponent2 from "../components/plot2";
import ChartComponent3 from "../components/plot3";
import ChartComponent4 from "../components/plot4";
import ChartComponent5 from "../components/plot5";
import Papa from "papaparse";

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
        "http://10.17.77.111:3001/api/jwdb_rphp_beac_actv/distinctmc_code"
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

  useEffect(() => {
    fetchdistinctmc_code();
  }, []);

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (selectedmc_code !== null) {
      fetchDataapi();
    } else if (selectedmc_code === null) {
      setData([]);
    }
  }, [selectedmc_code, quantity]);

  const fetchDataapi = async () => {
    try {
      const response = await axios.get(
        `http://10.17.77.111:3001/api/jwdb_rphp_beac_actv/data-plot?mc_code=${selectedmc_code.mc_code}&hours=${quantity}`
      );
      const dataapi = response.data;
      setData(dataapi);
      console.log(dataapi);
      const categories = dataapi.map((item) => {
        let date = new Date(item.ptime);
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
            <Grid item xs={3} md={3}>
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

            <Grid item xs={3} md={3}>
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
            <Grid item xs={2} mt={2.5}>
              <Button variant="outlined" onClick={handleExportCSV}>
                Export CSV
              </Button>
            </Grid>
            <Grid item xs={4}>
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
                        <ChartComponent4
                          dataplot={data}
                          categories={categories}
                        />
                      </Grid>
                      <Grid item xl={12} mt={2}>
                        <Item>
                          <ChartComponent
                            dataplot={data}
                            categories={categories}
                          />
                        </Item>
                      </Grid>
                      <Grid item xl={12} mt={2}>
                        <Item>
                          <ChartComponent2
                            dataplot={data}
                            categories={categories}
                          />
                        </Item>
                      </Grid>
                      <Grid item xl={12} mt={2}>
                        <Item>
                          <ChartComponent3
                            dataplot={data}
                            categories={categories}
                          />
                        </Item>
                      </Grid>
                      {/* <Grid item xl={12} mt={2}>
                        <Item>
                          <ChartComponent4
                            dataplot={data}
                            categories={categories}
                          />
                        </Item>
                      </Grid> */}
                      <Grid item xl={12} mt={2}>
                        <Item>
                          <ChartComponent5
                            dataplot={data}
                            categories={categories}
                          />
                        </Item>
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
