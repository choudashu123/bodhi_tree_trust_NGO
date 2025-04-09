import React from 'react'
import './TopStrip.css'

export default function TopStrip() {
  return (
    <div>
      <div className="container-fluid bg-success text-white">
        <div className="d-md-none d-flex flex-row justify-content-between align-items-center" style={{ height: "50px" }}>
          {/* Toggle button (only shown on small screens) */}
          <div className="d-flex d-md-none flex-md-row align-items-center">
            <i className="fab fa-facebook-f me-3"></i>
            <i className="fab fa-twitter"></i>
          </div>
          <button
            className="navbar-toggler text-white border-0 d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#greenStripContent"
            aria-controls="greenStripContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars fs-4"></i>
          </button>
        </div>


        {/* Collapsible content */}
        <div
          className="collapse d-md-flex justify-content-between align-items-center px-3"
          id="greenStripContent" style={{ height: "50px" }}
        >
          {/* Left nav links */}
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
            <span className="me-3">Home</span>
            <span className="me-3">Events</span>
            <span>Become a Volunteer!</span>
          </div>

          {/* Social icons (mobile only) */}
          <div className="d-none d-md-flex flex-md-row align-items-center">
            <i className="fab fa-facebook-f me-3"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>

      </div>

    </div>

  );
}
