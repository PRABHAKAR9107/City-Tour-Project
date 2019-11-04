import React, { Component } from "react";

import "./tour.scss";

export default class Tour extends Component {
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="tour image" />
          <span className="close-btn">
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-about">
          <h3>{name}</h3>
          <h4>{city}</h4>
          <h5>
            <span>
              <i className="fas fa-caret-square-down" />
            </span>
            {info}
          </h5>
        </div>
      </article>
    );
  }
}
