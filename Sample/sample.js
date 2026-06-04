// async function sample(){
//     const response = await fetch('https://localhost:5500/data');
//     const data = await response.json();
//     console.log(data);
// }


import express from 'express';
const app =express();
const port = 3000;

app.get("/",(req,res) => {
    res.send('Hello World');
})
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});

app.post("/datum",(req,res) => {
    console.log(req.body);
    res.send('Data received');
    res.sendStatus(201);
})

app.put("/datum/:id",(req,res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send('Data updated');
})

app.delete("/datum/:id",(req,res) => {
    console.log(req.params.id);
    res.send('My Name is Paul Muadib Atredies');
})

app.patch("/datum/:id",(req,res) => {
    res.send('This is a patch request');
});