import MastHeadCap from '../header/MastHeadCap'

import Link from 'next/link'

function getCategories() {
  return [
    { id: 'news', title: 'News' },
    { id: 'sports', title: 'Sports' },
    { id: 'arts', title: 'Arts' },
    { id: 'opinions', title: 'Opinions' },
    { id: 'metro', title: 'Metro' },
    { id: 'blog', title: 'Blog' }
  ]
}

const CategoryLink = ({ category }) => (
  <li>
    <Link as={`/category/${category.id}`} href={`/category?title=${category.title}`}>
      <a>{category.title}</a>
    </Link>
    <style jsx>{`
      li {
        align-items: center;
        width: auto;
        margin: 0;
        padding: 0 2% 0;
      }

      a {
        text-align: center;
        text-decoration: none;
        margin: 12px 0 0 0;
        color: black;
        text-family: 'Times New Roman';
        font-size: 11pt;
      }

      a:hover {
        color: gray;
      }
    `}
    </style>
  </li>
)


const Header = () => (
  <div className='header'>
    <MastHeadCap />
    <div id='masthead'>
      <Link href='/'><img src='../static/heights-header.svg'></img></Link>
    </div>
    <ul id='masthead-nav'>
      {getCategories().map((category) => (
        <CategoryLink key={category.id} category={category} />
      ))}
      <li><Link href='/magazine'><a>Magazine</a></Link></li>
      <li><Link href='/centennial'><a>Centennial</a></Link></li>
    </ul>
    <style jsx>{`
      #masthead {
        margin: auto;
        text-align: center;
        margin-top: 50px;
      }

      #masthead img {
        display: inline-block;
        width: 300px;
      }

      #masthead a {
        text-align: center;
        text-decoration: none;
        text-family: 'Times New Roman';
        color: black;
        margin: auto;
      }

      img {
        margin: auto;
        display: block;
        max-width: 100%;
        width: auto\9;
        height: auto;
      }

      #masthead-nav {
        width: 60%;
        margin: 0 auto;
        padding: 0;
        list-style-type: none;
        text-align: center;
        border-bottom-style: solid;
        border-top-style: solid;
        border-width: 1px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }

      #masthead-nav li {
        width: auto;
        margin: 0;
        padding: 0 2% 0;
        align-items: center;
      }
      
      #masthead-nav a {
        text-align: center;
        text-decoration: none;
        margin: 12px 0 0 0;
        color: black;
        text-family: 'Times New Roman';
        font-size: 11pt;
      }

      #masthead-nav a:hover {
        color: gray;
      }
    `}
    </style>
  </div>
)

export default Header