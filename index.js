const express = require("express");
const cors = require("cors");
const myImports = require("./config");

const User = myImports['user'];
const Category = myImports['category']
const Order = myImports['order']
const app = express();
app.use(express.json());
app.use(cors());

// Root
app.get("/", async (req, res) => {
  console.log("Helloworld");
  res.send("HelloWorld; It works!");
});

// Users Collection
app.get("/users", async (req, res) => {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/createUser", async (req, res) => {
  const data = req.body;
  await User.add({ data });
  console.log(data);
  res.send({ msg: "User Added" });
});

app.post("/updateUser", async (req, res) => {
  const id = req.body.id;
  delete req.body.id;
  const data = req.body;
  await User.doc(id).update(data);
  res.send({ msg: "Updated" });
});

app.delete("/deleteUser", async (req, res) => {
  const id = req.body.id;
  await User.doc(id).delete();
  res.send({ msg: "Deleted" });
});

// Categories Collection
app.get("/categories", async (req, res) => {
  const snapshot = await Category.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

// Orders Collection
app.get("/orders", async (req, res) => {
  const snapshot = await Order.get();
  const list = snapshot.docs.map((doc) => (doc.data()));
  res.send(list);
});

app.get("/getOrderById/:id", async (req, res) => {
  const currentOrder = await Order.doc(req.params.id).get();
  var jsonData = currentOrder.data();
  // jsonData["Bill"] = 30000000;
  res.send(jsonData);
});

app.listen(4000, () => console.log("Server is running on PORT 4000"));