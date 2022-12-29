import PropTypes from "prop-types";

const User = ({ user }) => {
  return (
    <li className="user">
      <p>Username: {user.username}</p>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
