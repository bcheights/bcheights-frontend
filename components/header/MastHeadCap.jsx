import Link from "next/link";
import { fetchSearch } from "../../actions";
import Router from "next/router";

function getCategories() {
  return [
    { id: "news", title: "News" },
    { id: "sports", title: "Sports" },
    { id: "arts", title: "Arts" },
    { id: "opinions", title: "Opinions" },
    { id: "metro", title: "Metro" },
    { id: "blog", title: "Blog" }
  ];
}

const CategoryLink = ({ category }) => (
  <li className="nav-item">
    <Link
      as={`/category/${category.id}`}
      href={`/category?title=${category.title}`}
    >
      <a className="nav-link">{category.title}</a>
    </Link>
  </li>
);

class MastHeadCap extends React.Component {
  handleSearch = e => {
    e.preventDefault();
    let searchInput = this.searchInput.value;
    searchInput = searchInput.replace(/\s+/g, "-").toLowerCase();
    Router.push(
      `/search?searchString=${searchInput}`,
      `/search/${searchInput}`
    );
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="/static/menu.svg" />
          </button>

          <form
            className="form-inline d-lg-inline-block d-none"
            id="searchBar"
            onSubmit={this.handleSearch}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={node => (this.searchInput = node)}
            />
            <button id="searchButton">
              <img src="/static/search.svg" />
            </button>
          </form>

          {/* Below div will never show --> Used for Navbar toggle */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {getCategories().map(category => (
                <CategoryLink key={category.id} category={category} />
              ))}
              <li className="nav-item">
                <Link href="/magazine">
                  <a className="nav-link">Magazine</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/centennial">
                  <a className="nav-link">Centennial</a>
                </Link>
              </li>
            </div>
          </div>
          {/* End of what won't be shown */}
        </nav>
        <style jsx>
          {`
            .navbar {
              background-color: #8d0821;
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
  }
}

export default MastHeadCap;
