import React, { FormEventHandler, useEffect, useState } from "react";
import "./App.css";
import CountdownDisplay from "./components/CountdownDisplay";
import CountdownInput from "./components/CountdownInput";
import Display from "./containers/Display";
import { useCountdown } from "./helpers/useCountdown";

function App() {
  const tomorrow = new Date();
  tomorrow.setTime(tomorrow.getTime() + 24 * 60 * 60 * 1000);

  const [showEvent, setShowEvent] = useState(false);
  const [eventDate, setEventDate] = useState(tomorrow);

  const [values, setValues] = useState({
    name: "",
    eventMinute: tomorrow.getMinutes(),
    eventHour: tomorrow.getHours(),
    eventDay: tomorrow.getDate(),
    eventMonth: tomorrow.getMonth() + 1,
    eventYear: tomorrow.getFullYear(),
  });

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setEventDate(
      new Date(
        values.eventYear,
        values.eventMonth - 1,
        values.eventDay,
        values.eventHour,
        values.eventMinute
      )
    );
    setShowEvent(true);
  };

  const handleReset = () => {
    setShowEvent(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Event Countdown</p>
        {showEvent ? (
          <Display
            targetDate={eventDate}
            name={values.name}
            handleReset={handleReset}
          />
        ) : (
          <CountdownInput
            values={values}
            setValues={setValues}
            handleSubmit={handleSubmit}
          />
        )}
      </header>
    </div>
  );
}

export default App;
