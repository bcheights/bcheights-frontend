import Link from 'next/link';
import Summary from '../post/Summary';


const MainContent = () => (
  <div id="container">
    <Link as="/2018/3/23/experts-in-law-praise-free-speech-on-college-campuses"
        href="/post?year=2018&month=3&day=23&slug=experts-in-law-praise-free-speech-on-college-campuses">
        <img src='/static/placeholder.png'></img>
    </Link>

    <style jsx>{`
      img { 
        margin: auto;
        display: flex;
        justify-content: center;
        max-width: 99%;
      }
      
      p {
        margin: auto;
        text-align: center;
      }
    `}
    </style>
  </div>
);

export default MainContent;