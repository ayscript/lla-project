import '../App.css';

const Header = () => {
  return (
    <header className="menuBar">
      <a href="/">
        <img src='img/Logo.png' alt='logo' />
      </a>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Event</a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">Get Involved</a></li>
          <li><a href="#"> Contact us</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
