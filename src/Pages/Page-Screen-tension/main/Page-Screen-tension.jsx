import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Container from "react-bootstrap/Container";

import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import DataTable from "../components/TableData";
import BoxPlotsData from "../components/BoxPlotsData";
import axios from "axios";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ScreenTension = () => {
  const [selectproduct_name, setSelectproduct_name] = useState({
    product_name: "ALL",
  });
  const [distinctproduct_name, setDistinctproduct_name] = useState([]);

  const [selectprocess, setSelectprocess] = useState({
    process: "ALL",
  });
  const [distinctprocess, setDistinctprocess] = useState([]);

  const [selectscreen_no, setSelectscreen_no] = useState({
    screen_no: "ALL",
  });
  const [distinctscreen_no, setDistinctscreen_no] = useState([]);

  const handleProductChange = (event, newValue) => {
    if (newValue === null) {
      setSelectproduct_name({
        product_name: "ALL",
      });
      setSelectprocess({
        process: "ALL",
      });
      setSelectscreen_no({
        screen_no: "ALL",
      });
    } else {
      setSelectproduct_name(newValue);
    }
  };

  const handleProcessChange = (event, newValue) => {
    if (newValue === null) {
      setSelectprocess({
        process: "ALL",
      });
      setSelectscreen_no({
        screen_no: "ALL",
      });
    } else {
      setSelectprocess(newValue);
      setSelectscreen_no({
        screen_no: "ALL",
      });
    }
  };
  const handlescreen_noChange = (event, newValue) => {
    if (newValue === null) {
      setSelectscreen_no({
        screen_no: "ALL",
      });
    } else {
      setSelectscreen_no(newValue);
    }
  };
  const [DataAPI, setDataAPI] = useState([]);
  const exampleData = [
    {
      id: 1,
      date_time: "2023-09-01 10:30:00",
      product_name: "Widget A",
      screen_type: "LCD",
      process: "Assembly",
      side: "Front",
      screen_no: "S123",
      machine_no: "M456",
      avg_x: 25.6,
      avg_y: 30.2,
      judge_x: "Pass",
      judge_y: "Fail",
      x_core_jugdment: "OK",
      y_core_jugdment: "Defective",
    },
    {
      id: 2,
      date_time: "2023-09-01 10:30:00",
      product_name: "Widget A",
      screen_type: "LCD",
      process: "Assembly",
      side: "Front",
      screen_no: "S123",
      machine_no: "M456",
      avg_x: 25.6,
      avg_y: 30.2,
      judge_x: "Pass",
      judge_y: "Fail",
      x_core_jugdment: "OK",
      y_core_jugdment: "Defective",
    },
  ];

  useEffect(() => {
    fetchdistinctproduct_name();
    // setDataAPI(exampleData);
  }, []);

  const fetchdistinctproduct_name = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_IP_API}${
          import.meta.env.VITE_lpi_screen_tension
        }/distinctproduct_name`
      );
      const fetchDataAPItable = response.data;
      setDistinctproduct_name([{ product_name: "ALL" }, ...fetchDataAPItable]);
      console.log(fetchDataAPItable);
    } catch (error) {
      console.error(`Error fetching distinct factories: ${error}`);
    }
  };

  useEffect(() => {
    if (selectproduct_name) {
      fetchdistinctprocess();
    }
  }, [selectproduct_name]);

  const fetchdistinctprocess = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_IP_API}${
          import.meta.env.VITE_lpi_screen_tension
        }/distinctprocess?product_name=${selectproduct_name.product_name}`
      );
      const fetchDataAPItable = response.data;
      setDistinctprocess([{ process: "ALL" }, ...fetchDataAPItable]);
      console.log(fetchDataAPItable);
    } catch (error) {
      console.error(`Error fetching distinct factories: ${error}`);
    }
  };

  useEffect(() => {
    if (selectproduct_name && selectprocess) {
      fetchdistinctscreenno();
    }
  }, [selectproduct_name, selectprocess]);

  const fetchdistinctscreenno = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_IP_API}${
          import.meta.env.VITE_lpi_screen_tension
        }/distinctscreen_no?product_name=${
          selectproduct_name.product_name
        }&process=${selectprocess.process}`
      );
      const fetchDataAPItable = response.data;
      setDistinctscreen_no([{ screen_no: "ALL" }, ...fetchDataAPItable]);
      console.log(fetchDataAPItable);
    } catch (error) {
      console.error(`Error fetching distinct factories: ${error}`);
    }
  };

  useEffect(() => {
    if (selectproduct_name && selectprocess && selectscreen_no) {
      console.log(selectproduct_name.product_name);
      console.log(selectprocess.process);
      console.log(selectscreen_no.screen_no);
      fetchDataAPI();
    }
  }, [selectproduct_name, selectprocess, selectscreen_no]);

  const fetchDataAPI = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_IP_API}${
          import.meta.env.VITE_lpi_screen_tension
        }/dataAPI?product_name=${selectproduct_name.product_name}&process=${
          selectprocess.process
        }&screen_no=${selectscreen_no.screen_no}`
      );
      const fetchDataAPItable = response.data;
      setDataAPI(fetchDataAPItable);
      console.log(fetchDataAPItable);
    } catch (error) {
      console.error(`Error fetching distinct factories: ${error}`);
      setDataAPI([]);
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <DrawerHeader />
        <>
          <CssBaseline />
          <Container maxWidth="xl">
            <Grid container spacing={1} sx={{ p: 1 }}>
              {/* <Grid item xl={12}>
              <DrawerHeader />
              </Grid> */}
              <Grid item xl={7}>
                <FormControl
                  fullWidth
                  style={{
                    marginTop: 20,
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "16px",
                  }}
                >
                  {/* <InputLabel id="product-label">Product</InputLabel> */}
                  <Item>
                    <Autocomplete
                      options={distinctproduct_name}
                      getOptionLabel={(option) => option && option.product_name}
                      value={selectproduct_name}
                      onChange={handleProductChange}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="product-select :"
                          variant="outlined"
                        />
                      )}
                    />
                  </Item>
                  <Item>
                    <Autocomplete
                      options={distinctprocess}
                      getOptionLabel={(option) => option && option.process}
                      value={selectprocess}
                      onChange={handleProcessChange}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="process :"
                          variant="outlined"
                        />
                      )}
                    />
                  </Item>
                  <Item>
                    <Autocomplete
                      options={distinctscreen_no}
                      getOptionLabel={(option) => option && option.screen_no}
                      value={selectscreen_no}
                      onChange={handlescreen_noChange}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="screen_no :"
                          variant="outlined"
                        />
                      )}
                    />
                  </Item>
                </FormControl>
              </Grid>
              <Grid item xl={12}>
                <p>LPI Screen Tension</p>
              </Grid>

              <Grid item xl={12}>
                {DataAPI &&
                DataAPI.length > 0 &&
                selectproduct_name.product_name !== "ALL" ? (
                  <Item>
                    <BoxPlotsData datas={DataAPI} />
                  </Item>
                ) : (
                  <Grid item xl={12}>
                    <Item>
                      <p>No data to display.</p>
                    </Item>
                  </Grid>
                )}
              </Grid>

              <Grid item xl={12}>
                {DataAPI && DataAPI.length > 0 ? (
                  <DataTable datas={DataAPI} />
                ) : (
                  <Grid item xl={12}>
                    <p>No data to display.</p>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Container>
        </>
      </Box>
    </React.Fragment>
  );
};

export default ScreenTension;
