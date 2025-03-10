import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import icon1 from '../../images/update/flag1.png'


const ContactSection = (props) => {
    return (
      <div>
        <div className="contact contact--layout1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 mb-40">
                <div className="contactBlock text-center">
                  <figure className="contactBlock__figure">
                    <img
                      className="contactBlock__figure__thumb"
                      src={icon1}
                      alt="BourneTech Contact"
                    />
                  </figure>
                  <div className="contactBlock__content">
                    <h2 className="contactBlock__heading text-uppercase">
                      united states
                    </h2>
                    <p className="contactBlock__text">
                      400 E Las Colinas Blvd, Irving, TX 75039
                    </p>
                    <span className="contactBlock__email connect">
                      info@bournetechnology.org
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
        <div id="myMap">
            <iframe
            title="title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.3502111522935!2d-96.93817182428391!3d32.862452273628044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e82c716366c67%3A0x1d9ae44afc283b1b!2s400%20E%20Las%20Colinas%20Blvd%2C%20Irving%2C%20TX%2075039!5e0!3m2!1sen!2sus!4v1741635109236!5m2!1sen!2sus"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
}

export default ContactSection;