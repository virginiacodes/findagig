export default function Navbar({ onOpenSearch, isSearchOpen }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">Find A Gig</li>
        <li className="nav__item">Venues</li>
        <li className="nav__item">About</li>
        <li className="nav__item">Profile</li>
        <button className="nav__search" onClick={onOpenSearch}>
          <svg className="nav__icon">
            <use xlinkHref="../../images/sprite.svg#icon-magnifying-glass"></use>
          </svg>
        </button>
      </ul>
    </nav>
  );
}
