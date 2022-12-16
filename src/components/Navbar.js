function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>

    )
}

const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Just for Pets</a>
            <ul>
                <CustomLink href="/agregarProductos">Agregar</CustomLink>
                <CustomLink href="/listarProductos">Mercado</CustomLink>
            </ul>
        </nav>
    )
}


export default Navbar;
