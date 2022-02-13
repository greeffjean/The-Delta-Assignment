import React from "react";
import "./style/style.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type TGameCardProps = {
  id: string;
  size: number;
  title: string;
  description: string[];
  button: string;
  handleViewDeal: (id: string) => void
};

const GameCard: React.FunctionComponent<TGameCardProps> = ({
  id,
  size,
  title,
  description,
  button,
  handleViewDeal
}) => {
  return (
    <>
      <Card role={"gameCard"} sx={{ width: size, margin: 1 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {description[1] ? (
                <>
                  <span style={{textDecoration: "line-through"}}>
                    {"$" + description[0] + "  "}
                  </span>
                  <span style={{color: "darkcyan"}}>{"$" + description[1]}</span>
                </>
              ) : (
                <span>{"$" + description[0]}</span>
              )}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button onClick={() => handleViewDeal(id)} variant="outlined" size="small">{button}</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default GameCard;
