// import Appbar from "../Components/Appbar/Appbar";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Line from "../components/linechart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Page1() {
  return (
    <React.Fragment>
      {/* <Appbar /> */}
      <Box sx={{ display: "flex" }}>
        {/* <Appbar /> */}
        <CssBaseline />
        <DrawerHeader />
        <>
          <CssBaseline />
          <Container maxWidth="xl">
            <Grid container spacing={2} sx={{ p: 1 }}>
              {/* <Grid item xl={12}>
                {DataAPItable && DataAPItable.length > 0 && (
                  <Item>
                    <Line data={DataAPItable} titles={selectfactory.factory} />
                  </Item>
                )}
              </Grid> */}
            </Grid>
          </Container>
        </>
      </Box>
    </React.Fragment>
  );
}
