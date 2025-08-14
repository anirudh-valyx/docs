export default function Hero({ title, subtitle, image }) {
  return (
    <section style={{ padding: '3rem 2rem', textAlign: 'center', background: '#F9FAFB', borderRadius: '12px' }}>
      <h1 style={{ fontSize: '2.75rem', marginBottom: '0.5rem', color: '#15803D' }}>{title}</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', maxWidth: '600px', margin: 'auto' }}>{subtitle}</p>
      <img src={image} alt="Hero" style={{ maxWidth: '800px', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
    </section>
  );
}
