import Link from 'next/link'

const linkStyle = {
    marginRight: 15,
};

const linksContent = [
    {
        label: 'Inicio',
        route: '/',
        id: 1,
    },
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
        label: 'Reportes y Estadísticas',
        route: '/reports',
        id: 5,
    },
    {
        label: 'Configuración',
        route: '/configuration',
        id: 6,
    }
];

const Header = () => (
    <div className="header-wrapper">
      <nav>
        <div className="links">
            {linksContent.map((link, index) => {
                return (
                    <Link href={link.route} key={index}>
                        <a style={linkStyle}>{link.label}</a>
                    </Link>)
            })}
        </div>
      </nav>
        <style jsx>{`
            .header-wrapper {
                width: 100%;
                height: 64px;
                font-family: 'Roboto', sans-serif;
                box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
                position: fixed;
                top: 0px;
                background-color: #FFFFFF;
            }
            .links {
                width: 100%;
                margin: 0 auto;
                padding: 1.5rem;
                text-align: left;
            }
            a {
                text-decoration: none;
                color: #757575;
                font-size: 0.8rem;
                font-weight: 300;
                letter-spacing: 0.1rem;
            }
            a:hover {
                color: #0076ff;
            }
        `}</style>
    </div>
);

export default Header;
