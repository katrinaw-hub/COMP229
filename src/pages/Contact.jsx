// i) Contact Page: Contact information in a panel.
// j) Short interactive form that allows the user to send you a message and provide basic contact information 
// E.g.,First Name, Last Name, Contact Number, Email Address, Message, etc.

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function updateField(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // save to localStorage
    const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    submissions.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

    // show success message
    setSubmitted(true);
  }

  return (
    <section className="container">
      <h1>Contact</h1>

      {submitted ? (
        <div className="panel" style={{ background: "#162a16", color: "#9fff9f" }}>
          ✅ Thank you, your message has been sent successfully!
        </div>
      ) : (
        <>
          <div className="panel">
            <p className="muted">
              You can also email me directly at{" "}
              <a href="mailto:you@example.com">hs.wng2@gmail.com</a>.
            </p>
          </div>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="row">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={updateField}
                required
              />
            </div>
            <div className="row">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={updateField}
                required
              />
            </div>
            <div className="row">
              <label htmlFor="phone">Contact Number</label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={updateField}
                inputMode="tel"
              />
            </div>
            <div className="row">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                required
              />
            </div>
            <div className="row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={updateField}
              />
            </div>
            <button className="btn" type="submit">
              Send Message
            </button>
          </form>
        </>
      )}
    </section>
  );
}
