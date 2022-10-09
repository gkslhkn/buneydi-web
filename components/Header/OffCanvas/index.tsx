/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const OffCanvas: NextPage = () => {
  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasMenu">
      <div className="offcanvas-header justify-content-end">
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body d-flex flex-column pt-0">
        <div>
          <img
            className="light-mode-item my-3"
            src="assets/images/logo.svg"
            alt="logo"
          />
          <img
            className="dark-mode-item my-3"
            src="assets/images/logo-light.svg"
            alt="logo"
          />
          <p>
            The next-generation blog, news, and magazine theme for you to start
            sharing your stories today!{" "}
          </p>
          <ul className="nav d-block flex-column my-4">
            <li className="nav-item h5">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item h5">
              <a className="nav-link" href="about-us.html">
                About
              </a>
            </li>
            <li className="nav-item h5">
              <a className="nav-link" href="post-grid.html">
                Our Journal
              </a>
            </li>
            <li className="nav-item h5">
              <a className="nav-link" href="contact-us.html">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="bg-primary bg-opacity-10 p-4 mb-4 text-center w-100 rounded">
            <span>The Blogzine</span>
            <h3>Save on Premium Membership</h3>
            <p>
              Get the insights report trusted by experts around the globe.
              Become a Member Today!
            </p>
            <a href="#" className="btn btn-warning">
              View pricing plans
            </a>
          </div>
        </div>
        <div className="mt-auto pb-3">
          <p className="text-body mb-2 fw-bold">New York, USA (HQ)</p>
          <address className="mb-0">
            750 Sing Sing Rd, Horseheads, NY, 14845
          </address>
          <p className="mb-2">
            Call:{" "}
            <a href="#" className="text-body">
              <u>469-537-2410</u> (Toll-free)
            </a>{" "}
          </p>
          <a href="#" className="text-body d-block">
            hello@blogzine.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
