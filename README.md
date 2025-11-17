# DevOps CI/CD Pipeline Project

A complete DevOps project featuring automated CI/CD pipeline with Docker, Kubernetes, and monitoring.

## 🚀 Features

- ✅ Automated CI/CD with GitHub Actions
- ✅ Containerized application with Docker
- ✅ Kubernetes orchestration
- ✅ Infrastructure as Code with Terraform
- ✅ Monitoring with Prometheus & Grafana
- ✅ Automated testing
- ✅ Health checks and readiness probes

## 🛠️ Setup

### Prerequisites
- Docker
- Kubernetes cluster
- GitHub account
- Docker Hub account

### Local Development
```bash
docker-compose up
```

### Deploy to Kubernetes
```bash
kubectl apply -f kubernetes/
```

## 📊 Monitoring

- Prometheus: http://localhost:9090
- Grafana: http://localhost:3001

## 🔐 GitHub Secrets Required

- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub password/token
- `KUBE_CONFIG`: Base64 encoded Kubernetes config

## 📝 CI/CD Flow

1. Push code to GitHub
2. GitHub Actions triggers automatically
3. Runs tests
4. Builds Docker image
5. Pushes to Docker Hub
6. Deploys to Kubernetes cluster

## 🤝 Contributing

Pull requests are welcome!

## 📄 License

MIT License
