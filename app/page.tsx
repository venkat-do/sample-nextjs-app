export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Welcome to the Sample Next.js Application!</h1>

      <h2>Available Endpoints:</h2>
      <ul>
        <li><code>GET /</code> - This page</li>
        <li><code>GET /api/health</code> - Health check</li>
        <li><code>GET /api/users</code> - Get users list</li>
        <li><code>GET /api/stats</code> - Get server stats</li>
        <li><code>POST /api/echo</code> - Echo back request data</li>
      </ul>
    </div>
  )
}
