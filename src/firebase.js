// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVmwt5Ia3TMsQVOXwQy-fVr46eWc0A9_A",
  authDomain: "kirbyproject-carrot.firebaseapp.com",
  projectId: "kirbyproject-carrot",
  storageBucket: "kirbyproject-carrot.appspot.com",
  messagingSenderId: "763048726272",
  appId: "1:763048726272:web:6a646ca350bf9c77a06de5",
  measurementId: "G-SGLQQH5063"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

export { firestore };