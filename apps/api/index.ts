import express from "express";

const app = express();

app.post("/api/v1/website", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get("/api/v1/website/status", (req, res) => {
  res.json({ message: "Website is running" });
});

app.get("/api/v1/websites", (req, res) => {
  res.json({ message: "Websites" });
}); 

app.delete("/api/v1/website/:id",   (req, res) => {
  res.json({ message: "Website deleted" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});