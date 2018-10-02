import MastHeadCap from "./MastHeadCap";

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
