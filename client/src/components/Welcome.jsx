import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Welcome() {
  const cardstyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <Card style={cardstyle}>
      <CardContent>
        <Typography variant="h4" component="div">
          Welcome 
        </Typography>
      </CardContent>  
    </Card>
  );
}
