import React from "react";
import "./InfoBox.css";

import { Card, CardContent, Typography, active } from "@material-ui/core";
function InfoBox({ title, cases, isRed, active, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infobox--selected"} ${
        isRed && "infobox--red"
      }`}
    >
      <CardContent>
        {/* title */}
        <Typography color="textSecondary" className="infoBox__title">
          {title}
        </Typography>
        {/* no of cases */}
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>
        {/* total */}
        <Typography color="textSecondary" className="infoBox__total">
          {total} Total{" "}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
