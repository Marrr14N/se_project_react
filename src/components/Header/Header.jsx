import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import menuIcon from "../../assets/menu.png";

function Header({ handleAddClick, handleMenuClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="WTWR logo" />

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>

      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>

      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>

      <button
        onClick={handleMenuClick}
        type="button"
        className="header__menu-btn"
      >
        <img src={menuIcon} alt="Open menu" className="header__menu-icon" />
      </button>
    </header>
  );
}

export default Header;
