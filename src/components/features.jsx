import React, { Component } from 'react'

export class features extends Component {
  render() {
    return (
        <div id="features" className="features">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-md-offset-1 section-title">
                <h2 className="text-center">Features</h2>
              </div>
              <div className="col-md-6">
                <div class="f-image-wrapper">
                  <img
                    title="dashboard-mobile-app-home"
                    alt="Clio Mobile App dashboard"
                    src="img/about.jpg"
                    width="550"
                    height="439"
                    className="img-fluid"
                      />
                </div>
              </div>
              <div className="col-md-5 offset-1">
                <div class="f-content-wrapper">
                  <ul class="grid-center-noBottom">
                    <li class="col-12_sm-5_md-12">
                    <h4 className="mb-4">Manage cases, organize contacts, and automate documents</h4>
                    <p>Streamline day-to-day processes, and keep cases organized so you can focus on billable work and grow your revenue. </p> </li>
                    <li class="col-12_sm-5_md-12">
                    <h4 className="mb-4">Generate bills, run reports, and get paid faster</h4>
                    <p>Keep track of financials and client accounts with easy-to-use reports and dashboards. Make billing easy with online payments, automated billing, and customized plans. </p> </li>
                    <li class="col-12_sm-5_md-12">
                    <h4 className="mb-4">Attract potential clients, track their progress, and secure their business</h4>
                    <p>Create easy-to-use client intake forms, automate client communication—such as emails, reminders, and requests—and organize referrals to seize every opportunity. </p> </li>
                    
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-md-offset-1 text-center">
                  <a href="/" class="mt-5 text-custom-primary cta-btn-blank"><span>See All Features</span></a>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default features
