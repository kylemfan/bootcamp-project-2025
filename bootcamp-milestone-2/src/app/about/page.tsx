export default function contactPage() {
  return (
    <main>
      <h1 className="page-title">Send a Message</h1>
      <form id="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Email" required />
        <label htmlFor="Message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}