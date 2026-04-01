# 🚀 JobBoard — Premium Django Recruitment Platform

![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-5.0+-092E20?style=for-the-badge&logo=django&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

JobBoard is a modern, high-performance job recruitment platform built with Django. It features a sleek, dark-themed UI designed for a professional "Glassmorphic" user experience, connecting top talent with industry-leading employers.

---

## ✨ Key Features

### 👤 User Roles
*   **Job Seekers:** Explore thousands of listings, save interesting roles, and track applications in real-time.
*   **Employers:** Post jobs, manage listings, and review incoming candidate applications with an advanced dashboard.

### 💼 Core Functionalities
*   **Premium Landing Page:** Aesthetic hero section, dynamic stats, and popular category highlights.
*   **Advanced Search & Filtering:** Filter by keywords, location, and category simultaneously.
*   **Employer Dashboard:** Robust management of job posts including **Active/Inactive** toggles and **Real-Time Applicant Counts**.
*   **Application System:** One-click apply for job seekers, with automated notifications for employers.
*   **Status Management:** Employers can review, accept, or reject candidates directly from the dashboard.

---

## 🛠️ Tech Stack
*   **Backend:** Python 3.12, Django 6.0
*   **Frontend:** Tailwind CSS (via CDN), Google Fonts (Inter)
*   **Database:** SQLite (Default for Dev)
*   **Themes:** Specialized Dark-Neon "Glassmorphism" design system.

---

## 🚀 Step-by-Step Installation

Follow these steps to get your own version of JobBoard running locally:

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/job-board-application.git
cd job-board-application
```

### 2. Set Up Virtual Environment (Windows)
```powershell
python -m venv venv
.\venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install django pillow
```

### 4. Apply Database Migrations
```bash
python manage.py makemigrations accounts jobs applications notifications
python manage.py migrate
```

### 5. Create Admin Superuser
```bash
python manage.py createsuperuser
```

### 6. Run Development Server
```bash
python manage.py runserver
```
Visit `http://127.0.0.1:8000/` in your browser to explore the platform!

---

## 📁 Project Structure

*   `accounts/`: Custom User models and authentication logic.
*   `jobs/`: Management of job listings, categories, and landing page.
*   `applications/`: Handling of user job applications and tracking.
*   `notifications/`: Real-time alert system for user interactions.
*   `templates/`: Modern frontend HTML layouts using Tailwind CSS.

---

## 🎨 UI/UX Previews

| Landing Page | Job Search | Dashboard |
| :---: | :---: | :---: |
| Premium Dark Theme | Multi-Filter Power | Real-time Management |

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---
**Developed by [Your Name]** 🚀
