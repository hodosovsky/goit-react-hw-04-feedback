// export const Feedback = () => {
//   console.log('test');
// };

import React from 'react';
import './styles.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  gooodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  total = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positivePercentage = () => {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  };

  render() {
    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              onGooodIncrement={this.gooodIncrement}
              onNeutralIncrement={this.neutralIncrement}
              onBadIncrement={this.badIncrement}
            />
          }
        />
        {this.state.neutral !== 0 ||
        this.state.good !== 0 ||
        this.state.bad !== 0 ? (
          <Section
            title="Statistics"
            children={
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.total()}
                positivePercentage={this.positivePercentage()}
              />
            }
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default Feedback;
