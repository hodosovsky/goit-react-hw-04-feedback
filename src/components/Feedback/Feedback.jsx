// export const Feedback = () => {
//   console.log('test');
// };

import { Component } from 'react';
import './styles.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onLeaveFeedback = event => {
    const name = event.target.name;
    console.dir(event.target);
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <h3>Statistics</h3>
          {Object.values(this.state).some(item => item > 0) ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.total()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
