// g) Education Page: Educations with date, year and degree.
export default function Education() {
    // Keep this factual and concise for employers
    const schools = [
        { id: 1, place: 'City University of Hong Kong', credential: 'Software Engineering Technology – AI (Co-op) Advanced Diploma ', year: '2024-2026' },
        { id: 2, place: 'City University of Hong Kong', credential: 'BBA - Information Management (Information Systems Auditing Stream)', year: '2021' }
    ]

    return (
        <section className="container">
            <h1>Education</h1>
            <ul className="timeline">
                {schools.map(s => (
                    <li key={s.id} className="timeline-item">
                        <div className="timeline-dot" />
                        <div>
                            <h2>{s.credential}</h2>
                            <p className="muted">{s.place} — {s.year}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}