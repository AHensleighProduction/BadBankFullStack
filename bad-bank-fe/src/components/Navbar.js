import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import logo from "../images/homebg.png";

function Navbar({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("bank User");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} style={{ height: "40px" }} alt= "bankLogo"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" id="nav-flex">
            {!currentUser ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/create-account/">
                    Create Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/deposit/">
                      Deposit
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/withdraw/">
                      Withdraw
                    </Link>
                  </li>

                  {currentUser.isAdmin && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/all-data/">
                        AllData
                      </Link>
                    </li>
                  )}
                </>

                <>
                
                  <li className="nav-item">
                    <span onClick={handleLogout} className="nav-link">
                      Log Out
                    </span>
                  </li>

                  <li className="nav-item">
                    <span className="nav-link">{currentUser.name}</span>
                  </li>
                </>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
