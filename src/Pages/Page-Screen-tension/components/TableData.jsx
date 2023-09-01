import React, { useState, useEffect } from "react";
import "./CSS/TableData.css";

import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "date_time", headerName: "Date Time", width: 160, align: "center" },
  { field: "product_name", headerName: "Product Name", width: 220 },
  { field: "screen_type", headerName: "Type", width: 100 },
  { field: "process", headerName: "Process", width: 100 },
  { field: "side", headerName: "Side", width: 100 },
  { field: "screen_no", headerName: "Screen No.", width: 160 },
  { field: "machine_no", headerName: "Machine No.", width: 120 },
  { field: "avg_x", headerName: "Avg X", width: 80 },
  { field: "avg_y", headerName: "Avg Y", width: 80 },
  {
    field: "judge_x",
    headerName: "Judge X",
    width: 100,
    // align: "center",
    renderCell: (params) => {
      const judgeXValue = params.value; // ค่าของคอลัมน์ "judge_x" ในแถวนั้น ๆ
      const result = judgeXValue === 1 ? "FAIL" : "PASS"; // กำหนดเงื่อนไขตามที่ต้องการ
      const backgroundColor = judgeXValue === 1 ? "#E74C3C" : "#58D68D";
      return (
        <span
          style={{
            backgroundColor,
            width: 70,
            height: 40,
            color: "black",
            borderRadius: "10px",
            fontSize: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {result}
        </span>
      ); // แสดงผลลัพธ์
    },
  },

  {
    field: "judge_y",
    headerName: "Judge Y",
    width: 90,
    // align: "center",
    renderCell: (params) => {
      const judgeYValue = params.value; // ค่าของคอลัมน์ "judge_y" ในแถวนั้น ๆ
      const result = judgeYValue === 1 ? "FAIL" : "PASS"; // ใช้เงื่อนไขเดียวกับคอลัมน์ "judge_x"
      const backgroundColor = judgeYValue === 1 ? "#E74C3C" : "#58D68D";
      return (
        <span
          style={{
            backgroundColor,
            width: 70,
            height: 40,
            color: "black",
            borderRadius: "10px",
            fontSize: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {result}
        </span>
      ); // แสดงผลลัพธ์
    },
  },
  {
    field: "x_core_jugdment",
    headerName: "X Core Judge",
    width: 120,
    align: "center",
    renderCell: (params) => {
      const xCoreValue = params.value;
      const backgroundColor = xCoreValue === "FAIL" ? "#E74C3C" : "#58D68D";
      return (
        <span
          style={{
            backgroundColor,
            width: 70,
            height: 40,
            color: "black",
            borderRadius: "10px",
            fontSize: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {xCoreValue}
        </span>
      );
    },
  },
  {
    field: "y_core_jugdment",
    headerName: "Y Core Judge",
    width: 120,

    renderCell: (params) => {
      const yCoreValue = params.value;
      const backgroundColor = yCoreValue === "FAIL" ? "#E74C3C" : "#58D68D";
      return (
        <span
          style={{
            backgroundColor,
            width: 70,
            height: 40,
            color: "black",
            borderRadius: "10px",
            fontSize: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {yCoreValue}
        </span>
      );
    },
  },
];

const DataTable = ({ datas }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    console.log(datas);
    setRows(datas);
  }, [datas]);

  return (
    <div style={{ height: 480, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[50]}
        disableSelectionOnClick
        headerClassName="table-header"
      />
    </div>
  );
};

export default DataTable;
