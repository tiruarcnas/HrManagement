import React from "react";
import Table from "react-bootstrap/Table";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import './menu.css';
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
  </Box>
);

function Menu() {
    return (
      <Card>
        <div>
          <ul>
            <Table striped bordered hover variant="dark" className="table">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Item</th>
                  <th> Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Briyani</td>
                  <td>320</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>fry piece briyani</td>
                  <td>280</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mugali briyani</td>
                  <td>320</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>dum briyani</td>
                  <td>280</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Joint Briyani</td>
                  <td>320</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Boneless Briyani</td>
                  <td>280</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Pot Briyani</td>
                  <td>360</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Mutton Briyani</td>
                  <td>340</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Prawn Briyani</td>
                  <td>340</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Kheema Briyani</td>
                  <td>320</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Veg Briyani</td>
                  <td>200</td>
                </tr>
              </tbody>
            </Table>
          </ul>
        </div>
      </Card>
    );
}

export default Menu;
