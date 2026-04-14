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
└── mysql-init/
    └── init.sql
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

3. **Access the application**:
   - Frontend: http://localhost
   - Backend API: http://localhost:3000/hello
   - Database: localhost:5432

4. **Stop services**:

   ```bash
   docker compose down
   ```

5. **Stop and remove volumes** (clears database):
   ```bash
   docker compose down -v
   ```

## Database

The application uses MySQL with one table:

**Table: hello**

- `id` (SERIAL PRIMARY KEY)
- `key` (VARCHAR UNIQUE)
- `value` (TEXT)

Initial data is automatically inserted on first run:

- key: `hello`
- value: `hello world`

## API Endpoints

### GET /hello

Returns:

```json
{
  "message": "hello world",
  "table": [
    {
      "id": 1,
      "key": "hello",
      "value": "hello world"
    }
  ]
}
```

## Deploy to VPS (Hostinger)

### Prerequisites

- VPS with Docker and Docker Compose installed
- SSH access to VPS
- GitHub repository

### Step 1: Set Up SSH Key on VPS

1. Generate SSH key pair on your local machine:

   ```bash
   ssh-keygen -t ed25519 -C "github-actions"
   ```

2. Copy public key to VPS:

   ```bash
   ssh-copy-id username@your-vps-ip
   ```

3. Get the private key content:
   ```bash
   cat ~/.ssh/id_ed25519
   ```

### Step 2: Add GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:

- `VPS_HOST`: Your VPS IP address
- `VPS_USERNAME`: SSH username (e.g., `root` or `ubuntu`)
- `VPS_SSH_KEY`: Content of your private key file (from step 1.3)
- `VPS_PORT`: SSH port (default: 22)

### Step 3: Clone Repository on VPS

SSH into your VPS and run:

```bash
cd ~
git clone <your-repo-url> full-stack-app
cd full-stack-app
```

### Step 4: Initial Deployment

Run manually on VPS:

```bash
cd ~/full-stack-app
docker compose up --build -d
```

### Step 5: Automatic Deployment

Now, every time you push to the `main` branch, GitHub Actions will automatically:

1. SSH into your VPS
2. Pull the latest code
3. Rebuild and restart containers
4. Clean up unused Docker images

## Exposing Port 80 Publicly

### Option 1: Direct Port 80 (Recommended)

If port 80 is not in use, the application is already accessible at `http://your-vps-ip`

### Option 2: Using a Domain Name

1. Point your domain to VPS IP address
2. Access at `http://your-domain.com`

### Option 3: Using a Different Port

If port 80 is occupied, modify `docker-compose.yml`:

```yaml
frontend:
  ports:
    - "8080:80" # Change 8080 to your preferred port
```

Access at: `http://your-vps-ip:8080`

### Firewall Configuration

Ensure port 80 is open on your VPS firewall:

**UFW (Ubuntu)**:

```bash
sudo ufw allow 80/tcp
sudo ufw reload
```

**Firewalld (CentOS)**:

```bash
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --reload
```

## Environment Variables

### Backend

- `NODE_ENV`: Environment (production/development)
- `PORT`: Backend port (default: 3000)
- `MYSQL_HOST`: Database host
- `MYSQL_PORT`: Database port (default: 3306)
- `MYSQL_USERNAME`: Database username
- `MYSQL_PASSWORD`: Database password
- `MYSQL_DATABASE`: Database name

### Database

- `MYSQL_DATABASE`: Database name
- `MYSQL_USER`: Database username
- `MYSQL_PASSWORD`: Database password
- `MYSQL_ROOT_PASSWORD`: Root password

## Troubleshooting

### Database Connection Issues

1. Check if database is healthy:

   ```bash
   docker compose ps
   ```

2. View database logs:
   ```bash
   docker compose logs db
   ```

### Backend Can't Connect to Database

Ensure `DB_HOST` is set to `db` (Docker service name), not `localhost`

### Frontend Can't Reach Backend

Nginx proxies `/api/` requests to backend. Check nginx.conf and ensure backend service is named `backend` in docker-compose.yml

### Port Already in Use

Change the port mapping in docker-compose.yml:

```yaml
ports:
  - "8080:80" # Use 8080 instead of 80
```

## Development Tips

### View Logs

```bash
# All services
docker compose logs -f

# Specific service
docker compose logs -f backend
docker compose logs -f frontend
docker compose logs -f db
```

### Rebuild Specific Service

```bash
docker compose up --build -d backend
```

### Access Database Directly

```bash
docker compose exec db mysql -u hello_user -phello_password hello_db
```

## License

MIT
