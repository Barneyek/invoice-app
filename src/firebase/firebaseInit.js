import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCj5loWQLsvQMgCzU11MZoiqXu1bNk5fR8",
  authDomain: "invoice-app-1b706.firebaseapp.com",
  projectId: "invoice-app-1b706",
  storageBucket: "invoice-app-1b706.appspot.com",
  messagingSenderId: "1032148209011",
  appId: "1:1032148209011:web:7712b85a29930221d40906"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
