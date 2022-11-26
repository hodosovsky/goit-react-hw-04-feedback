import { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function Feedback({ initialValue }) {
  const [good, setGood] = useState(() => initialValue);
  const [neutral, setNeutral] = useState(() => initialValue);
  const [bad, setBad] = useState(() => initialValue);

  const stateMap = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const handleLeaveFeedback = event => {
    const { name } = event.target;
    stateMap[name](prev => prev + 1);

    // switch (name) {
    //   case 'good':
    //     setGood(prevState => prevState + 1);
    //     break;
    //   case 'neutral':
    //     setNeutral(prevState => prevState + 1);
    //     break;
    //   case 'bad':
    //     setBad(prevState => prevState + 1);
    //     break;
    //   default:
    //     return;
    // }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(stateMap)}
          onLeaveFeedback={handleLeaveFeedback}
        />
        <h3>Statistics</h3>
        {bad || good || neutral > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + neutral + bad}
            positivePercentage={Math.round(
              (good / (good + neutral + bad)) * 100
            )}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

Feedback.propTypes = {
  initialValue: PropTypes.number.isRequired,
};

// class Feedback extends Component {
//   static propTypes = {};
//   state = {
//     good: this.props.initialValue,
//     neutral: this.props.initialValue,
//     bad: this.props.initialValue,
//   };

//   onLeaveFeedback = event => {
//     const name = event.target.name;
//     console.dir(event.target);
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   total = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   positivePercentage = () => {
//     return Math.round(
//       (this.state.good /
//         (this.state.good + this.state.neutral + this.state.bad)) *
//         100
//     );
//   };

//   render() {
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//           <h3>Statistics</h3>
//           {Object.values(this.state).some(item => item > 0) ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.total()}
//               positivePercentage={this.positivePercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

export default Feedback;
