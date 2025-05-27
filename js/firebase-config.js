// js/firebase-config.js

// Usando compat (funciona com script tradicional no navegador)
const firebaseConfig = {
    apiKey: "AIzaSyCZxjFvjgdKPXrOpHJBXmilaliAGMF1EQM",
    authDomain: "academia-ironfit.firebaseapp.com",
    projectId: "academia-ironfit",
    storageBucket: "academia-ironfit.appspot.com", // CORRIGIDO
    messagingSenderId: "1074941751430",
    appId: "1:1074941751430:web:d365982e18a2d53cc5a107"
  };
  
  // Inicializa Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Inicializa Firestore
  const db = firebase.firestore();
  