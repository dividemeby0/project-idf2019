import React from "react";
import { Link } from "react-router-dom";

export default function Gallery({ skaters }) {
  let discipline = skaters[0].discipline;
  return (
    <React.Fragment>
      <h1 className="gallery-title">
        {discipline === "icedance"
          ? "Ice Dance"
          : discipline.charAt(0).toUpperCase() + discipline.slice(1)}
      </h1>
      <div id="all-skaters">
        {skaters.map((skater, i) => (
          <React.Fragment key={i}>
            <div className="skater-container">
              <Link to={`/skaters/${skater.discipline}/${skater._id}`}>
                <img
                  className="skater-image"
                  src={skater.image}
                  alt="skater pic"
                />
                <h3>{skater.name}</h3>
              </Link>
              <div>
                {" "}
                <p>{skater.country}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}
