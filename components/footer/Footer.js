import Link from 'next/link';

const Footer = () => (
  <div className="container">
    <div className="row">
      <div id="logo" className="col-md-4">
        <img src="/static/heights-header.svg" className=""></img>
      </div>
      <div id="about" className="col-md-4">
        <h3>About</h3>
      </div>
      <div id="contact" className="col-md-4">
        <h3>Contact</h3>
      </div>
    </div>
    <style jsx>{`
      .container {
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      img {
        width: 100%;
      }
    `}
    </style>
  </div>
);

export default Footer;