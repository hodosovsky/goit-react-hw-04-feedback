import PropTypes from 'prop-types';
const Notification = ({ message }) => (
  <section>
    <h2>{message}</h2>
  </section>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
