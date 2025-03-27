"use client";

export const CalendarIframe = () => {
  return (
    <div style={{ width: "100%", height: "1000px" }}>
      <iframe
        src="https://calendar.app.google/9CRgnEgsD24LwSbh6"
        style={{ border: 0, width: "100%", height: "100%" }}
        frameBorder="0"
        title="calendrier pour prendre un rendez-vous"
      ></iframe>
    </div>
  );
};