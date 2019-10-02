import React, { Component } from "react";
import ladies from "../seeds/ladiesdb";
import men from "../seeds/mendb";

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
    }
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div class="go-back-link">
          <a href={`/${this.state.skater.discipline}`}>
            Go back to skaters gallery
          </a>
        </div>

        <div class="skater-details">
          <div class="skater-left">
            <h1 class="single-skater-name">{this.state.skater.name}</h1>
            <img src={this.state.skater.image} alt="skater-pic" />
          </div>

          <div class="skater-right">
            <h2>Representing {this.state.skater.country}</h2>
            <p>
              <b>Track record: </b> {this.state.skater.record}
            </p>
            <p>{this.state.skater.description}</p>
            <br></br>
            <p>
              <b>Programs for the season:</b>
            </p>
            <ul class="program-list">
              <li>Short program: {this.state.skater.sp}</li>
              <li>Free skate: {this.state.skater.fs}</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
