import PropTypes from 'prop-types';

const FeedbackOptions = ({
  onGooodIncrement,
  onNeutralIncrement,
  onBadIncrement,
}) => (
  <ul className="button__list">
    <li>
      <button
        type="button"
        className="feedback__button"
        onClick={onGooodIncrement}
      >
        Good
      </button>
    </li>
    <li>
      <button
        type="button"
        className="feedback__button"
        onClick={onNeutralIncrement}
      >
        Neutral
      </button>
    </li>
    <li>
      <button
        type="button"
        className="feedback__button"
        onClick={onBadIncrement}
      >
        Bad
      </button>
    </li>
  </ul>
);

FeedbackOptions.propTypes = {
  onGooodIncrement: PropTypes.func.isRequired,
  onNeutralIncrement: PropTypes.func.isRequired,
  onBadIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
