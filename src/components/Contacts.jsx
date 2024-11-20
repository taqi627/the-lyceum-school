
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1 className="contacts-title">Contact Us</h1>
      <p className="contacts-intro">
        We’d love to hear from you! Reach out to us through the following channels:
      </p>
      <div className="contacts-info">
        <div className="contact-item">
          <h2>Address</h2>
          <p>
          Village Jamal Khan Nizamani, Hala, Matiari, Sindh
          </p>
        </div>
        <div className="contact-item">
          <h2>Email</h2>
          <p>
            <a href="mailto:info@lyceumschool.edu.pk">info@lyceumschool.edu.pk</a>
          </p>
        </div>
        <div className="contact-item">
          <h2>Phone</h2>
          <p>+92 300 1234567</p>
        </div>
      </div>
      <div className="contacts-map">
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/place/The+Lyceum+High+School/@25.8508011,68.4622176,15z/data=!4m6!3m5!1s0x394b950024a8c659:0x77f3bcce11fa9e63!8m2!3d25.8508011!4d68.4622176!16s%2Fg%2F11y4_sq546?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="VF26+8VG Village Jamal Khan Nizamani, Hala, Matiari, Sindh"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
