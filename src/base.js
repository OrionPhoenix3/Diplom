import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAObv3jQpIT5_MIRSXM_vRceEPJgDheo1k",
    authDomain: "react-diplom-project.firebaseapp.com",
    projectId: "react-diplom-project",
    storageBucket: "react-diplom-project.appspot.com",
    messagingSenderId: "691197063596",
    appId: "1:691197063596:web:d51177915ccf68c259ca09"
})

export default app