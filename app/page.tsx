export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Welcome to the Sample Next.js Application!</h1>
      <p>This is a simple Next.js web application optimized for Vercel with Edge Runtime.</p>

      <h2>Available Endpoints:</h2>
      <ul>
        <li><code>GET /</code> - This page</li>
        <li><code>GET /api/health</code> - Health check</li>
        <li><code>GET /api/users</code> - Get users list</li>
        <li><code>GET /api/stats</code> - Get server stats</li>
        <li><code>POST /api/echo</code> - Echo back request data</li>
      </ul>

      <h2>Features:</h2>
      <ul>
        <li>Server-side rendering with Next.js</li>
        <li>Edge Runtime for optimal Vercel performance</li>
        <li>API routes for REST endpoints</li>
        <li>JSON responses</li>
        <li>Built-in error handling</li>
        <li>Production-ready configuration</li>
        <li>Optimized for fast cold starts</li>
      </ul>

      <div style={{ marginTop: '2rem', padding: '1rem', borderRadius: '8px', border: '1px solid #0ea5e9' }}>
        <h3>Vercel Optimized</h3>
        <p>This application uses Edge Runtime for:</p>
        <ul>
          <li>Faster cold starts</li>
          <li>Global edge distribution</li>
          <li>Lower latency responses</li>
          <li>Cost-effective scaling</li>
        </ul>
        <p><strong>Server Status:</strong> Running ✅</p>
        <p><strong>Runtime:</strong> Edge</p>
        <p><strong>Timestamp:</strong> {new Date().toISOString()}</p>
      </div>
    </div>
  )
}
