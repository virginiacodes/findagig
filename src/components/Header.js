import Navbar from "./Navbar";
import Search from "./Search";

export default function Header({ onOpenSearch, isSearchOpen }) {
  return (
    <header className="header">
      <h1 className="header__logo">Fair Gigs</h1>

      <Navbar onOpenSearch={onOpenSearch} isSearchOpen={isSearchOpen} />

      <Search onOpenSearch={onOpenSearch} isSearchOpen={isSearchOpen} />
    </header>
  );
}
