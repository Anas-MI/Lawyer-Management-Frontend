import React, { Component } from "react";

export class Contact extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <div id="contact">
          <div className="container text-center">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-8 offset-md-2">               
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="number"
                          className="form-control"
                          placeholder="Number"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="Description"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Description"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
             </div>
        </div>
      </div>

        <div id="footer">
          <div className="f-top">
            <div className="container">
            <div className="row">
                <div className="col-md-3">
                  <div className="ftr-set">
                    <h3>LOGO</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo molestias aspernatur libero nulla, qui repellendus
                      commodi id a deserunt magnam reprehenderit laboriosam
                      dolorum officiis iusto hic odit fugit expedita quos.
                    </p>
                  </div>
                </div>
                <div className="col-md-2 col-md-offset-1">
                  <div className="ftr-set">
                    <h3>Contact</h3>
                    <ul className="nav ftr-nav flex-column">
                      <li><a href="#home" className="page-scroll">Home</a></li>
                      <li><a href="#features" className="page-scroll">Feature</a></li>
                      <li><a href="#pricing" className="page-scroll">Pricing</a></li>
                      <li><a href="#blog" className="page-scroll">Blog</a></li>
                      <li><a href="#contactus" className="page-scroll">Contact us</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ftr-set">
                    <h3>Link</h3>
                    <ul className="nav ftr-nav flex-column">
                      <li><a href="#home" className="page-scroll">Work form Home</a></li>
                      <li><a href="#features" className="page-scroll">Legal Trends Report</a></li>
                      <li><a href="#pricing" className="page-scroll">Start a Law Firm</a></li>
                      <li><a href="#blog" className="page-scroll">Features</a></li>
                      <li><a href="#contactus" className="page-scroll">Blog</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="ftr-set">
                    <div className="social">
                    <h3>Address</h3>
                    <p> Voluptate quidem sapiente perferendis illum hic laboriosam?</p>
                      <h3>Social</h3>                      
                      <ul className="clearfix">
                        <li>
                          <a
                            href={
                              this.props.data ? this.props.data.facebook : "/"
                            }
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={
                              this.props.data ? this.props.data.twitter : "/"
                            }
                          >
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={
                              this.props.data ? this.props.data.youtube : "/"
                            }
                          >
                            <i className="fa fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f-nav">
            <div className="container text-center">
              <ul className="clearfix f-menu-items">
                <li>
                  <small>© 2020 Thirdessential.com</small>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    data-tracking-trigger="click"
                    data-tracking-action="NA Footer Navigation Link"
                  >
                    <small>Terms of Service</small>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    data-tracking-trigger="click"
                    data-tracking-action="NA Footer Navigation Link"
                  >
                    <small>Legal Service</small>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    data-tracking-trigger="click"
                    data-tracking-action="NA Footer Navigation Link"
                  >
                    <small>Privacy Policy</small>
                  </a>
                </li>
                <li>
                  <div className="o-region-selector l-region-selector js-region-selector">
                    <select
                      data-tracking-trigger="change"
                      data-tracking-action="Region Selector"
                    >
                      <option value="" selected="selected">
                        Region
                      </option>
                      <option value="uk" data-alternate-url="/">
                        United Kingdom
                      </option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="l-social c-social">
                    <ul>
                      <li>
                        <a href="/">
                          <span className="fa fa-facebook"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span className="fa fa-twitter"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span className="fa fa-linkedin"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span className="fa fa-youtube"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span className="fa fa-instagram"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
