import { formatCurrency } from "../utils/formatCurrency";

const Navbar = ({ setPage }) => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setPage("home");
          }}
        >
          Pizzería Mamma Mia!
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <button
                className="btn btn-outline-light btn-sm rounded-pill my-1"
                onClick={() => setPage("home")}
              >
                🍕 Home
              </button>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm rounded-pill my-1">
                    🔓 Profile
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm rounded-pill my-1">
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light btn-sm rounded-pill my-1"
                    onClick={() => setPage("login")}
                  >
                    🔐 Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light btn-sm rounded-pill my-1"
                    onClick={() => setPage("register")}
                  >
                    🔐 Register
                  </button>
                </li>
              </>
            )}
          </ul>

          <button className="btn btn-outline-info rounded-pill fw-bold ms-lg-auto my-1">
            🛒 Total: ${formatCurrency(total)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
