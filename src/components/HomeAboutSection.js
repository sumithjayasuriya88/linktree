import React from "react";
import "./HomeAboutSection.css";

function HomeAboutSection() {
  return (
    <div className="homeAboutSection">
      <div className="homeAboutSection__row">
        <div className="graphic__container">
          <video width="750" height="500" autoPlay loop muted>
            <source
              src={process.env.PUBLIC_URL + "/images/link_to_anywhere.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="details__box">
          <h2>Use it anywhere</h2>
          <p>
            Take your Linktree wherever your audience is, to help them to
            discover all your important content.
          </p>
        </div>
      </div>
      <div className="homeAboutSection__row">
        <div className="details__box">
          <h2>Link to everywhere</h2>
          <p>
            Linktree is the launchpad to your latest video, article, recipe,
            tour, store, website, social post - everywhere you are online.
          </p>
        </div>
        <div className="graphic__container">
          <video width="750" height="500" autoPlay loop muted>
            <source
              src={
                process.env.PUBLIC_URL +
                "/images/linktree-for-tiktok-hero-2.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="homeAboutSection__row">
        <div className="graphic__container">
          <video width="750" height="500" autoPlay loop muted>
            <source
              src={
                process.env.PUBLIC_URL +
                "/images/Linktree-CommerceLinks-600x600-V02.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
        <div className="details__box">
          <h2>Collect payments</h2>
          <p>
            From tips for your content, to donations for your projects, let your
            fans & followers support you in monetizing your passions.
          </p>
        </div>
      </div>
      <div className="homeAboutSection__row">
        <div className="details__box">
          <h2>Easily managed</h2>
          <p>
            Creating a Linktree takes seconds. Use our simple drag-and-drop
            editor to effortlessly manage your content.
          </p>
        </div>
        <div className="graphic__container">
          <video width="750" height="500" autoPlay loop muted>
            <source
              src={
                process.env.PUBLIC_URL +
                "/images/linktree-causes-landing-page-hero-1.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="homeAboutSection__row">
        <div className="graphic__container">
          <video width="750" height="500" autoPlay loop muted>
            <source
              src={
                process.env.PUBLIC_URL +
                "/images/website_security_8s.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
        <div className="details__box">
          <h2>Safe, trusted, private</h2>
          <p>
            Privacy is non-negotiable. Linktree doesn’t track any personal data
            on your visitors, so your Linktree remains your place on the
            internet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutSection;
