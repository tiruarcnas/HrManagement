import React from "react";
import Box from "@mui/material/Box";
import UserDashBoard from "./UserDashBoard";

import Card from "../components/Cards";
import Park from "../Pages/Park";
import { Switch } from "@mui/material";
import Sliding from "../components/Carousel";
import Footer from "../components/Footer";
import Testimony from "../components/Testimony";

export default function AdminDashBoard() {
  return (
    <Box component="main">
      <UserDashBoard />
      <Sliding />
      <Card />
      <Testimony />
      <Footer />
    </Box>
  );
}
