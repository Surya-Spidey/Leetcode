import {randomSuperhero} from 'superheroes';
const name = randomSuperhero();
console.log(name);

import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';
import { text } from 'stream/consumers';

inquirer
    .prompt([
        { message : 'Enter the text to generate QR code', name: 'text' },
    ])
    .then((answers) => {
        const url = answers.text
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('url.jpg'));
    })
    .catch((error) => {
        console.error('Error:', error);
    });