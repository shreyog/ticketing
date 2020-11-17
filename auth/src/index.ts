import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.listen(3001, ()=>{
    console.log(`Server listening on port 3000 🔥`);
})