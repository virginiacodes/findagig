import { useState } from "react";

export default function EventList() {
  const [eventList, setEventList] = useState([
    {
      key: "1",
      name: "Glastonbury",
      date: "26 Jun - 30 Jun",
      location: "Somerset, England",
      image: "../../images/glastonbury.jpeg",
      slot: "Main support",
    },
    {
      key: "2",
      name: "Pop Rock Night",
      date: "Sun, 30 Jun",
      location: "Jago, Dalston",
      image: "../../images/jago.jpeg",
      slot: "Headliner",
    },
    {
      key: "3",
      name: "Women of Jazz",
      date: "5 Jul",
      location: "Moth Club, Hackney",
      image: "../../images/mothclub.jpg",
      slot: "Headliner",
    },
    {
      key: "4",
      name: "Girli & Guests",
      date: "6 Jul",
      location: "O2 academy, Brixton",
      image: "../../images/o2academy.jpg",
      slot: "Opener",
    },
    {
      key: "5",
      name: "Dream Pop Showcase",
      date: "9 Jul",
      location: "The Victoria, Dalston",
      image: "../../images/victoria.jpg",
      slot: "Main support",
    },
  ]);
  return (
    <div className="event-page">
      <h1 className="event-page__heading">Popular Events</h1>
      <ul className="event-list">
        {eventList?.map((gig) => (
          <Event gig={gig} key={gig.key} />
        ))}
      </ul>
    </div>
  );
}

function Event({ gig }) {
  return (
    <li className="event-list__item">
      <img className="event-list__image" src={gig.image} alt={gig.name} />
      <h2 className="event-list__name">{gig.name} </h2>
      <p className="event-list__date">{gig.date}</p>
      <p className="event-list__location">{gig.location}</p>
      <p className="event-list__slot">{gig.slot}</p>
    </li>
  );
}
