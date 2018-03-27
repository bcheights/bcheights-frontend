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
    <nav className="navbar navbar-dark fixed-top">
      <button className="navbar-toggler d-xl-none" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <img src="/static/menu.svg"></img>
      </button>

      <form className="form-inline d-lg-inline-block d-none" id="searchBar">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button id="searchButton"><img src="/static/search.svg"></img></button>
      </form>
      <button id="searchButton" className="d-inline-block d-lg-none"><img src="/static/search.svg"></img></button>

      {/* Below div will never show --> Used for Navbar toggle */}
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {getCategories().map((category) => (
            <CategoryLink key={category.id} category={category} />
          ))}
          <li className="nav-item"><Link href='/magazine'><a className="nav-link">Magazine</a></Link></li>
          <li className="nav-item"><Link href='/centennial'><a className="nav-link">Centennial</a></Link></li>
        </div>
      </div>
      {/* End of what won't be shown */}
    </nav>
    <style jsx>{`
      .navbar {
        background-color: #8D0821;
      }

      button {
        background-color: Transparent;
        outline: none;
        border: none;
      }

      #searchBar {

      }
    `}
    </style>
  </div>
);

export default NavBar;