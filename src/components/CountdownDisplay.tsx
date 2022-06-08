import React from "react";

interface Props {
  daysLeft: number;
  eventName: string;
}

function CountdownDisplay(props: Props) {
  const { daysLeft, eventName } = props;

  return (
    <h1 style={{ margin: "50px" }}>
      {daysLeft} days until {eventName}
    </h1>
  );
}

export default CountdownDisplay;
