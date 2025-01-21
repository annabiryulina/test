import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvAz6EDJCU6rzaCRPhQp_Wk-EGXWxhD88",
  authDomain: "test-registration-ef9f0.firebaseapp.com",
  projectId: "test-registration-ef9f0",
  storageBucket: "test-registration-ef9f0.firebasestorage.app",
  messagingSenderId: "909843164226",
  appId: "1:909843164226:web:f80613af69adfd08b351db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signupForm = document.getElementById('signup_form');
signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('signup_email').value;
  const password = document.getElementById('signup_password').value;

  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    alert ('Регистрация прошла успешно')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert ('Ошибка регистрации')
    // ..
  });

})

const signinForm = document.getElementById('signin_form');
signinForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('signin_email').value;
  const password = document.getElementById('signin_password').value;
  
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert ('Авторизация прошла успешно')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert ('Ошибка регистрации')
  });
})
