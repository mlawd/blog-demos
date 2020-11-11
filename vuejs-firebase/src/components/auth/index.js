import firebase from "firebase/app";
import "firebase/auth";
import { ref } from "vue";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

export const user = ref(null);
export const initialised = ref(false);

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

auth.onAuthStateChanged((u) => {
  user.value = u;
  initialised.value = true;
});

export async function logout() {
  await auth.signOut();
}

export async function google() {
  await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

export function useSignup() {
  const email = ref("");
  const password = ref("");

  async function signup() {
    if (email.value == "" || password.value == "") return;

    const creds = await auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );

    if (!creds.user) throw Error("Signup failed");

    user.value = creds.user;
  }

  return {
    email,
    password,
    signup,
  };
}

export async function useLogin() {
  const email = ref("");
  const password = ref("");

  async function login() {
    const resp = await auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );

    if (!resp.user) throw Error("No user");

    user.value = resp.user;
  }

  return {
    email,
    password,
    login,
  };
}
