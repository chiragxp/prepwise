# Prepwise

An AI app for practicing mock-interviews for IT Professionals. In this app, users can talk with an AI agent to generate interview(s) based on their preferences, and once its generated, the user can practice that interview and get a detailed feedback including areas to improve!

## 🚀 Demo

Live app: http://ai-prep-beta.vercel.app/

## 🧰 Tech Stack

- Next.js v15
- React v19 + TypeScript
- TailwindCSS v4 and ShadCN for appealing UI
- VAPI - Voice-based AI Agent to speak with
- Gemini AI for generating interviews and feedback
- Firebase for Authentication and Database Management
- ZOD for schema declaration and validation

## 📦 Features

- Feature 1 – Secure authentication with Firebase
- Feature 2 – Generate and practice a mock interview with AI-based voice agent
- Feature 3 – Get a detailed feedback once the interview is successfully completed

## 📸 Screenshots

- Sign-in Screen:

![Sign-in Screen](/app-screenshots/Sing-in_Page.png)

- Homepage:

![Homescreen](/app-screenshots/Homepage.png)

- Interview Generation Page:

![Interview Generation Page](/app-screenshots/Interview-Generation_Page.png)

- Live Interview Page

![Live Interview Screen](/app-screenshots/Live-Interview-Page.png)

- Feedback Page:

![Feedback Page](/app-screenshots/Feedback_Page.png)

## 🛠️ Installation

1. Clone the project and install dependencies..

  ```bash
  git clone https://github.com/your-username/your-repo-name.git
  cd your-repo-name
  npm install
  ```

2. Create a file named '.env.local' in the root directory

3. Add keys as below:
    FIREBASE_PROJECT_ID="_your key_" <!-- You need to create a project in firebase for that -->
    FIREBASE_PRIVATE_KEY="_your key_" <!-- Can be generated on firebase -->
    FIREBASE_CLIENT_EMAIL="_your email from firebase admin SDK_"
    GOOGLE_GENERATIVE_AI_API_KEY="_Google AI Studio API key_" <!-- Generate a key from Gemini AI Studio -->
    NEXT_PUBLIC_VAPI_WEB_TOKEN="_your vapi web token key_" <!-- Generate a key from VAPI.ai after sign-up -->
    NEXT_PUBLIC_VAPI_WORKFLOW_ID="_your vapi workflow id_" <!-- Can be obtained from vapi after sign-up -->

4. Once all keys are added, run the command: ```npm run dev```

5. Copy paste the URL from terminal(http://localhost:3000) and explore the app in your browser!
