import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <div>
      <span className="feedback__label">Good: </span>
      <span className="positive__value">{good}</span>
    </div>
    <div>
      <span className="feedback__label">Neutral: </span>
      <span className="neutral__value">{neutral}</span>
    </div>
    <div>
      <span className="feedback__label">Bad: </span>
      <span className="bad__value">{bad}</span>
    </div>
    <div>
      <span className="total__label">Total: </span>
      <span className="Total__value">{total}</span>
    </div>
    <div>
      <span className="positive__label">Positive feedback: </span>
      <span className="positive__value">{positivePercentage || 0}%</span>
    </div>
  </>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
