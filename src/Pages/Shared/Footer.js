import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row mx-4">
        <div className="col-lg-4">
          <p className="mt-5">
            Designed and built with all the love in the world by the Bootstrap
            team with the help of our contributors.
          </p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-3">
              <h5>Links</h5>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Docs</a>
                </li>
                <li>
                  <a href="">Example</a>
                </li>
                <li>
                  <a href="">Theme</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5>Guides</h5>
              <ul>
                <li>
                  <a href="">Getting Started</a>
                </li>
                <li>
                  <a href="">Starter template</a>
                </li>
                <li>
                  <a href="">Webpack</a>
                </li>
                <li>
                  <a href="">Parcel</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5>Projects</h5>
              <ul>
                <li>
                  <a href="">Getting Started</a>
                </li>
                <li>
                  <a href="">Starter template</a>
                </li>
                <li>
                  <a href="">Webpack</a>
                </li>
                <li>
                  <a href="">Parcel</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5>Community</h5>
              <ul>
                <li>
                  <a href="">Getting Started</a>
                </li>
                <li>
                  <a href="">Starter template</a>
                </li>
                <li>
                  <a href="">Webpack</a>
                </li>
                <li>
                  <a href="">Parcel</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
