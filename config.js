const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyBgWlMy-i79hoYyTqgXMDZjpLd7IPzeLrk",
  authDomain: "gomarche-5345d.firebaseapp.com",
  projectId: "gomarche-5345d",
  storageBucket: "gomarche-5345d.appspot.com",
  messagingSenderId: "167810309178",
  appId: "1:167810309178:web:65999f927b1bd2de4a2903",
  measurementId: "G-EJBBXLVBVZ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const User = db.collection("users");
const Category = db.collection("categories");
const Order = db.collection("orders");

module.exports = {user: User, category: Category, order: Order};