import Link from "next/link";

import { signIn, signOut, useSession } from 'next-auth/client';  //for user authentication (next-auth)

const Navbar = () => {
  const [session, loadingSession] = useSession();  //for user authentication (next-auth)
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
          {
            session
              ? <>
                  {
                   session.user.email === "travellifetouroperator@gmail.com"
                   ?
                   <Link href="/admin">
                   <button className="btn btn-outline-success" type="submit">
                    Admin
                   </button>
                   </Link>
                  :
                  <form className="d-flex">
                    <Link href="/customPackage">
                      <button className="btn btn-outline-success" type="submit">
                        Custom Package
                      </button>
                    </Link>
                  </form>
                  }
                  ({session.user.name})
                  <button onClick={() => signOut()}>Sign Out</button>
                </>
              : <button style={{border: 0, background: "transparent"}} onClick={() => signIn()}>Sign In</button>
          }
        </div>
      </div>
    </nav>
  </div>
);
  }

export default Navbar;
