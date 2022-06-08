import React, {
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  ReactPropTypes,
} from "react";
import { InputValues } from "../types";

interface Props {
  values: InputValues;
  setValues: Dispatch<InputValues>;
}

function CountdownInput(props: Props) {
  const { setValues, values } = props;

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  };

  const handleChange: ChangeEventHandler = (event) => {
    const target = event.target as HTMLInputElement;
    switch (target.id) {
      case "name":
        setValues({ ...values, name: target.value });
        break;
      case "eventYear":
        setValues({ ...values, eventYear: +target.value });
        break;
      case "eventMonth":
        setValues({ ...values, eventMonth: +target.value });
        break;
      case "eventDay":
        setValues({ ...values, eventDay: +target.value });
        break;
      default:
        console.error("Application misconfigured. Input target ID malformed.");
        break;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name
          <input
            type="text"
            id="name"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Year
          <input
            type="number"
            id="eventYear"
            value={values.eventYear}
            onChange={handleChange}
          />
        </label>
        <label>
          Month
          <input
            type="number"
            id="eventMonth"
            value={values.eventMonth}
            onChange={handleChange}
          />
        </label>
        <label>
          Day
          <input
            type="number"
            id="eventDay"
            value={values.eventDay}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}

export default CountdownInput;
