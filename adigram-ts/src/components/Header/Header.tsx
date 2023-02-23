import "./Header.css";

const Header = () => {
  return (
    <div className="header" onClick={() => window.scroll(0, 0)}>
      <span>
        <img
          src="https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=adidas-01"
          alt="adidas-logo"
          className="adidasLogo"
        />
      </span>
      <p className="headername">AdiGram</p>
    </div>
  );
};

export default Header;
