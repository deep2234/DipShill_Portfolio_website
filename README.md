# 🌐 Portfolio Website (In Progress)

A responsive portfolio website built with HTML, Tailwind CSS, and JavaScript. Currently integrating production-ready cloud infrastructure using AWS, Docker, Terraform and Jenkins.
---

## 🚀 Project Overview

- **Frontend:** Static site built with Tailwind CSS and JavaScript  
- **Containerization:** Docker + NGINX for serving build output  
- **Infrastructure (WIP):** AWS ECS, ECR, ALB, Route53, ACM (SSL), CloudWatch  
- **CI/CD (WIP):** Jenkins pipeline to automate build, dockerize, push to ECR, and deploy to ECS  
- **IaC:** Terraform for provisioning AWS infrastructure  
- **Monitoring (Planned):** CloudWatch dashboards and alarms for logs and metrics  

---

## 🛠️ Tech Stack

- **Frontend:** HTML, Tailwind CSS, JavaScript  
- **DevOps:** Docker, Jenkins, Terraform  
- **Cloud Services (WIP):** AWS ECS (EC2), ECR, ALB, Route53, ACM, CloudWatch  

---

## ✅ Features

- Responsive and mobile-friendly UI  
- Modular Terraform setup for reusable infrastructure  
- SSL via ACM and custom domain (in progress)  
- Log monitoring and alerting with CloudWatch (planned)  
- CI/CD automation with Jenkins (WIP)  

---

## 📌 Status

> ✅ **Frontend Complete**  
> 🔧 **Cloud Infrastructure & CI/CD Pipeline – In Progress**

⚠️ *Note: After I finish the project, I may update, replace, or remove some technologies during final optimization.*

---

## 📦 Deployment (Planned Workflow)

1. `npm run build` – Generates static assets  
2. Dockerize with NGINX  
3. Push image to **Amazon ECR**  
4. Provision infra via **Terraform**  
5. Deploy via **Jenkins** pipeline  
6. Monitor with **CloudWatch**

---

## 🔐 Domain & Security (Planned)

- Custom domain via **Route53**  
- HTTPS via **ACM-issued SSL**  
- ALB routing traffic to ECS service  

---

## 📊 Monitoring & Alerts (Planned)

- CloudWatch dashboards for ECS, EC2, ALB  
- Alarms for resource usage and service health  
- Optional SNS/email notifications  

