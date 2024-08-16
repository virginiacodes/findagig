export default function EventNav() {
  return (
    <ul className="event-nav">
      <li className="event-nav__item">
        <svg className="event-nav__icon">
          <use xlinkHref="../../images/sprite.svg#icon-location-pin"></use>
        </svg>
        <span className="event-nav__title">Location</span>
      </li>

      <li className="event-nav__item">
        <svg className="event-nav__icon">
          <use xlinkHref="../../images/sprite.svg#icon-calendar"></use>
        </svg>
        <span className="event-nav__title">Date</span>
      </li>

      <li className="event-nav__item">
        <svg className="event-nav__icon">
          <use xlinkHref="../../images/sprite.svg#icon-man"></use>
        </svg>
        <span className="event-nav__title">Capacity</span>
      </li>

      <li className="event-nav__item">
        <svg className="event-nav__icon">
          <use xlinkHref="../../images/sprite.svg#icon-beamed-note"></use>
        </svg>
        <span className="event-nav__title">Genre</span>
      </li>

      <li className="event-nav__item">
        <svg className="event-nav__icon">
          <use xlinkHref="../../images/sprite.svg#icon-coin-pound"></use>
        </svg>
        <span className="event-nav__title">Fee</span>
      </li>
    </ul>
  );
}
