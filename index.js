import "dotenv/config";
import express from "express";
import postRoute from "./post/postRoute.js";

const app = express();
const __dirname = import.meta.dirname;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.use("/posts", postRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
