import React, { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
      <div>
        <footer className="footer py-2 ">
          <div className="container" style={{ backgroundColor: '	#4B0082' }}> 
            <div className="row align-items-center">
              <div className="col-lg-4 text-lg-start">HOTEL RESERVATION BOOKING SYSTEM</div>
              <div className="col-lg-4 text-lg-end">
                <a className="link-dark text-decoration-none me-3" href="#!">
                  Privacy Policy:
                </a>
                <a className="link-dark text-decoration-none" href="#!">
                  Terms of Use and Conditons
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
