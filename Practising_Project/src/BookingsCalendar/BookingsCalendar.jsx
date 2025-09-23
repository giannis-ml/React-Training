import React, { useState } from "react";
import "./BookingsCalendar.css";

export default function BookingsCalendar() {
    const [selectedDate, setSelectedDate] = useState(0);

    const dates = [
        { day: "???", date: 30 },
        { day: "???", date: 1 },
        { day: "???", date: 2 },
        { day: "???", date: 3 },
        { day: "???", date: 4 },
        { day: "???", date: 5 },
        { day: "???", date: 6 },
    ];

    const times = [
        "10:00 ?.?.",
        "10:30 ?.?.",
        "11:00 ?.?.",
        "11:30 ?.?.",
        "12:00 ?.?.",
        "12:30 ?.?.",
    ];

    return (
        <div className="calendar-container">
            <h2 className="calendar-title">???????? ???</h2>

            {/* Dates Row */}
            <div className="dates-row">
                {dates.map((d, i) => (
                    <button
                        key={i}
                        className={`date-pill ${selectedDate === i ? "active" : ""}`}
                        onClick={() => setSelectedDate(i)}
                    >
                        <span className="date-number">{d.date}</span>
                        <span className="date-day">{d.day}</span>
                    </button>
                ))}
            </div>

            {/* Time Slots */}
            <div className="times-list">
                {times.map((t, i) => (
                    <button key={i} className="time-slot">
                        {t}
                    </button>
                ))}
            </div>
        </div>
    );
}
