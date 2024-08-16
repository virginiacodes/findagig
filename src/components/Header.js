import Navbar from "./Navbar";
import Search from "./Search";

export default function Header({ onOpenSearch, isSearchOpen, onChangePage }) {
  return (
    <header className="header">
      <h1 className="header__logo" onClick={() => onChangePage("home")}>
        Fair Gigs
      </h1>

      <Navbar
        onOpenSearch={onOpenSearch}
        isSearchOpen={isSearchOpen}
        onChangePage={onChangePage}
      />

      <Search onOpenSearch={onOpenSearch} isSearchOpen={isSearchOpen} />
    </header>
  );
}
