export default function Search({ onOpenSearch, isSearchOpen }) {
  return (
    <div className={isSearchOpen ? "search search--visible" : "search"}>
      <form
        action="#"
        className={
          isSearchOpen ? "search__form search__form--visible" : "search__form"
        }
      >
        <svg className="search__icon">
          <use xlinkHref="../../images/sprite.svg#icon-magnifying-glass"></use>
        </svg>

        <input
          type="text"
          className="search__input"
          placeholder="Find an event"
        />

        <svg className="search__close" onClick={onOpenSearch}>
          <use xlinkHref="../../images/sprite.svg#icon-cross"></use>
        </svg>
      </form>
    </div>
  );
}
