# **UndocuLink**
### Empowering Undocumented and Immigrant Students with Access to Career Opportunities

---

## **Overview**
UndocuLink is a career resource platform tailored for undocumented and immigrant students. Built with modern technologies, the platform centralizes job opportunities, scholarships, fellowships, and research roles while providing AI-powered tools for personalized career guidance.

---

## **Tech Stack**

| **Layer**             | **Technology**                     | **Purpose**                               |
|-----------------------|------------------------------------|-------------------------------------------|
| **Frontend**          | Next.js (React)                   | UI development, dynamic routing           |
| **Backend**           | Next.js API Routes                | API endpoints for OpenAI integration      |
| **Database**          | Firebase Firestore                | Real-time NoSQL data storage              |
| **Authentication**    | Firebase Authentication           | Secure user sign-up and login             |
| **AI Integration**    | OpenAI API                        | Personalized career suggestions & tools   |
| **Hosting**           | Vercel                            | Fast, scalable hosting for frontend & APIs|
| **Environment**       | Node.js + Vercel CI/CD            | Deployment pipeline and runtime           |

---

## **Project Structure**

```
undoculink/
├── public/                 # Static files (e.g., images)
├── pages/                  # Next.js pages
|   ├── index.js          # Home page
|   ├── login.js          # User authentication page
|   └── api/             # Backend API routes
|       └── openai.js    # API route for OpenAI integration
├── components/             # Reusable React components
|   └── OpenAIChat.js     # Chat interface for AI tools
├── firebase.js             # Firebase configuration
├── styles/                 # Global and component styles
├── .env.local              # Environment variables
└── package.json            # Project dependencies
```

---

## **Key Features**

### 1. **Next.js Frontend**
- **Dynamic Routing**: Page-based routing with `pages/` directory.
- **Reusable Components**: Modular components for clean, maintainable code.
- **Responsive Design**: Optimized for mobile and desktop.

### 2. **Firebase Integration**
- **Authentication**: 
   - User sign-up/login with **Firebase Authentication** (email/password).
   - Minimal user data stored for enhanced privacy.

- **Firestore Database**:
   - Real-time data storage for job postings, scholarships, fellowships, and organizations.
   - Sample schema:
     ```json
     {
       "title": "Software Engineer Intern",
       "company": "TechCorp",
       "stipend": "$3000/month",
       "deadline": "2024-12-15",
       "description": "Looking for skilled interns."
     }
     ```

### 3. **OpenAI API Integration**
- **API Route**: Secure backend interaction with OpenAI via Next.js `api/` folder.
- **Features**:
   - Career suggestions.
   - Real-time resume feedback.
   - User support through AI-driven responses.

- **Example Request**:
   ```javascript
   const response = await fetch("/api/openai", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ prompt: "Help me improve my resume." }),
   });
   const data = await response.json();
   console.log(data.result);
   ```

### 4. **Deployment with Vercel**
- **Frontend**: Hosted on Vercel with automatic deployments.
- **Backend**: API routes for OpenAI hosted as serverless functions.
- **CI/CD**: Integrated via Vercel’s deployment pipeline.

---

## **Environment Setup**

1. **Clone the Repository**
```bash
 git clone https://github.com/your-repo/undoculink.git
 cd undoculink
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment Variables**
Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
OPENAI_API_KEY=your_openai_api_key
```

4. **Run the Development Server**
```bash
npm run dev
```
- Local Server: [http://localhost:3000](http://localhost:3000)

5. **Deploy to Vercel**
```bash
vercel
```

---

## **API Documentation**

### **OpenAI API Route**
| **Endpoint**    | **Method** | **Description**                  |
|-----------------|------------|----------------------------------|
| `/api/openai`   | POST       | Accepts a user prompt and returns OpenAI's response. |

**Request Example**:
```json
POST /api/openai
{
    "prompt": "Provide career advice for a CS student."
}
```

**Response Example**:
```json
{
    "result": "As a CS student, consider internships in software development..."
}
```

---

## **Deployment**
- **Frontend and API Routes**: Deployed on Vercel.
- **Firebase**:
   - Authentication managed securely.
   - Firestore for storing resource data.

---

## **Contributing**
We welcome contributions! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## **License**
This project is licensed under the **MIT License**.

---

## **Contact**
For questions or contributions:
- **Email**: [contact@undoculink.com](mailto:contact@undoculink.com)
- **Project Lead**: Alejandro Fonseca

---

## **Future Improvements**
1. Add advanced search and filtering features.
2. Implement multilingual support.
3. Introduce user dashboards for saving opportunities.
4. Mobile app development using React Native.
