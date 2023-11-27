// Importa las funciones que necesitas de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Agrega los SDKs para los productos de Firebase que deseas utilizar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de tu aplicación web de Firebase
// Para Firebase JS SDK v7.20.0 y versiones posteriores, measurementId es opcional
const firebaseConfig = {
  apiKey: "AIzaSyBK9u3wXknOlRMKdFD6XtWRP2nYg1CFVko",
  authDomain: "fb-api-7dfc0.firebaseapp.com",
  projectId: "fb-api-7dfc0",
  storageBucket: "fb-api-7dfc0.appspot.com",
  messagingSenderId: "526855968059",
  appId: "1:526855968059:web:cc5048493100b07063131e",
  measurementId: "G-LQM7VHYVW5"
};

// Inicializa Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
