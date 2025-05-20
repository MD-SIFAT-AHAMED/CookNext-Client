import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_env_apiKey,
  authDomain: import.meta.env.VITE_env_authDomain,
  projectId: import.meta.env.VITE_env_projectId,
  storageBucket: import.meta.env.VITE_env_storageBucket,
  messagingSenderId: import.meta.env.VITE_env_messagingSenderId,
  appId: import.meta.env.VITE_env_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
