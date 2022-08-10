import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MediaCard = (props) => {
  const styles = {
    textDecoration: "none",
  }
  return (
    <Card
      sx={{ maxWidth: 465, backgroundColor: "#2B2B2B", marginBottom: "2rem" }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Lora, sans-serif",
          }}
        >
          {props.name}
          {props.icon}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "#fff",
            fontFamily: "Lora, sans-serif",
        }}
        >
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={props.url} target="_blank" rel="noreferrer" style={styles}>
          <Button size="small">Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
