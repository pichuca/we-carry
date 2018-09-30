import Link from 'next/link'

const wrapperStyles = {
    width: '100%',
    height: 64,
    fontFamily: "'Roboto', sans-serif",
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.06)',
    position: 'fixed',
    top: 0,
    backgroundColor: '#FFFFFF',
}

const linksStyles = {
    width: '100%',
    margin: '0 auto',
    padding: '1.5rem',
    textAlign: 'left',
}

const anchorStyles = {
    textDecoration: 'none',
    color: '#757575',
    fontSize: '0.8rem',
    fontWeight: 300,
    letterSpacing: '0.1rem',
    marginRight: 15,
}

const linksContent = [
    {
        label: 'Inventario',
        route: '/inventory',
        id: 2,
    },
    {
        label: 'Pedidos',
        route: '/orders',
        id: 3,
    },
    {
        label: 'Solicitudes',
        route: '/entries',
        id: 4,
    },
    {
        label: 'Estadísticas',
        route: '/stats',
        id: 5,
    },
    {
        label: 'Configuración',
        route: '/configuration',
        id: 6,
    }
];

const Header = () => (
    <div className="header-wrapper" style={wrapperStyles}>
      <nav>
        <div className="links" style={linksStyles}>
            {linksContent.map((link, index) => {
                return (
                    <Link prefetch href={link.route} key={index}>
                        <a style={anchorStyles}>{link.label}</a>
                    </Link>)
            })}
        </div>
      </nav>
        <style jsx>{`
            .links a:hover {
                color: #0076ff !important;
            }
        `}</style>
    </div>
);

export default Header;
