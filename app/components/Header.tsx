export default function Header() {
  return (
    <header className='site-header'>
      <a href='/' className='site-logo' aria-label='Inventory Solutions home'>
        <span className='logo-import'>Import</span>
        <span className='logo-solutions'>Solutions</span>
      </a>

      <nav aria-label='Primary'>
        <ul className='site-nav-links'>
          <li>
            <a href='#servicios'>Servicios</a>
          </li>
          <li>
            <a href='#nosotros'>Sobre Nosotros</a>
          </li>
          <li>
            <a href='#contacto'>Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
