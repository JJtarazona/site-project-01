import React, { useState } from "react";
import { Calendar } from "primereact/calendar";

export default function Calendar2() {
  const [dates, setDates] = useState(null);

  return (
    <div className="card flex justify-content-center">
      <Calendar
        value={dates}
        onChange={(e) => setDates(e.value)}
        selectionMode="range"
        readOnlyInput
      />
    </div>
  );
}
