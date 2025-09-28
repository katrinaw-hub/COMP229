// a) Navigation bar to all pages
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
    return (
        <header className="site-header">
            <div className="nav-inner"> 
                <Link to="/" className="brand"> 
                    <Logo size={44} />
                    <span className="brand-text">My Portfolio</span>
                </Link>

                <nav aria-label="Primary">
                    {[
                        { to: '/', label: 'Home' },
                        { to: '/about', label: 'About' },
                        { to: '/projects', label: 'Projects' },
                        { to: '/education', label: 'Education' },
                        { to: '/services', label: 'Services' },
                        { to: '/contact', label: 'Contact' }
                    ].map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}