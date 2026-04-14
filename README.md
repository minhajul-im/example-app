# Full-Stack Hello World App

A complete, production-ready full-stack application with React + TypeScript frontend, NestJS backend, MySQL database, Docker containerization, Nginx reverse proxy, and automated GitHub Actions deployment.

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: NestJS
- **Database**: MySQL
- **Containerization**: Docker + Docker Compose
- **Reverse Proxy**: Nginx
- **CI/CD**: GitHub Actions

## Project Structure

```
full-stack-app/
├── docker-compose.yml
├── README.md
├── .github/workflows/deploy.yml
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── index.html
│   └── src/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   ├── nest-cli.json
│   └── src/
```

## Local Development

### Prerequisites

- Docker and Docker Compose installed
- Git installed

### Running Locally

1. **Clone the repository**:

   ```bash
   git clone <your-repo-url>
   cd full-stack-app
   ```

2. **Start all services**:

   ```bash
   docker compose up --build
   ```

3. **Stop services**:

   ```bash
   docker compose down
   ```

4. **Stop and remove volumes** (clears database):
   ```bash
   docker compose down -v
   ```

## License

MIT
