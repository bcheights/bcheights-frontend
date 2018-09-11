import MastHeadCap from "./MastHeadCap";
import NavBar from "./NavBar";

import Link from "next/link";

const MagazineHeader = () => (
  <div className="header">
    <MastHeadCap isMagazine={true} />
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

export default MagazineHeader;
