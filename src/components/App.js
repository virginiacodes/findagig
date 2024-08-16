import "../styles/style.css";

import { useState } from "react";

import EventNav from "./EventNav";
import EventList from "./EventList";
import Header from "./Header";

export default function App() {
  const [isSearchOpen, setisSearchOpen] = useState(false);

  function handleSearchOpen() {
    setisSearchOpen(!isSearchOpen);
  }

  return (
    <div className="App">
      <Header isSearchOpen={isSearchOpen} onOpenSearch={handleSearchOpen} />
      <main>
        <EventNav />
        <EventList />
      </main>
    </div>
  );
}
