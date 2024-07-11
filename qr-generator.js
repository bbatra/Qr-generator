import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
  .prompt([
    {
        name: "URL",
        message: "Please enter your URL: "
    }
  ])
  .then((answers) => {
    const URL = answers.URL;
    fs.writeFile('url.txt', URL, (err) => {
        if (err) throw err;
        console.log("Saved URL to file.");
    })
    var qr_img = qr.image(URL);
    qr_img.pipe(fs.createWriteStream('qr-code.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log("Error occured!");
    } else {
        console.log("Error occured!");
    }
  });