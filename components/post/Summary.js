
import Link from 'next/link';


function getDate(dateString) {
  var d = new Date(dateString);
  return '- ' + d.toLocaleDateString('en-us', {month: 'long'}) 
         + ' ' + d.getDay() + ', ' + d.getFullYear();
}

const PostLink = ({ year, month, day, slug, title }) => (
  <div className="nav-item">
    <Link href={`/post?year=${year}&month=${month}&day=${day}&slug=${slug}`}
            as={`/${year}/${month}/${day}/${slug}`}>
      <a className="nav-link">{title}</a>
    </Link>
  </div>
);

const Summary = ({title, featured, author, date, excerpt}) => {
  return (
    <div id="article">
      <div id="headline">
        <img src={featured} />
        <PostLink />
        <div id="details">
          <p>{author}</p>
          <p>{getDate(date)}</p>
        </div>
        
      </div>
      <div id="content" dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  );
};

export default Summary;