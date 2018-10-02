import MastHeadCap from "./MastHeadCap";
import NavBar from "./NavBar";

import Link from "next/link";

const Header = () => (
  <div className="header">
    <MastHeadCap />
    <div id="masthead">
      <Link href="/">
        <img src="/static/heights-header.svg" />
      </Link>
    </div>
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-8 offset-2 col-xl-6 offset-xl-3">
          <NavBar />
        </div>
      </div>
    </div>
    <style jsx>
      {`
        #masthead {
          margin: auto;
          text-align: center;
          margin-top: 60px;
        }
        #masthead img {
          width: 300px;
        }
      `}
    </style>
  </div>
);

export default Header;
