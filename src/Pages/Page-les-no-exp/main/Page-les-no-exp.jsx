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
  const [DataAPItable, setDataAPItable] = React.useState([]);
  const [selectfactory, setSelectfactory] = React.useState({
    factory: "ALL",
  });
  const [distinctfactory, setDistinctfactory] = React.useState([]);

  const [selectmc_code, setSelectmc_code] = React.useState({
    mc_code: "ALL",
  });
  const [distinctmc_code, setDistinctmc_code] = React.useState([]);
  const [selectprocess, setSelectprocess] = React.useState({
    process: "ALL",
  });
  const [distinctprocess, setDistinctprocess] = React.useState([]);

  const [selectpos_no, setSelectpos_no] = React.useState({
    pos_no: "ALL",
  });
  const [distinctpos_no, setDistinctpos_no] = React.useState([]);

  const [selectproduct_name, setSelectproduct_name] = React.useState({
    product_name: "ALL",
  });
  const [distinctproduct_name, setDistinctproduct_name] = React.useState([]);

  React.useEffect(() => {
    fetchdistinctfactory();
  }, []);

  React.useEffect(() => {
    if (selectfactory) {
      // fetchDataAPItable();
      fetchdistinctmc_code();
    }
  }, [selectfactory]);

  React.useEffect(() => {
    if (selectfactory && selectmc_code) {
      // fetchDataAPItable();
      fetchdistinctprocess();
    }
  }, [selectfactory, selectmc_code]);

  React.useEffect(() => {
    if (selectfactory && selectmc_code && selectprocess) {
      fetchdistinctpos_no();
    }
  }, [selectfactory, selectmc_code, selectprocess]);

  React.useEffect(() => {
    if (selectfactory && selectmc_code && selectprocess && selectpos_no) {
      fetchdistinctproduct_name();
    }
  }, [selectfactory, selectmc_code, selectprocess, selectpos_no]);

  React.useEffect(() => {
    if (
      selectfactory &&
      selectmc_code &&
      selectprocess &&
      selectpos_no &&
      selectproduct_name
    ) {
      fetchDataAPItable();
    }
  }, [
    selectfactory,
    selectmc_code,
    selectprocess,
    selectpos_no,
    selectproduct_name,
  ]);

  const fetchdistinctfactory = async () => {
    try {
      const response = await axios.get(
        `http://10.17.77.111:3001/api/fpc_lse_alignment_noexp/distinctfactory`
      );
      const fetchDataAPItable = response.data;
      -setDistinctfactory([{ factory: "ALL" }, ...fetchDataAPItable]);
      console.log(fetchDataAPItable);
    } catch (error) {
      console.error(`Error fetching distinct factories: ${error}`);
    }
  };
  const fetchdistinctmc_code = async () => {
    try {
      const response = await axios.get(
        `http://10.17.77.111:3001/api/fpc_lse_alignment_noexp/distinctmc_code?factory=${selectfactory.factory}`
      );
      const fetchDataAPItable = response.data;
      setDistinctmc_code([{ mc_code: "ALL" }, ...fetchDataAPItable]);
      console.log(fetchDataAPItable);
    } catch (error) {
      console.error(`Error fetching distinct factories: ${error}`);
    }
  };

  const fetchdistinctprocess = async () => {
    try {
      const response = await axios.get(
        "http://10.17.77.111:3001/api/fpc_lse_alignment_noexp/distinctprocess",
        {
          params: {
            factory: selectfactory.factory,
            mc_code: selectmc_code.mc_code,
          },
        }
      );
      const fetchDataAPItable = response.data;
      setDistinctprocess([{ process: "ALL" }, ...fetchDataAPItable]);
      console.log(fetchDataAPItable);
    } catch (error) {
      console.error(`Error fetching distinct factories: ${error}`);
    }
  };

  const fetchdistinctpos_no = async () => {
    try {
      const response = await axios.get(
        "http://10.17.77.111:3001/api/fpc_lse_alignment_noexp/distinctpos_no",
        {
          params: {
            factory: selectfactory.factory,
            mc_code: selectmc_code.mc_code,
            process: selectprocess.process,
          },
        }
      );
      const fetchDataAPItable = response.data;
      setDistinctpos_no([{ pos_no: "ALL" }, ...fetchDataAPItable]);
      console.log(fetchDataAPItable);
    } catch (error) {
      console.error(`Error fetching distinct factories: ${error}`);
    }
  };

  const fetchdistinctproduct_name = async () => {
    try {
      const response = await axios.get(
        "http://10.17.77.111:3001/api/fpc_lse_alignment_noexp/distinctproduct_name",
        {
          params: {
            factory: selectfactory.factory,
            mc_code: selectmc_code.mc_code,
            process: selectprocess.process,
            pos_no: selectpos_no.pos_no,
          },
        }
      );
      const fetchDataAPItable = response.data;
      setDistinctproduct_name([{ product_name: "ALL" }, ...fetchDataAPItable]);
      console.log(fetchDataAPItable);
    } catch (error) {
      console.error(`Error fetching distinct factories: ${error}`);
    }
  };
  const fetchDataAPItable = async () => {
    try {
      const response = await axios.get(
        `http://10.17.77.111:3001/api/fpc_lse_alignment_noexp/table?factory=${selectfactory.factory}&mc_code=${selectmc_code.mc_code}&process=${selectprocess.process}&pos_no=${selectpos_no.pos_no}&product_name=${selectproduct_name.product_name}`
      );
      const fetchDataAPItable = response.data;
      setDataAPItable(fetchDataAPItable);
      console.log(fetchDataAPItable);
    } catch (error) {
      console.error(`Error fetching distinct factories: ${error}`);
    }
  };
  const handlefactoryChange = (event, newValue) => {
    console.log(newValue);
    setSelectfactory(newValue);
    if (newValue === null) {
      setSelectfactory({ factory: "ALL" });
      setSelectmc_code({ mc_code: "ALL" });
      setSelectprocess({ process: "ALL" });
    } else {
      setSelectfactory(newValue);
      setSelectmc_code({ mc_code: "ALL" });
      setSelectprocess({ process: "ALL" });
    }
  };
  const handlemc_codeChange = (event, newValue) => {
    console.log(newValue);
    if (newValue === null) {
      setSelectmc_code({ mc_code: "ALL" });
      setSelectprocess({ process: "ALL" });
    } else {
      setSelectmc_code(newValue);
      setSelectprocess({ process: "ALL" });
    }
  };

  const handleprocessChange = (event, newValue) => {
    console.log(newValue);
    if (newValue === null) {
      setSelectprocess({ process: "ALL" });
    } else {
      setSelectprocess(newValue);
    }
  };

  const handlepos_noChange = (event, newValue) => {
    console.log(newValue);
    if (newValue === null) {
      setSelectpos_no({ pos_no: "ALL" });
    } else {
      setSelectpos_no(newValue);
    }
  };

  const handleproduct_nameChange = (event, newValue) => {
    console.log(newValue);
    if (newValue === null) {
      setSelectproduct_name({ product_name: "ALL" });
    } else {
      setSelectproduct_name(newValue);
    }
  };

  const formatCreateDate = (createDate) => {
    if (createDate !== null) {
      const date = new Date(createDate);
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, "0");
      const day = String(date.getUTCDate()).padStart(2, "0");
      const hours = String(date.getUTCHours()).padStart(2, "0");
      const minutes = String(date.getUTCMinutes()).padStart(2, "0");
      const seconds = String(date.getUTCSeconds()).padStart(2, "0");

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
  };

  const columnsMastermain = [
    // ... (ข้อมูลคอลัมน์เดิมที่มีอยู่แล้ว)
    {
      field: "ptime",
      headerName: "Ptime",
      width: 100,
      renderCell: (params) => (
        <Typography variant="h7">
          {formatCreateDate(params.row.ptime)}
        </Typography>
      ),
    },
    // { field: "factory", headerName: "Factory", width: 150 },
    { field: "mc_code", headerName: "Mc Code", width: 100 },
    { field: "product_name", headerName: "Product Name", width: 150 },

    { field: "process", headerName: "Process", width: 100 },
    { field: "pos_no", headerName: "Pos No", width: 100 },
    { field: "recipe_no_pv", headerName: "Recipe", width: 80 },
    {
      field: "avg_td",
      headerName: "TD",
      width: 100,
      renderCell: (params) => (
        <Typography variant="h7">{params.row.avg_td.toFixed(3)}</Typography>
      ),
    },
    {
      field: "avg_md",
      headerName: "MD",
      width: 100,
      renderCell: (params) => (
        <Typography variant="h7">{params.row.avg_md.toFixed(3)}</Typography>
      ),
    },

    // { field: "mask_td", headerName: "Mask TD", width: 150 },
    // { field: "mask_md", headerName: "Mask MD", width: 150 },
    { field: "mask_td_a", headerName: "Mask TD A", width: 100 },
    { field: "mask_md_a", headerName: "Mask MD A", width: 100 },
    { field: "diff_td1", headerName: "Diff TD1", width: 100 },
    { field: "diff_td2", headerName: "Diff TD2", width: 100 },
    {
      field: "diff_md1",
      headerName: "Diff MD1",
      width: 100,
      renderCell: (params) => (
        <Typography variant="h7">{params.row.diff_md1.toFixed(3)}</Typography>
      ),
    },
    {
      field: "diff_md2",
      headerName: "Diff MD2",
      width: 100,
      renderCell: (params) => (
        <Typography variant="h7">{params.row.diff_md2.toFixed(3)}</Typography>
      ),
    },
    { field: "exposure_count_pv", headerName: "Exposure Count PV", width: 100 },
    // { field: "product_name", headerName: "Product Name", width: 150 },
    {
      field: "al_limit_bef_contact_cam_x_sv",
      headerName: "Al Limit Bef Contact Cam X SV",
      width: 100,
    },
    {
      field: "al_limit_bef_contact_cam_y_sv",
      headerName: "Al Limit Bef Contact Cam Y SV",
      width: 100,
    },
    { field: "judge_pv", headerName: "Judge PV", width: 150 },
    { field: "sht_no_pv", headerName: "Sht No PV", width: 150 },
    { field: "cycle_tm1_pv", headerName: "Cycle TM1 PV", width: 150 },
    { field: "alignment_c1_x_pv", headerName: "Alignment C1 X PV", width: 150 },
    { field: "alignment_c1_y_pv", headerName: "Alignment C1 Y PV", width: 150 },
    { field: "alignment_c2_x_pv", headerName: "Alignment C2 X PV", width: 150 },
    { field: "alignment_c2_y_pv", headerName: "Alignment C2 Y PV", width: 150 },
    { field: "alignment_c3_x_pv", headerName: "Alignment C3 X PV", width: 150 },
    { field: "alignment_c3_y_pv", headerName: "Alignment C3 Y PV", width: 150 },
    { field: "alignment_c4_x_pv", headerName: "Alignment C4 X PV", width: 150 },
    { field: "alignment_c4_y_pv", headerName: "Alignment C4 Y PV", width: 150 },
    // { field: "avg_td", headerName: "TD", width: 150 },
    // { field: "avg_md", headerName: "MD", width: 150 },
    // // { field: "mask_td", headerName: "Mask TD", width: 150 },
    // // { field: "mask_md", headerName: "Mask MD", width: 150 },
    // { field: "mask_td_a", headerName: "Mask TD A", width: 150 },
    // { field: "mask_md_a", headerName: "Mask MD A", width: 150 },
    // { field: "diff_td1", headerName: "Diff TD1", width: 150 },
    // { field: "diff_td2", headerName: "Diff TD2", width: 150 },
    // { field: "diff_md1", headerName: "Diff MD1", width: 150 },
    // { field: "diff_md2", headerName: "Diff MD2", width: 150 },
    // { field: "mask_td_a", headerName: "Mask TD A", width: 150 },
    // { field: "mask_md_a", headerName: "Mask MD A", width: 150 },
    // { field: "avg_td", headerName: "TD", width: 150 },
    // { field: "avg_md", headerName: "MD", width: 150 },
    // { field: "id", headerName: "ID", width: 100 },
  ];

  // const columnsMastermain = [
  //   // { field: "id", headerName: "ID", width: 100 },

  //   // { field: "process", headerName: "Product Item Code", width: 150 },
  //   { field: "prd_name", headerName: "Product Name", width: 150 },
  //   { field: "ro_rev", headerName: "Rev", width: 50 },
  //   // { field: "ro_seq", headerName: "RO Seq", width: 120 },
  //   { field: "roll_no", headerName: "Roll No", width: 120 },
  //   { field: "lot_no", headerName: "Lot No", width: 100 },
  //   { field: "roll_lot_count", headerName: "Roll", width: 50 },
  //   { field: "con_lot_count", headerName: "Lot", width: 50 },
  //   // { field: "current_proc_id", headerName: "Current Process ID", width: 180 },
  //   // { field: "current_process", headerName: "Current Process", width: 120 },
  //   { field: "factory", headerName: "Status", width: 100 },
  //   { field: "current_process", headerName: "Current Process", width: 120 },
  //   // { field: "std_min_lot", headerName: "Standard Min Lot", width: 180 },
  //   // {
  //   //   field: "a1a2_b1b2_a1b1_time",
  //   //   headerName: "A1A2 B1B2 A1B1 Time",
  //   //   width: 220,
  //   // },
  //   {
  //     field: "a2b1_time",
  //     headerName: "A2B1 Time",
  //     width: 120,
  //     renderCell: (params) => {
  //       let bgColor = "";
  //       let borderRadius = "4px"; // You can adjust the radius as needed

  //       if (
  //         params.value >= params.row.warning_holding_time &&
  //         params.value < params.row.lock_holding_time
  //       ) {
  //         bgColor = "rgba(255, 165, 0, 1)"; // Red with full opacity
  //       } else if (params.value > params.row.lock_holding_time) {
  //         bgColor = "rgba(255, 0, 0, 1)"; // Orange with full opacity
  //       } else if (params.value < params.row.warning_holding_time) {
  //         bgColor = "#17ea06"; // Green with full opacity
  //       } else {
  //         bgColor = "transparent"; // No bgcolor for other values
  //         borderRadius = "0"; // No border radius for other values
  //       }

  //       const cellStyle = {
  //         backgroundColor: bgColor,
  //         borderRadius: borderRadius,
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100%",
  //         width: "100%",
  //       };

  //       return <div style={cellStyle}>{params.value}</div>;
  //     },
  //   },
  //   // { field: "lock_holding_time", headerName: "Lock Holding Time", width: 180 },
  //   {
  //     field: "warning_holding_time",
  //     headerName: "Warning",
  //     width: 80,
  //   },

  //   { field: "lock_holding_time", headerName: "Lock", width: 80 },
  //   { field: "a", headerName: "A", width: 80 },
  //   {
  //     field: "a1",
  //     headerName: "A1",
  //     width: 100,
  // renderCell: (params) => (
  //   <Typography variant="h7">{formatCreateDate(params.row.a1)}</Typography>
  // ),
  //   },
  //   {
  //     field: "a2",
  //     headerName: "A2",
  //     width: 100,
  //     renderCell: (params) => (
  //       <Typography variant="h7">{formatCreateDate(params.row.a2)}</Typography>
  //     ),
  //   },
  //   // { field: "stop_proc_id", headerName: "Stop Process ID", width: 180 },
  //   { field: "b", headerName: "B", width: 80 },
  //   {
  //     field: "b1",
  //     headerName: "B1",
  //     width: 120,
  //     renderCell: (params) => (
  //       <Typography variant="h7">{formatCreateDate(params.row.b1)}</Typography>
  //     ),
  //   },
  //   {
  //     field: "b2",
  //     headerName: "B2",
  //     width: 120,
  //     renderCell: (params) => (
  //       <Typography variant="h7">{formatCreateDate(params.row.b2)}</Typography>
  //     ),
  //   },
  //   {
  //     field: "a1a2_b1b2_a1b1_time",
  //     headerName: "A1A2 B1B2 A1B1 Time",
  //     width: 220,
  //   },
  //   { field: "std_min_lot", headerName: "Standard Min Lot", width: 180 },
  //   // {
  //   //   field: "a1a2_b1b2_a1b1_time",
  //   //   headerName: "A1A2 B1B2 A1B1 Time",
  //   //   width: 220,
  //   // },
  //   {
  //     field: "warning_std_time",
  //     headerName: "Warning Standard Time",
  //     width: 220,
  //   },
  //   { field: "lock_std_time", headerName: "Lock Standard Time", width: 180 },
  //   // { field: "a2b1_time", headerName: "A2B1 Time", width: 120 },
  //   // { field: "start_proc_id", headerName: "Start Process ID", width: 180 },
  //   // { field: "a", headerName: "A", width: 100 },
  //   // {
  //   //   field: "a1",
  //   //   headerName: "A1",
  //   //   width: 100,
  //   //   renderCell: (params) => (
  //   //     <Typography variant="h7">{formatCreateDate(params.row.a1)}</Typography>
  //   //   ),
  //   // },
  //   // { field: "a2", headerName: "A2", width: 100 },
  //   // // { field: "stop_proc_id", headerName: "Stop Process ID", width: 180 },
  //   // { field: "b", headerName: "B", width: 100 },
  //   // { field: "b1", headerName: "B1", width: 100 },
  //   // { field: "b2", headerName: "B2", width: 100 },
  //   {
  //     field: "current_time",
  //     headerName: "Current Time",
  //     width: 100,
  //     renderCell: (params) => (
  //       <Typography variant="h7">{formatCreateDate(params.row.a1)}</Typography>
  //     ),
  //   },
  // ];

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
              <Grid item xl={2}>
                <Item>
                  <Autocomplete
                    size="small"
                    options={distinctfactory}
                    getOptionLabel={(option) => option && option.factory}
                    value={selectfactory}
                    onChange={handlefactoryChange}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Proc Status :"
                        variant="outlined"
                      />
                    )}
                  />
                </Item>
              </Grid>

              <Grid item xl={2}>
                <Item>
                  <Autocomplete
                    size="small"
                    options={distinctmc_code}
                    getOptionLabel={(option) => option && option.mc_code}
                    value={selectmc_code}
                    onChange={handlemc_codeChange}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Condition Desc :"
                        variant="outlined"
                      />
                    )}
                  />
                </Item>
              </Grid>
              <Grid item xl={2}>
                <Item>
                  <Autocomplete
                    size="small"
                    options={distinctprocess}
                    getOptionLabel={(option) => option && option.process}
                    value={selectprocess}
                    onChange={handleprocessChange}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Prd Item Codes :"
                        variant="outlined"
                      />
                    )}
                  />
                </Item>
              </Grid>

              <Grid item xl={2}>
                <Item>
                  <Autocomplete
                    size="small"
                    options={distinctpos_no}
                    getOptionLabel={(option) => option && option.pos_no}
                    value={selectpos_no}
                    onChange={handlepos_noChange}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Prd Item Codes :"
                        variant="outlined"
                      />
                    )}
                  />
                </Item>
              </Grid>

              <Grid item xl={2}>
                <Item>
                  <Autocomplete
                    size="small"
                    options={distinctproduct_name}
                    getOptionLabel={(option) => option && option.product_name}
                    value={selectproduct_name}
                    onChange={handleproduct_nameChange}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Prd Item Codes :"
                        variant="outlined"
                      />
                    )}
                  />
                </Item>
              </Grid>

              <Grid item xl={12}>
                <Item>
                  <DataGrid
                    rows={DataAPItable}
                    columns={columnsMastermain}
                    pagination
                    getRowHeight={() => "auto"}
                    pageSize={5}
                    sx={{ height: 700, maxWidth: "100%" }}
                    slots={{
                      toolbar: GridToolbar,
                    }}
                    slotProps={{
                      toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                      },
                    }}
                  />
                </Item>
              </Grid>
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
