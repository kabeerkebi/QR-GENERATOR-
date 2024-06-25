import inquirer from "inquirer";
import  qr  from "qr-image";
import fs, { writeFile } from"fs";


inquirer
  .prompt([

{
    message : "type in your url",
    name:"URL"
}
])
  .then((answers) => {
const url = answers.URL;
  

var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr.png'));

writeFile("Url.txt",url,(err)=>{

if(err) throw err ;
console.log("the file is saved ");

})



})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });