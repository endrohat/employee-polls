import { Link } from "react-router-dom";
import '../Nav.css';
import { connect } from "react-redux";
import { removeAuthedUser } from "../actions/authedUser";

const Nav = ({authedUser, users, dispatch}) => {
  if (authedUser == null || Object.keys(authedUser).length === 0) {
    return (<div></div>)
  }

  if (users == null || Object.keys(users).length === 0) {
    return (<div></div>)
  }

  const handleLogout = () => {
    console.log('User logged out');
    dispatch(removeAuthedUser())
  };

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <Link to="/" className="nav-link">
          <h1>Home</h1>
        </Link>
        <li>
          <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
        </li>
        <li>
          <Link to="/new" className="nav-link" >New</Link>
        </li>
      </div>
      <div className="nav-right">
        <img src={users[authedUser].avatarURL || 'https://via.placeholder.com/40'} alt="User Avatar" className="nav-avatar" />
        <div>{users[authedUser].id}</div>
        <button className="nav-logout-button" onClick={handleLogout} >Logout</button>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser , users}) => ({
  authedUser : authedUser,
  users : users
});
export default connect(mapStateToProps)(Nav);
