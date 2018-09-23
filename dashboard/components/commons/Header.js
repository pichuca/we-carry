import Link from 'next/link'

const linkStyle = {
    marginRight: 15,
};

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Inicio</a>
        </Link>
        <Link href="/inventory">
            <a style={linkStyle}>Inventario</a>
        </Link>
        <Link href="/orders">
            <a style={linkStyle}>Pedidos</a>
        </Link>
    </div>
);

export default Header;
