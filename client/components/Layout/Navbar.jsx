const Navbar = () => (
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
            <a className="nav-link active" aria-current="page" href="#">
              Destinations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Travel style
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/aboutus">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Contact us
            </a>
          </li>
        </ul>
        <form className="d-flex">
          <button className="btn btn-outline-success" type="submit">
            Start planning here
          </button>
        </form>
      </div>
    </div>
  </nav>
);

export default Navbar;
