<div style="border-top: 4px solid black; margin: 30px 0;"></div>

#  Cloud Notes App

<div style="border-top: 4px solid black; margin: 30px 0;"></div>

###  Tech Stack
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) 
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) 
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) 
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) 
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) 
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white) 
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white) 
![Azure](https://img.shields.io/badge/Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white) 
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)  

<div style="border-top: 4px solid black; margin: 30px 0;"></div>

##  Project Overview

Cloud Notes App is a **full-stack, cloud-ready notes application**. Users can create, read, update, and delete notes online. The app is **scalable**, **maintainable**, and deployed on the cloud.

### Key Features
-  React frontend with notes interface  
-  Node.js backend (REST API)  
-  Dockerized frontend & backend  
-  Kubernetes deployment on Azure (AKS)  
-  Terraform automated infrastructure  
-  Scalable architecture for production  
-  Optional MongoDB for storage  

<div style="border-top: 4px solid black; margin: 30px 0;"></div>


##  Project Structure

cloud-notes-app/
├── backend/
│ ├── index.js
│ ├── package.json
│ ├── package-lock.json
│ └── node_modules/
├── frontend/
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── node_modules/
├── infra/
│ └── terraform/
│ ├── main.tf
│ ├── variables.tf
│ └── outputs.tf
└── README.md


##  Infrastructure Diagram (Text Version)


   Internet
     │
     ▼
[ React Frontend] <───  Docker Container ────►  Kubernetes Service
│
▼
[ Node.js Backend] <─── Docker Container
│
▼
[🗄 MongoDB / Database]
│
▼
Terraform provisioned
AKS Cluster on Azure



##  How It Was Built

### 1️⃣ Backend
- Node.js server (`index.js`) with REST API  
- Installed dependencies:
npm install express cors body-parser
Dockerized backend:


docker build -t cloud-notes-backend .
docker run -p 5000:5000 cloud-notes-backend
2️⃣ Frontend
Created React app (create-react-app frontend)

Connected frontend to backend API

Dockerized frontend:


docker build -t cloud-notes-frontend .
docker run -p 3000:3000 cloud-notes-frontend

---


3️⃣ Kubernetes & Azure
Created Terraform configuration files for AKS

Provisioned AKS cluster:


terraform init
terraform plan
terraform apply
Deployed Docker containers to Kubernetes:


kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
kubectl get service

---


4️⃣ Scaling & Management
Scale deployments:


kubectl scale deployment backend --replicas=3
Manage infrastructure:
terraform destroy



---

 Personal Study Notes & Learnings

Learned how to containerize applications (Docker).

Understood Kubernetes concepts like pods, services, deployments.

Automated infrastructure provisioning with Terraform.

Explored Azure Kubernetes Service (AKS) for cloud-native deployment.

Improved knowledge of CI/CD practices for real-world scalability.

Learned to structure clean, maintainable code for production environments

---


📌 Notes
This project combines frontend, backend, and cloud infrastructure into a single, scalable application.

MongoDB can be used for persistent storage.

Designed to be production-ready and easy to maintain.

 Conclusion
Cloud Notes App is a modern full-stack cloud-native application using Docker, Kubernetes, Terraform, and Azure. It demonstrates real-world cloud infrastructure management, scalability, and production-ready deployment.

---

<img width="1024" height="1024" alt="image" src="https://github.com/user-attachments/assets/0000e3f7-343c-47d2-848c-145d1e2c39c6" />

Users access the React frontend → which talks to the Node.js backend → that connects to the MongoDB database. Everything runs inside Docker containers, managed by Kubernetes on an Azure AKS cluster, with Terraform used to set up the infrastructure.
