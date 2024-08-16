import "../styles/style.css";

import { useState } from "react";

import EventNav from "./EventNav";
import EventList from "./EventList";
import Header from "./Header";
import About from "./About";

export default function App() {
  const [isSearchOpen, setisSearchOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState("home");

  function handleSearchOpen() {
    setisSearchOpen(!isSearchOpen);
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      <Header
        isSearchOpen={isSearchOpen}
        onOpenSearch={handleSearchOpen}
        onChangePage={handlePageChange}
      />
      <main>
        {currentPage === "home" && (
          <>
            <EventNav />
            <EventList />
          </>
        )}
        {currentPage === "about" && <About />}
      </main>
    </div>
  );
}
