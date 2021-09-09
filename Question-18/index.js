const readLine = require("readline-sync");

var news = readLine.question("Enter some news and we'll check if it is fake or not! ");
var source = readLine.question("Enter the source for your news:- ").toLowerCase();

if(source === "facebook" || source === "whatsapp" || source === "telegram") {
    console.log("News: " + news + " is fake!!");
} else {
    console.log("This news seems legit!");
}