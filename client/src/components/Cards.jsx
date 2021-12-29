import React, { useState } from "react";
import { Route } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import "./Cards.css";
import "./testimony.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out This Top Restaurant</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div>
            <a href="/park">
              <CardMedia
                component="img"
                className="image"
                image="images/img-1.jpg"
                alt="The Park"
              />
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  The Park
                </Typography>
              </CardContent>
            </a>
          </div>
          <div>
            <a href="/novotel">
              <CardMedia
                component="img"
                className="image"
                image="images/img-2.jpg"
                alt="Novotel"
              />
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Novotel
                </Typography>
              </CardContent>
            </a>
          </div>
          <div>
            <a href="/hoteltaj">
              <CardMedia
                component="img"
                className="image"
                image="images/img-3.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  My Restaurant{" "}
                </Typography>
              </CardContent>
            </a>
          </div>
          <div>
            <a href="/myrestrarunt">
              <CardMedia
                component="img"
                className="image"
                image="images/img-4.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Drive In
                </Typography>
              </CardContent>
            </a>
          </div>
          <div>
            <a href="/#">
              <CardMedia
                component="img"
                className="image"
                image="images/img-5.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                 Dasapalla
                </Typography>
              </CardContent>
            </a>
          </div>
          <div>
            <a href="#">
              <CardMedia
                component="img"
                className="image"
                image="images/img-6.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Dolphin
                </Typography>
              </CardContent>
            </a>
          </div>
        </div>
      </div>
    </div>
    // <div className="cards">
    //   <h1>Check out these EPIC Restaurant!</h1>
    //   <div className="cards__container">
    //     <div className="cards__wrapper">
    //       <ul className="cards__items">
    //         <CardItem
    //           src="images/img-1.jpg"
    //           text="The Park"
    //           label="Adventure"
    //           path="/park"
    //         />
    //         <CardItem
    //           src="images/img-2.jpg"
    //           text="Novotel"
    //           label="Luxury"
    //           path="/novotel"
    //         />
    //         <CardItem
    //           src="images/img-3.jpg"
    //           text="My  Restaurant"
    //           label="Luxury"
    //           path="/myr"
    //         />
    //         <CardItem
    //           src="images/img-9.jpg"
    //           text="Alpha"
    //           label="Adrenaline"
    //           path="/alpha"
    //         />
    //         <CardItem
    //           src="images/img-10.jpg"
    //           text="Barbecue Nation"
    //           label="Adrenaline"
    //           path="/Barbecue"
    //         />
    //       </ul>
    //       <ul className="cards__items">
    //         <CardItem
    //           src="images/img-4.jpg"
    //           text="Vizag Drive In"
    //           label="Mystery"
    //           path="/drivein"
    //         />
    //         <CardItem
    //           src="images/img-5.jpg"
    //           text="Hotel Taj"
    //           label="Adventure"
    //           path="/taj"
    //         />
    //         <CardItem
    //           src="images/img-6.jpg"
    //           text="Daspalla"
    //           label="Adrenaline"
    //           path="/daspalla"
    //         />
    //         <CardItem
    //           src="images/img-7.jpg"
    //           text="Paradise"
    //           label="Adrenaline"
    //           path="/paradise"
    //         />
    //         <CardItem
    //           src="images/img-11.jpg"
    //           text="Reboot"
    //           label="Adrenaline"
    //           path="/reboot"
    //         />
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Cards;
