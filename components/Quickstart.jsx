export default function Quickstart({ steps }) {
  return (
    <section style={{ padding: '2rem', background: '#FFFFFF', borderRadius: '12px', marginTop: '2rem' }}>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#15803D' }}>Quickstart</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1rem'
      }}>
        {steps.map((step, idx) => (
          <div
            key={idx}
            style={{
              background: '#F9FAFB',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #E5E7EB'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', color: '#065F46' }}>{step.title}</h3>
            <p style={{ fontSize: '1rem', color: '#374151' }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
