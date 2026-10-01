import '../styles/Header.css';

function Header() {
  return (
    <header className='header'>
      <h1>Gabriel Chaves</h1>
      <ul className="links">
        <li>
          <a href="https://google.com"> Google </a>
        </li>
        <li>
          <a href="https://youtube.com"> YouTube </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
