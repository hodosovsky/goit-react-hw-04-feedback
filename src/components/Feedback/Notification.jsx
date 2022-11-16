import PropTypes from 'prop-types';
const Notification = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
