import React from "react";
import { Link } from "react-router-dom";

export default function Gallery({ skaters }) {
  return (
    <React.Fragment>
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
              </Link>
              <div>
                {" "}
                <h3>{skater.name}</h3>
                <p>{skater.country}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}
