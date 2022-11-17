import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className="feedback__button"
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
