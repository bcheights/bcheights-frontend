
function getDate(dateString) {
  var d = new Date(dateString);
  return '- ' + d.toLocaleDateString('en-us', {month: 'long'}) 
         + ' ' + d.getDay() + ', ' + d.getFullYear();
}

const Article = ({title, featured, author, date, content}) => {
  return (
    <div id="article">
      <div id="headline">
        <h2>{title}</h2>
        <div id="details">
          <p>{author}</p>
          <p>{getDate(date)}</p>
        </div>
        <img src={featured} className="img-responsive" />
      </div>
      <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
      
      <style jsx>{`
        #article {
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          max-width: 500px;
          margin: 0 auto;
          font-family: "Times New Roman";
        }

        #headline {
          display: flex;
          align-self: flex-start;
          flex-flow: column wrap;
          margin: 0 auto;
          max-width: 500px;
        }

        #details {
          display: flex;
          flex-flow: row wrap;
        }

        #details p {
          font-family: Roboto, sans-serif;
          font-size: 12px;
          padding: 0;
          margin: 0 5px 0 0;
        }

        img {
          max-width: 100%;
        }
      `}
      </style>
    </div>
  );
};

export default Article;