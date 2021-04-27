//npm install request
//async function callback pass hoga

const request=require("request");
const fs=require("fs");

const cheerio=require("cheerio");

//async
// request("https://www.espncricinfo.com/series/ipl-2020-21-1210595",getdata);


// function getdata(error,response,body)
// {
//     fs.writeFileSync("./homepage.html",body);
// }

let homepage=fs.readFileSync("./homepage.html");

let ch=cheerio.load(homepage);

let atag=ch(".widget-items.cta-link a");

let allmatchlink= "https://www.espncricinfo.com"+ atag['0'].attribs.href;

console.log(allmatchlink);
