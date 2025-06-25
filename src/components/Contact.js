import React, { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true); 
  };

  return (
    <section className="my-5 container">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {sent ? (
            <div className="alert alert-success text-center">Your message has been sent!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Your Message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-4">Send</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
