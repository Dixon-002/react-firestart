# React Firestart

## React Firebase Tailwind Redux Starter

A boilerplate for building modern React applications with Firebase, Tailwind CSS, and Redux Toolkit. This starter kit is designed to help developers quickly spin up a new React project with best practices and a scalable architecture.

[**View Demo**](https://firestart-react.web.app/)

## Table of Contents

 - [Features](#features)
 - [Tech Stack](#tech-stack)
 - [Getting Started](#getting-started)
 - [Firebase Setup](#firebase-setup)
 - [Using Firebase Authentication](#using-firebase-authentication)
 - [Working with Firestore Database](#working-with-firestore-database)
 - [Contributing](#contributing)
 - [License](#license)

## Features

 - **React 18** - Latest version of React for building user interfaces.
 - **Redux Toolkit** - Simplified state management.
 - **Firebase Integration** - Includes authentication and Cloud Firestore setup.
 - **Tailwind CSS** - Utility-first CSS framework for rapid UI development.
 - **Vite** - Fast and modern development server and build tool.
 - **React Router** - Declarative routing for React apps.
 - **Font Awesome Integration** - Use Font Awesome icons easily with React via the @fortawesome/react-fontawesome package.
 - **ESLint** - Linting setup with React and hooks best practices.


## Tech Stack

 - **React** - JS library for building user interfaces.
 - **Redux Toolkit** - State management for JavaScript apps.
 - **Firebase** - Backend-as-a-Service including authentication and Firestore.
 - **Tailwind CSS** - A utility-first CSS framework.
 - **Vite** - Development server and build tool.

## Getting Started

**Prerequisites**

Make sure you have [Node.js](https://nodejs.org/) installed on your system.

**Clone the Repository**

    git clone https://github.com/serhii-kalashnyk/react-firestart.git
    cd react-firestart

**Install Dependencies**

    npm install

## Firebase Setup

 
1. **Create a New Project in Firebase Console:**
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click on "Add Project" and follow the prompts to create a new project.
2. **Add Firebase to Your App:**
   - Once your project is created, you'll see the "Get started by adding Firebase to your app" screen.
   - Select the Web option and follow the instructions provided.
3. **Skip the Firebase Installation Step:**
   - Firebase is already installed in this project, so you can skip the `npm install firebase` step mentioned in the Firebase setup instructions.
4. **Copy Your Firebase Configuration:**
   - After registering your app, you'll receive your Firebase configuration. Copy the configuration details.
   - Open the `.env` file included in this project and paste your Firebase configuration details:
   ```bash
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id 
5. ****Set Up Authentication:****
   - In the Firebase Console, navigate to the **Authentication** section.
   - Under the **Sign-in method** tab, enable **Email/Password** as your authentication method.
6. **Start Firestore Database:**
   - In the Firebase Console, go to the **Firestore Database** section.
   - Set up your Cloud Firestore database by following the prompts.

**Start the Development Server**

    npm run dev

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

You’ll land on the sign-in page, where you can navigate to the Sign Up page to create a new account.
Once you’ve created an account, you’re all set!

## Using Firebase Authentication

Firebase Authentication is fully integrated into the project, allowing you to handle user sign-up, login, logout, and password reset functionalities effortlessly.

•  **Sign In/Sign Up:** Pages for email/password authentication are already set up.

•  **Password Reset:** A “Forgot Password” page is included to handle password recovery.

All you need to do is set up your Firebase project and enter your configuration details in the .env file. The authentication flow is ready to go out of the box.

**Note:** By default, when you attempt to send a password reset email, Firebase will return a success message regardless of whether the email exists in your authentication project. This means that users will not receive an error message if they enter a non-existent email, and no email will be sent. If you want to display an error message when the email doesn’t exist, follow the instructions provided [here](https://cloud.google.com/identity-platform/docs/admin/email-enumeration-protection).

## Working with Firestore Database

The project is pre-configured to work seamlessly with Firebase’s Cloud Firestore. You can start interacting with your Firestore database immediately.

An example is already included in the project to show you how to create a new document for a user and retrieve it. This example serves as a template that you can easily adapt to create, update, and get documents in any specific collection.

You don’t need to worry about any additional setup—everything is ready to go once you’ve configured your Firebase project. Simply follow the Firebase setup instructions, and you can begin working with your Firestore database right away, allowing you to focus on building your app rather than dealing with backend configurations.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.