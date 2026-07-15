// async function sample(){
//     const response = await fetch('https://localhost:5500/data');
//     const data = await response.json();
//     console.log(data);
// }

// app.post("/datum",(req,res) => {
//     console.log(req.body);
//     res.send('Data received');
//     res.sendStatus(201);
// })

// app.put("/datum/:id",(req,res) => {
//     console.log(req.params.id);
//     console.log(req.body);
//     res.send('Data updated');
// })

// app.delete("/datum/:id",(req,res) => {
//     console.log(req.params.id);
//     res.send('My Name is Paul Muadib Atredies');
// })

// app.patch("/datum/:id",(req,res) => {
//     res.send('This is a patch request');
// });

// app.get("/about", (req,res) => {
//     res.json({ "name": "Surya", "goal": "web dev"})
// })

// app.use(bodyParser.json());

// app.get("/",(req,res) => {
//     res.send('Hello World!');
// })

import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app =express();
const port = 3000;

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});

const today = new Date("July 17, 2026 ");
const day = today.getDay();

console.log(day)

let showDay = "Weekday"
let showAdv = "Work bruh"

if(day == 0 || day == 6){
    showDay = "Weekend"
    showAdv = "Go for a run!"
}

console.log(showDay, showAdv)
app.get("/", (req,res) => {
    res.render("index.ejs", {
    day : showDay,
    adv : showAdv
})
})
