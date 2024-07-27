// app.js

import express from "express";
import cors from "cors";
import requestsRouter from "./routes/requests.routes.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/requests", requestsRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
