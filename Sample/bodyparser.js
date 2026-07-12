import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;  
    console.log(req.body);
    res.send(`Received submission: Name - ${name}, Email - ${email}`);
})