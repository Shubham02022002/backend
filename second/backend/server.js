import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
// app.use(express.static("dist"));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("success");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 3,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 4,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 5,
      title: "A joke",
      content: "This is a joke",
    },
  ];
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
