import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/client"; //for user authentication (next-auth)

const Navbar = () => {
  const [session, loadingSession] = useSession(); //for user authentication (next-auth)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
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
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/tours">
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
            {session ? (
              <>
                {session.user.email === "travellifetouroperator@gmail.com" ? (
                  <Link href="/admin">
                    <a className="btn btn-outline-success" type="submit">
                      Admin
                    </a>
                  </Link>
                ) : (
                  <Link href="/customPackage">
                    <a className="btn btn-outline-success" type="submit">
                      Custom Package
                    </a>
                  </Link>
                )}
                <div style={{ padding: "1rem .3rem" }}>
                  Hi, {session.user.name.split(" ")[0]}
                </div>
                <button
                  className="btn btn-outline-success"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                className="btn btn-outline-success"
                onClick={() => signIn()}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
