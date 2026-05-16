# Project Management System (Jira/Trello Clone)

A full-stack project management application inspired by Jira and Trello, built to support team collaboration, task tracking, and secure project management workflows. The application enables users to create projects, manage tasks, assign responsibilities, and monitor progress through a modern frontend interface integrated with a scalable Spring Boot backend.

---

# 🚀 Features

## 🔐 Authentication & Security
- JWT-Based Authentication
- Secure Login & Registration
- Role-Based Authorization (Admin/User)
- Protected REST APIs using Spring Security
- Password Encryption with BCrypt

## 📁 Project Management
- Create, Update, Delete Projects
- View All Projects
- Assign Users to Projects
- Track Project Progress

## ✅ Task Management
- Create & Manage Tasks
- Assign Tasks to Team Members
- Update Task Status
- Task Priority & Deadlines
- Project-wise Task Tracking

## 👥 User Management
- User Registration & Login
- Role Management
- Multi-User Collaboration Support

## 🎨 Frontend Features
- Responsive User Interface
- Dashboard for Projects & Tasks
- API Integration using Axios/Fetch
- Form Validation
- Dynamic Data Rendering

---

# 🛠️ Tech Stack

## Backend
- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT Authentication
- Maven

## Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Bootstrap / Tailwind CSS

## Database
- MySQL

## Tools
- Postman
- Git & GitHub

---

# 🏗️ System Architecture

The project follows a clean layered architecture:

```bash
Frontend (React)
       ↓
REST API Layer
       ↓
Spring Boot Backend
       ↓
Service Layer
       ↓
Repository Layer
       ↓
MySQL Database

📂 Project Structure
project-management-system
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── security
│   └── config
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   ├── hooks
│   └── styles

🔗 REST API Modules
Authentication APIs
Register User
Login User
Generate JWT Token
Project APIs
Create Project
Update Project
Delete Project
Get All Projects
Task APIs
Create Task
Update Task
Assign Task
Delete Task
Get Tasks by Project
🗄️ Database Design
Entity Relationships
One User → Many Projects
One Project → Many Tasks
One User → Many Assigned Tasks
⚙️ Installation & Setup
Clone Repository
git clone https://github.com/your-username/project-management-system.git
cd project-management-system
Backend Setup
Configure MySQL Database

Update application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/project_management
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
Run Backend
cd backend
mvn spring-boot:run

Backend runs at:

http://localhost:8080
Frontend Setup
Install Dependencies
cd frontend
npm install
Start Frontend
npm start

Frontend runs at:

http://localhost:3000
🧪 API Testing

All APIs were tested using Postman with organized collections for:

Authentication Testing
CRUD Operations
Functional Testing
Regression Testing
📸 Application Workflow
User Registration/Login
JWT Token Generation
Create Project
Add Tasks to Project
Assign Tasks to Users
Update Task Status
Track Project Progress
✨ Future Enhancements
Real-Time Notifications
Drag & Drop Kanban Board
File Attachments
Email Integration
Docker Deployment
Swagger API Documentation
Team Chat System
👨‍💻 Author

VINOTH N

GitHub: https://github.com/your-username
LinkedIn: https://linkedin.com/in/your-profile
