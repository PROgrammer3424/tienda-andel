export const Header = () => {
  return (
    <nav className="mx-auto px-4 py-4 flex items-center justify-center degradado header text-center">
      <a 
        href="/" 
        className="text-white no-underline"
        style={{
          textDecoration: 'none',
          fontWeight: '700',
          letterSpacing: '2px',
          color: 'white',
          fontSize: '1.2rem'
        }}
      >
        <i className="bi bi-shop me-3"></i> Tienda Andel
      </a>
    </nav>
  );
};

export default Header;