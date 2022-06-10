import React from "react";

interface Props {
  daysLeft: number;
  eventName: string;
  handleReset: Function;
}

function CountdownDisplay(props: Props) {
  const { daysLeft, eventName, handleReset } = props;

  return (
    <div>
      <h1 style={{ margin: "50px" }}>
        {daysLeft} days until {eventName}
      </h1>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}

export default CountdownDisplay;
