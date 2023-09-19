import express from "express";
import cors from "cors";
import figlet from "figlet";
import chalk from "chalk";
import dotenv from "dotenv";
import { testConnection } from "./controllers/prismaGet.js";
import { mainRouter } from "./routes/mainRouter.js";
dotenv.config();

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const publicDirectory = "./public";
app.use('/resource', express.static(publicDirectory));

app.use("/", mainRouter);

app.use('*', (req, res) => {
    res.status(503).send({ message: '503: Site unavailable' });
})

const port = 4042;
app.listen(port, err => {
    if (err) return console.error(err);
    figlet.text("TUL ESHOP API", async (err, data) => {
        console.clear();
        if (err) return console.error(err);
        console.log(chalk.magenta(data) + `\nRunning here: http://localhost:${port}`);
        await testConnection();
        return;
    })
})