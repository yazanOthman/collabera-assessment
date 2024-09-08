"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Calculator = () => {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [total, setTotal] = useState<number>();

  const handleCalculation = () => {
    setTotal(Number(firstNum) + Number(secondNum));
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
          height: "100vh",
        }}
      >
        <h1 style={{ font: "bold", marginBottom: "1rem" }}>
          Adding Two Number
        </h1>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          value={firstNum}
          onChange={(e) => setFirstNum(e.target.value)}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          value={secondNum}
          onChange={(e) => setSecondNum(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleCalculation}
          disabled={firstNum === "" || secondNum === ""}
        >
          Add Two number
        </Button>
        <div style={{ marginTop: "1rem" }}> Total: {total}</div>
      </Box>
    </div>
  );
};

export default Calculator;
