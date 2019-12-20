import React from 'react';
import config from '../../config';


export default function SocialLinks() {
  return (
    <section className="contact-section bg-black">
      <div className="container">
        <div className="row">

        <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Let's Connect!</h4>
                <hr className="my-4" />
                {/* <div className="small text-black-50">--------</div> */}
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a href={`mailto:${config.email}`}>{config.email}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Phone</h4>
                <hr className="my-4" />
                <div className="small text-black-50">{config.phone}</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fab fa-github text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">GitHub</h4>
                <hr className="my-4" />
                {/* <a href='https://github.com/beckavonspooky'></a> */}
                <div className="small text-black-50"><a href='https://github.com/beckavonspooky'>{config.github}</a></div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fab fa-linkedin-in text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">LinkedIn</h4>
                <hr className="my-4" />
                <div className="small text-black-50"><a href='https://www.linkedin.com/in/rebeca-levy-developer/'>{config.linkedin}</a></div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fab fa-instagram text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Instagram</h4>
                <hr className="my-4" />
                <div className="small text-black-50"><a href='https://www.instagram.com/_whatareweeating_/'>{config.instagram}</a></div>
              </div>
            </div>
          </div>

        </div>

        <div className="social d-flex justify-content-center">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url} className={`mx-2`}>
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
