import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.target);
  }

  render() {
    const { name, year, country, destination, description } = this.props;

    return (
      <div className="missions-card" data-testid="mission-card">
        <span className="mission-name" data-testid="mission-name">{name}</span>
        <span className="missions-year" data-testid="mission-year">{year}</span>
        <span className="missions-country" data-testid="mission-country">{country}</span>
        <span
          className="missions-destination"
          data-testid="mission-destination"
        >
          {destination}
        </span>
        <details>
          <summary>Descrição</summary>
          <p
            className="mission-description"
            data-testid="mission-description"
          >
            { description }
          </p>
        </details>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionCard;
