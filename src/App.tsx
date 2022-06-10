import React, { FormEventHandler, useEffect, useState } from "react";
import "./App.css";
import CountdownDisplay from "./components/CountdownDisplay";
import CountdownInput from "./components/CountdownInput";

function App() {
  const [daysLeft, setDaysLeft] = useState(0);
  const [showEvent, setShowEvent] = useState(false);

  const [displayValues, setDisplayValues] = useState({
    name: "",
    eventDay: 0,
    eventMonth: 0,
    eventYear: 0,
  });

  const [values, setValues] = useState({
    name: "",
    eventDay: 0,
    eventMonth: 0,
    eventYear: 0,
  });

  // Update logic for days left
  useEffect(() => {
    const today = new Date();
    const eventDate = new Date();
    eventDate.setFullYear(
      values.eventYear,
      values.eventMonth - 1,
      values.eventDay
    );

    const diffMilliseconds = eventDate.getTime() - today.getTime();
    const msPerDay = 1000 * 60 * 60 * 24;
    const diff = diffMilliseconds / msPerDay;

    setDaysLeft(diff);
  }, [values]);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    setDisplayValues(values);
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
          <CountdownDisplay
            daysLeft={daysLeft}
            eventName={values.name}
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
