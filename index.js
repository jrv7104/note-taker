import express from "express";
import apiRouter from "./routes/api.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("app/public"));

app.use(express.json());
app.use("/api", apiROUTER);

app.listen(PORT, () => console.info(`Listening on PORT: $(PORT)`));