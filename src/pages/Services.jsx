// h) Services page: Short list of services (image-friendly cards).
export default function Services() {
  const services = [
    { id: 's1', title: 'Web Development', desc: 'React, Node, REST/GraphQL' },
    { id: 's2', title: 'UI Engineering', desc: 'Accessible, responsive interfaces' },
    { id: 's3', title: 'Mobile Apps', desc: 'React Native prototypes & apps' }
  ]

  return (
    <section className="container">
      <h1>Services</h1>

      <img
        src="Service.png"
        alt="Services illustration"
        className="service-banner"
        style={{ maxWidth: '480px', width: '100%', margin: '1rem auto', display: 'block' }}
      />

      <div className="grid">
        {services.map(s => (
          <article key={s.id} className="card service">
            <div className="card-body">
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
