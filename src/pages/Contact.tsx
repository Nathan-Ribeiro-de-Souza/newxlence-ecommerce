export function Contact() {
  const whatsappContact = () => {
    const phone = '5551981191403'
    const message = 'Hi, I would like more information about the products.'
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    window.open(url, '_blank')
  }

  return (
    <main className="contact-page">
      <section className="contact-card">
        <p className="section-label">Contact</p>
        <h1>Talk to NewXLence</h1>

        <p>
          Have a question about size, print, color or an order?
          Send a message directly on WhatsApp.
        </p>

        <button onClick={whatsappContact}>
          Contact on WhatsApp
        </button>
      </section>
    </main>
  )
}