import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <img src={"../Nav-CF6.png"} className="App-logo" alt="logo" />
      <main className="container">
        <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">
              AVIATION JOBS AROUND THE WORLD!!!
            </h1>
            <p className="lead my-3">
              With 1000s of companies needing personel. Jobs are available and
              you decide where you go!
            </p>
            <p className="lead mb-0">
              <Link to="/" className="text-white fw-bold">
                Search Companies...
              </Link>
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="mb-0 d-inline-block mb-2 text-primary">
                  Contracts WorldWide
                </strong>
                {/* <h3 className="mb-0">Featured post</h3> */}
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <Link to="/" className="stretched-link">
                  Continue reading
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Contracts..</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Search 
                  for 
                  Contracts
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">
                  Jobs
                </strong>
                {/* <h3 className="mb-0">Post title</h3> */}
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <Link to="/" className="stretched-link">
                  Continue reading
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Jobs</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Search 
                    for open 
                    positions
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
