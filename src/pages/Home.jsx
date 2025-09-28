// c) Home page: Welcome message, CTAs to other pages & mission statement.
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className="container">
            <h1>Welcome!</h1>
            <p className="lead">
                I build clean, accessible web apps. Explore my work and background below.
            </p>
            <div className="cta-row">
                <Link to="/about" className="btn">About Me</Link>
                <Link to="/projects" className="btn btn-secondary">View Projects</Link>
            </div>
            <blockquote className="mission" aria-label="Mission statement">
                <strong>Mission:</strong> craft performant, inclusive interfaces that solve real problems.
            </blockquote>
        </section>
    )
}