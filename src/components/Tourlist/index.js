import React, { Component } from "react";

import Tour from "../Tour";

import "./tourlist.scss";

import { tourData } from "../../tourData";

export default class Tourlist extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    console.log(id);
  };
  render() {
    const { tours } = this.state;
    console.log(this.state.tours);
    return (
      <section className="tourlist">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
