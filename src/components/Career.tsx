import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founding Developer</h4>
                <h5>Mavriq</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Mavriq.ai, a voice AI platform for
              automating customer calls, support, and conversions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sofineer</h4>
                <h5>3+ years · Mohali</h5>
              </div>
              <h3>2022–25</h3>
            </div>
            <p>
              Senior Lead Software Engineer (Feb 2024 – May 2024). Lead Software
              Engineer (may 2022 – jan 2025).  functional and linguistic testing
              strategy; in-house tooling; collaboration with product and engineering
              for high-quality localized releases.
              Developed ERP and CRM platforms using Laravel and Node.js.
              Built scalable APIs and feature-rich admin dashboards.
              Integrated third-party services including Stripe, Razorpay, Firebase, and Zoom APIs.
              Optimized database queries improving response time by ~25%.
              Mentored junior developers and conducted code reviews ensuring quality delivery.
              Integrated third-party APIs (Stripe, Zoom, Firebase) to enhance platform functionality,
              security, and user experience.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chohan Infotech</h4>
                <h5>Chohan Team </h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              Sep 2020 – Nov 2022. Developed and maintained WCF services consumed
              by the UI; deployment support across environments; NUnit tests and
              coverage; bug fixes from QA and users; database work.
              Developed ERP and CRM platforms using Laravel and Node.js.
              Built scalable APIs and feature-rich admin dashboards.
              Integrated third-party services including Stripe, Razorpay, Firebase, and Zoom APIs.
              Optimized database queries improving response time by ~25%.
              Mentored junior developers and conducted code reviews ensuring quality delivery.
              Integrated third-party APIs (Stripe, Zoom, Firebase) to enhance platform functionality,
              security, and user experience.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Training & Internship </h4>
                <h5>CWCIndia.com</h5>
              </div>
              <h3>2017-2018</h3>
            </div>
            <p>
              Software engineering across enterprise projects, contributing to
              design, development, and delivery of business applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
