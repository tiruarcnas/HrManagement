import React from "react";
import CardItem from "./CardItem";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./testimony.css";

function Testimony() {
  return (
    <div className="cards">
      <h1>Testimony</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  K
                </Avatar>
              }
              title="Karthik"
              subheader="December 14, 2021"
            />
            <CardMedia
              component="img"
              className="image"
              image="images/img-4.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              Average
              </Typography>
            </CardContent>
          </div>
          <div>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  U
                </Avatar>
              }
              title="Uday"
              subheader="Novmber 14, 2021"
            />
            <CardMedia
              component="img"
              className="image"
              image="images/img-5.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                atmosphere is good
              </Typography>
            </CardContent>
          </div>
          <div>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  M
                </Avatar>
              }
              title="Murali Mohan "
              subheader="September 14, 2021"
            />
            <CardMedia
              component="img"
              className="image"
              image="images/img-9.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
               Food is Delicious
              </Typography>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function Testimony() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 325 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2021"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="images/img-2.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the
//           mussels, if you like.
//         </Typography>
//       </CardContent>

//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2021"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="images/img-2.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the
//           mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2021"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="images/img-2.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the
//           mussels, if you like.
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }
