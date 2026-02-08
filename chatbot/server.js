import express from "express";
import fs from "fs";
import path from "path";
import { exec } from "child_process";

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve("public")));
app.use(express.json());

app.post("/saveInput", (req, res) => {
    console.log("Received POST:", req.body);
    const text = req.body.text;
    if (!text) return res.send("No input provided");

    fs.writeFileSync(path.resolve("input.txt"), text);
    console.log("Saved input to input.txt:", text);

    exec("mvn exec:java", { cwd: path.resolve("./") }, (error, stdout, stderr) => {
        if(error) {
            console.error("Error executing chatbot:", error);
            return res.status(500).send("Error running Java program via Maven");
        }
        if(stderr) console.error("Maven stderr:", stderr);
        console.log("Java output via Maven:", stdout);
        res.send(stdout);
    });
});

app.listen(PORT, () => console.log(`Node server running at http://localhost:${PORT}`));