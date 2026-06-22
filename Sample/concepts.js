import express from "express";
const app = express();
const port = 3000;

app.get("/skills", (req,res) => {
    res.json({ "skills": ["HTML", "CSS", "JavaScript", "Express"]})
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})