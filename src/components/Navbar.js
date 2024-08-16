export default function Navbar({ onOpenSearch, isSearchOpen, onChangePage }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">Find A Gig</li>
        <li className="nav__item" onClick={() => onChangePage("venues")}>
          Venues
        </li>
        <li className="nav__item" onClick={() => onChangePage("about")}>
          About
        </li>
        <li className="nav__item" onClick={() => onChangePage("profile")}>
          Profile
        </li>
        <button className="nav__search" onClick={onOpenSearch}>
          <svg className="nav__icon">
            <use xlinkHref="../../images/sprite.svg#icon-magnifying-glass"></use>
          </svg>
        </button>
      </ul>
    </nav>
  );
}
