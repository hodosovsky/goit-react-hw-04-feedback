// export const Feedback = () => {
//   console.log('test');
// };

import React from 'react';
import './styles.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  gooodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      total: prevState.total + 1,
    }));
  };

  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
      total: prevState.total + 1,
    }));
  };

  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
      total: prevState.total + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2 className="feedback__title">Please leave feedback</h2>
        <ul className="button__list">
          <li>
            <button
              type="button"
              className="feedback__button"
              onClick={this.gooodIncrement}
            >
              Good
            </button>
          </li>
          <li>
            <button
              type="button"
              className="feedback__button"
              onClick={this.neutralIncrement}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              type="button"
              className="feedback__button"
              onClick={this.badIncrement}
            >
              Bad
            </button>
          </li>
        </ul>
        <h2 className="statistics__title">Statistcs</h2>
        <div>
          <span className="feedback__label">Good: </span>
          <span className="positive__value">{this.state.good}</span>
        </div>
        <div>
          <span className="feedback__label">Neutral: </span>
          <span className="neutral__value">{this.state.neutral}</span>
        </div>
        <div>
          <span className="feedback__label">Bad: </span>
          <span className="bad__value">{this.state.bad}</span>
        </div>
        <div>
          <span className="total__label">Total: </span>
          <span className="Total__value">{this.state.total}</span>
        </div>
        <div>
          <span className="positive__label">Positive feedback: </span>
          <span className="positive__value">
            {Math.round((this.state.good / this.state.total) * 100) || 0}%
          </span>
        </div>
      </div>
    );
  }
}

export default Feedback;
