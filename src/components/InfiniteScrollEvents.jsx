import React from "react";
import "./InfiniteScrollEvents.css";

const InfiniteScrollEvents = ({ items }) => {
  return (
    <div className="events-container">
      {items.map((event, index) => (
        <div key={index} className="event-card">
          {event.image && (
            <img
              src={event.image}
              alt={event.title}
              className="event-image"
            />
          )}
          <h3>{event.title}</h3>
          <p><strong>{event.date}</strong></p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfiniteScrollEvents;
