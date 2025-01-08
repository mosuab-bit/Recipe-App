import cooking from '../assets/images/cooking.png';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={cooking} />
        <h1>
          <span style={{ color: '#008080' }}>Tasty</span>Tales
        </h1>
      </div>

      <nav className="nav-menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Recipes</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/favorites">Favorites</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
