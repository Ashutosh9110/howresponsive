# HowResponsive

A website responsiveness checker built with Next.js and Node.js.

## Development Setup

1. Install dependencies:
```bash
npm run install:all
```

2. Start development servers:
- Frontend: `cd frontend && npm run dev`
- Backend: `cd backend && npm run dev`

## Production Deployment

1. Build the project:
```bash
npm run build
```

This will create a `dist` folder with the following structure:
```
dist/
├── frontend/     # Next.js build output
└── backend/      # Node.js build output
```

2. Deploy to VM:
- Copy the entire `dist` folder to your VM
- Navigate to the backend directory: `cd dist/backend`
- Install production dependencies: `npm install --production`
- Start the server: `node dist/index.js`

### Environment Variables

Make sure to set up the following environment variables on your VM:
- `NODE_ENV=production`
- Any other environment variables required by your application

### Using PM2 (Recommended)

For production deployment, it's recommended to use PM2 to manage your Node.js process:

```bash
# Install PM2 globally
npm install -g pm2

# Start the application
pm2 start dist/backend/dist/index.js --name howresponsive

# Other useful PM2 commands
pm2 logs howresponsive    # View logs
pm2 status               # Check status
pm2 restart howresponsive # Restart application
```

## License

MIT

