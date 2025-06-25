import React, { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true); // Simulate submission
  };

  return (
    <section className="my-4">
      <h2>Contact</h2>
      {sent ? (
        <p className="alert alert-success">Message sent!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="form-control mb-2"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      )}
    </section>
  );
}
