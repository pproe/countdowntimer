import React from "react";

interface Props {
  timeLeft: number[];
  eventName: string;
  handleReset: Function;
}

function CountdownDisplay(props: Props) {
  const { timeLeft, eventName, handleReset } = props;
  const [days, hours, minutes, seconds] = timeLeft;

  return (
    <div>
      <h1 style={{ margin: "50px" }}>
        {eventName} in {days}:{hours}:{minutes}:{seconds}
      </h1>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}

export default CountdownDisplay;
