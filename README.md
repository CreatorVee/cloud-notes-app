<div style="border-top: 4px solid black; margin: 30px 0;"></div>

#  Cloud Notes App

<div style="border-top: 4px solid black; margin: 30px 0;"></div>

###  Tech Stack
 *CLICK ON THE DIFFERENT TECH  BADGES TO SEE HOW I USED THE TOOLS IN MY WORK*   

# DevOps & Infrastructure:

[![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)](https://github.com/CreatorVee/cloud-notes-app/blob/main/infra/k8s/deployment.yaml)
[![Terraform](https://img.shields.io/badge/Terraform-623CE4?style=for-the-badge&logo=terraform&logoColor=white)](https://github.com/CreatorVee/cloud-notes-app/blob/main/infra/terraform/main.tf)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://github.com/CreatorVee/cloud-notes-app/tree/main/infra/docker)

---

# Backend Technologies:
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://github.com/CreatorVee/cloud-notes-app/blob/main/backend/index.js)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)](https://github.com/CreatorVee/cloud-notes-app/blob/main/backend/package.json)

---


# Frontend Technologies:
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://github.com/CreatorVee/cloud-notes-app/blob/main/frontend/dockerfile)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/CreatorVee/cloud-notes-app/blob/main/frontend/package.json)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/CreatorVee/cloud-notes-app/blob/main/frontend/public/index.html)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/CreatorVee/cloud-notes-app/blob/main/frontend/src/App.css)


---

# Cloud Platform:
[![Azure](https://img.shields.io/badge/Microsoft%20Azure-0089D0?style=for-the-badge&logo=microsoftazure&logoColor=white)](https://github.com/CreatorVee/cloud-notes-app/blob/main/infra/terraform/variables.tf)




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


## 📂  Project Structure
CLOUD NOTES-APP/

├── BACKEND/

│ ├── index.js

│ ├── package.json

│ ├── package-lock.json

│ └── node_modules/

├── FRONTEND/

│ ├── src/

│ ├── public/

│ ├── package.json

│ └── node_modules/

├── INFRA/

│ └── terraform/

│ ├── main.tf

│ ├── variables.tf

│ └── outputs.tf

└── README.md


## 🌐 Infrastructure IDEA:

You open a website → React frontend shows up.

That frontend talks to the backend (Node.js) through Kubernetes.

Backend talks to a database (MongoDB) to store and get data.MONGODB was not used in this project)-Its an optional tool to seriously needed to preserve data of users etc.

Everything (frontend, backend, DB) runs inside containers.

Terraform sets up the playground (Kubernetes cluster on Azure) where all these containers live



##  How It Was Built

### 1️- Backend

- Node.js server (`index.js`) with REST API  
- Installed dependencies:
npm install express cors body-parser
Dockerized backend:


docker build -t cloud-notes-backend .
docker run -p 5000:5000 cloud-notes-backend


## 2️- Frontend
Created React app (create-react-app frontend)

Connected frontend to backend API

Dockerized frontend:


docker build -t cloud-notes-frontend .
docker run -p 3000:3000 cloud-notes-frontend

---


## 3️- Kubernetes & Azure
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


## 4️- Scaling & Management
Scale deployments:


kubectl scale deployment backend --replicas=3
Manage infrastructure:
terraform destroy



---

# 📚 Personal Study Notes & Learnings

Learned how to containerize applications (Docker).

Understood Kubernetes concepts like pods, services, deployments.

Automated infrastructure provisioning with Terraform.

Explored Azure Kubernetes Service (AKS) for cloud-native deployment.

Improved knowledge of CI/CD practices for real-world scalability.

Learned to structure clean, maintainable code for production environments

---


# 📝 Notes
This project combines frontend, backend, and cloud infrastructure into a single, scalable application.

MongoDB can be used for persistent storage.

Designed to be production-ready and easy to maintain.

 Conclusion
Cloud Notes App is a modern full-stack cloud-native application using Docker, Kubernetes, Terraform, and Azure. It demonstrates real-world cloud infrastructure management, scalability, and production-ready deployment.

---
#  📸 CLOUD-NOTES-APP-EVIDENCE 


<img width="1052" height="860" alt="2025-09-14_01h18_59" src="https://github.com/user-attachments/assets/dd3d2f32-ef83-48e9-a120-0ea205fe019d" />



---

<img width="1024" height="1024" alt="image" src="https://github.com/user-attachments/assets/0000e3f7-343c-47d2-848c-145d1e2c39c6" />


Users access the React frontend → which talks to the Node.js backend → that connects to the MongoDB database. Everything runs inside Docker containers, managed by Kubernetes on an Azure AKS cluster, with Terraform used to set up the infrastructure.

---


