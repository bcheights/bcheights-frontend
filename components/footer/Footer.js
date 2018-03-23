import Link from 'next/link'

const Footer = () => (
  <div id="container">
    <div id="logo">
      <h2>The Heights</h2>
    </div>
    <div id="about">
      <h3>About</h3>
    </div>
    <div id="contact">
      <h3>Contact</h3>
    </div>
    <style jsx>{`
      #container {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
      }

      #logo {
        margin: 0;
        padding: 10px;
      }

      #about {
        margin: 0;
        padding: 10px;
      }

      #contact {
        margin: 0;
        padding: 10px;
      }

      h2 {
        margin: 0;
        padding: 0;
      }

      h3 {
        margin: 0;
        padding: 0;
      }
    `}
    </style>
  </div>
)

export default Footer