import React, { useState } from "react";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import LockOutlinedIcon from "@mui/icons-material/AppRegistration";
import { useHistory } from "react-router-dom";
//import "./Login.css";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme();

const currencies = [
  { value: "Briyani", label: "Briyani" },
  { value: "fry piece briyani", label: "fry piece briyani" },
  { value: "Mugali briyani", label: "Mugali briyani" },
  { Value: "dum briyani", label: "dum briyani" },
  { value: "Joint Briyani", label: "Joint Briyani" },
  { value: "Boneless Briyani", label: "Boneless Briyani" },
  { value: "Pot Briyani", label: "Pot Briyani" },
  { value: "Mutton Briyani", label: "Mutton Briyani" },
  { value: "Prawn Briyani", label: "Prawn Briyani" },
  { value: "Kheema Briyani", label: "Kheema Briyani" },
  { value: "Veg Briyani", label: "Veg Briyani" },
];

export default function Signup() {
  const histroy = useHistory();

  // creating Objects for Signup
  const [user, setUser] = useState({
    item: "",
    quantity: "",
  });
  //Destructuring the objects
  const { item, quantity } = user;

  // onchangeHandler
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  //submitHandler
  console.log(user);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/items", user)
      .then((res) => alert(res.data.message));
    // histroy.push("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Place the Order
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={submitHandler}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="Item"
                  label="Item"
                  select
                  name="item"
                  label="Select"
                  value={item}
                  onChange={changeHandler}
                  helperText="Please select your Order"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                {/* <TextField
                  autoComplete="given-name"
                  name="item"
                  required
                  fullWidth
                  id="firstName"
                  label="Item"
                  autoFocus
                  value={item}
                  onChange={changeHandler}
                /> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  autoComplete="family-name"
                  value={quantity}
                  onChange={changeHandler}
                  helperText="Please select qunatity"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Place The Order
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
