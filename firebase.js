
// firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyAIXMK1k0dUduvaV2TtFWU5Txkf6pJ4NJw",
  authDomain: "casa-da-ponte-7f5f8.firebaseapp.com",
  projectId: "casa-da-ponte-7f5f8",
  storageBucket: "casa-da-ponte-7f5f8.appspot.com",
  messagingSenderId: "172293608231",
  appId: "1:172293608231:web:a18c694b821cc697b0342a"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
