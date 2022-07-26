import express from "express";
import json2xls from "json2xls";
import { getData } from "./firebaseConfig.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(json2xls.middleware);

app.get("/", async function (_, res) {
  const firebaseData = await getData();
  res.xls("data.xlsx", firebaseData);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
