import Link from 'next/link';

const Footer = () => (
  <div className="container">
    <div className="row">
      <div id="logo" className="col-md-4">
        <img src="/static/heights-header.svg" className=""></img>
        <p>The independent student newspaper of Boston College.</p>
        <p>Established 1919.</p>
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

        border-top-style: solid;
        border-width: 0.5px;
      }
      img {
        width: 100%;
      }

      #logo p {
        font-family: "Times New Roman";
        font-size: small;
      }
    `}
    </style>
  </div>
);

export default Footer;