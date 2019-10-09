import React, { Component } from "react";
import ladies from "../seeds/ladiesdb";
import men from "../seeds/mendb";
import pairs from "../seeds/pairsdb";
import icedance from "../seeds/icedancedb";

export default class SkaterDetails extends Component {
  state = {
    skater: {}
  };

  componentDidMount() {
    let skaterSpot = this.props.match.params._id;
    let skaterDiscipline = this.props.match.params.discipline;
    let spotInDb = skaterSpot - 1;

    if (skaterDiscipline === "men") {
      this.setState({ skater: men[spotInDb] });
    } else if (skaterDiscipline === "ladies") {
      this.setState({ skater: ladies[spotInDb] });
    } else if (skaterDiscipline === "pairs") {
      this.setState({ skater: pairs[spotInDb] });
    } else if (skaterDiscipline === "icedance") {
      this.setState({ skater: icedance[spotInDb] });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="go-back-link">
          <a href={`/${this.state.skater.discipline}`}>
            Go back to skaters gallery
          </a>
        </div>

        <div className="skater-details">
          <div className="skater-left">
            <h1 className="single-skater-name">{this.state.skater.name}</h1>
            <img
              src={this.state.skater.image}
              alt={`${this.state.skater.name}`}
              className="single-skater-pic"
            />
          </div>

          <div className="skater-right">
            <h2>Representing {this.state.skater.country}</h2>
            <p>
              <b className="details-title">Track record: </b>{" "}
              {this.state.skater.record}
            </p>
            <p>{this.state.skater.description}</p>
            <p>
              <b className="details-title">Programs for the season:</b>
            </p>
            <ul className="program-list">
              <li>
                <span className="program-title">Short program: </span>
                <span> {this.state.skater.sp}</span>
              </li>
              <li>
                <span className="program-title">Free skate: </span>
                <span> {this.state.skater.fs}</span>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
