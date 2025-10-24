# Sample Next.js Application

A simple Next.js web application for benchmarking and testing purposes.

## Endpoints

- `GET /` - Welcome page with application info
- `GET /api/health` - Health check
- `GET /api/users` - Sample users data
- `GET /api/stats` - Server statistics
- `POST /api/echo` - Echo back request data

## Running Locally

```bash
npm install
npm run dev
```

The application will start on port 3000 (or PORT environment variable).

For production:

```bash
npm install
npm run build
npm start
```

## Deployment

This application is designed to work with DigitalOcean App Platform and other cloud providers that support Next.js applications.

## API Examples

### Health Check
```bash
curl http://localhost:3000/api/health
```

### Get Users
```bash
curl http://localhost:3000/api/users
```

### Server Stats
```bash
curl http://localhost:3000/api/stats
```

### Echo Data
```bash
curl -X POST http://localhost:3000/api/echo \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello World"}'
```
