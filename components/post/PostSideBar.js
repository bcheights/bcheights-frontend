


const PostSideBar = () => (
  <div id="content">
    <img src='/static/placeholder.png'></img>
    <p>Related Article!!! Woohoo!!!</p>
    <img src='/static/placeholder.png'></img>
    <p>Related Article!!! Woohoo!!!</p>
    <img src='/static/placeholder.png'></img>
    <p>Related Article!!! Woohoo!!!</p>
    <style jsx>{`
      img {
        width: 80%;
      }

      #content {
        width: 30%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 0 0 0 30px;
      }

      p {
        text-align: center;
        margin: 0;
        padding: 0;
      }
    `}
    </style>
  </div>
)

export default PostSideBar