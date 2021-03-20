import bodyParser from "body-parser";
import express from "express";
import { generateSVG } from "./gradients";

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.use(express.static("public"));

app.get("/:value", async (req, res) => {
  const value = req.params.value;

  if (value == null || typeof value !== "string") {
    return res.status(400).json({ error: "Invalid request" });
  }

  let svg = "";
  try {
    svg = generateSVG(value);
  } catch (e) {
    svg = generateSVG("asdf");
  }

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
