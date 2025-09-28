// f) Projects page: ≥3 projects with image, role and outcome.
import { projects } from '../data/projects'

export default function Projects() {
    return (
        <section className="container">
            <h1>Projects</h1>
            <div className="grid">
                {projects.map(p => (
                    <article key={p.id} className="card">
                        <img src={p.image} alt="" />
                        <div className="card-body">
                            <h2>{p.title}</h2>
                            <p><strong>Role:</strong> {p.role}</p>
                            <p><strong>Outcome:</strong> {p.outcome}</p>
                            <a className="link" href={p.link}>Learn more</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}