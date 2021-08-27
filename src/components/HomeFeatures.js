import React from "react";
import "./HomeFeatures.css";

function HomeFeatures() {
  return (
    <div className="homeFeatures">
      <div className="homeFeatures__cardholder">
        <div className="homeFeatures__card">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/linktree-features-customization.png"
            }
            alt=""
          />
          <h4>Customize your Linktree</h4>
          <p>
            Make your Linktree pop. Embody your brand through custom colors,
            fonts and images.
          </p>
        </div>
        <div className="homeFeatures__card">
          <img
            src={
              process.env.PUBLIC_URL + "/images/linktree-features-analytics.png"
            }
            alt=""
          />
          <h4>Analytics and Insights</h4>
          <p>
            Gain valuable insight into your traffic and discover which content
            is performing with your audience.
          </p>
        </div>
        <div className="homeFeatures__card">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/linktree-features-integrations.png"
            }
            alt=""
          />
          <h4>Powerful Third-Party Integrations</h4>
          <p>
            Collect email subscribers, connect with third-party analytics and
            remarket to your audience.
          </p>
        </div>
      </div>
      <a href="#">SEE FEATURES</a>
    </div>
  );
}

export default HomeFeatures;
