import express from "express";

const app = express();

const port = 3001;

app.get("/", (req, res) => {
  res.send("<h1> I am Karthikeyan</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1> this is contact page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1> this is about page</h1>");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
