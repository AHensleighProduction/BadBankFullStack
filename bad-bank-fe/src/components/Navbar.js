import { Link , useNavigate } from "react-router-dom";
function Navbar({ currentUser, setCurrentUser }) {
  const navigate = useNavigate()
  const handleLogout= () =>{
    setCurrentUser(null)
    localStorage.removeItem("bank User")
    navigate("/")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          BadBank
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
          <ul className="navbar-nav">
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

                <li className="nav-item">
                  <span onClick = {handleLogout} className="nav-link">Log Out</span>
                </li>

                <li className="nav-item">
                  <span className="nav-link">{currentUser.name}</span>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/all-data/">
                    AllData
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
