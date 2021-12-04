import Link from "next/link";

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="index">
          <img
            src="https://cdn-icons-png.flaticon.com/512/744/744502.png"
            alt="logo viaje"
            width="auto"
            height="40"
          />
          &nbsp;&nbsp;Turistic Life
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="http://localhost:3000/">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="http://localhost:3000/tours">
                <a className="nav-link active" aria-current="page">
                  Tours
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/aboutus">
                <a className="nav-link active" aria-current="page">
                  About us
                </a>
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link href="/customPackage">
              <button className="btn btn-outline-success" type="submit">
                Custom Package
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
