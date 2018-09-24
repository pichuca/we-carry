import Link from 'next/link'

const linkStyle = {
    marginRight: 15,
};

const Header = () => (
    <div className="header-wrapper">
      <nav>
        <div className="links">
            <Link href="/">
                <a style={linkStyle}>Inicio</a>
            </Link>
            <Link href="/inventory">
                <a style={linkStyle}>Inventario</a>
            </Link>
            <Link href="/orders">
                <a style={linkStyle}>Pedidos</a>
            </Link>
            <Link href="/entries">
                <a style={linkStyle}>Solicitudes</a>
            </Link>
            <Link href="/reports">
                <a style={linkStyle}>Reportes y Estadísticas</a>
            </Link>
            <Link href="/configuration">
                <a style={linkStyle}>Configuración</a>
            </Link>
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
        `}</style>
    </div>
);

export default Header;
