// d) About Me Page: Legal name, image, pdf resume & short paragraph.
export default function About() {
    return (
        <section className="container">
            <h1>About Me</h1>
            <div className="about-grid">
                {/* Use a real headshot image placed in /public/me.jpg if you have it */}
                <img src="/me.png" alt="Headshot of Your Name" className="avatar" />
                <div>
                    <p>
                        My legal name is <strong>Hung Sheung Wong</strong>, or you can call me Katrina. I’m a AI student who learning web application developing. 
                        I enjoy turning complex ideas into intuitive products.
                    </p>
                    <p>
                        Download my resume as a PDF:
                        {' '}<a className="link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume (PDF)</a>
                    </p>
                </div>
            </div>
        </section>
    )
}
