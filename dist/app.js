import express from "express";
const app = express();
export default app;
app.listen(3000, () => {
    console.log("rodando");
});
app.get("/", (req, res) => {
    res.send("Hello DevTask!");
});
