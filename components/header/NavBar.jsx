import Link from 'next/link';
import Head from 'next/head';


function getCategories() {
  return [
    { id: 'news', title: 'News' },
    { id: 'sports', title: 'Sports' },
    { id: 'arts', title: 'Arts' },
    { id: 'opinions', title: 'Opinions' },
    { id: 'metro', title: 'Metro' },
    { id: 'blog', title: 'Blog' }
  ];
}

const CategoryLink = ({ category }) => (
  <li className="nav-item">
    <Link as={`/category/${category.id}`} href={`/category?title=${category.title}`}>
      <a className="nav-link">{category.title}</a>
    </Link>
  </li> 
);


const NavBar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {getCategories().map((category) => (
            <CategoryLink key={category.id} category={category} />
          ))}
          <li className="nav-item"><Link href='/magazine'><a className="nav-link">Magazine</a></Link></li>
          <li className="nav-item"><Link href='/centennial'><a className="nav-link">Centennial</a></Link></li>
        </div>
      </div>
    </nav>
    <style jsx>{`
      .navbar {
        margin: 0;
      }

      a {
        color: black;
      }

      #navbarNavAltMarkup {
        justify-content: center;
        border-top-style: solid;
        border-bottom-style: solid;
        border-width: 1px;
        margin: 0;
      }
    `}
    </style>
  </div>
);

export default NavBar;