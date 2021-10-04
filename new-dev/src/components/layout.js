import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `);

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              DASCO
            </Link>
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
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className={`nav-link ${isRootPath ? "active" : null}`} to="/">
                    <span className="fa fa-home fa-fw"></span>Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === "/about" ? "active" : null}`}
                    to="/about"
                  >
                    <span className="fa fa-info fa-fw"></span>About
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/DASCOUNJ">
                    <span className="fa fa-github fa-fw"></span>Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer style={{ paddingTop: isRootPath ? "10px" : "30px", textAlign: "center" }}>
        <div className="bg-dark text-light">
          <div className="text-center p-3">
            &copy; {new Date().getFullYear()}, {data.site.siteMetadata?.author.name}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
