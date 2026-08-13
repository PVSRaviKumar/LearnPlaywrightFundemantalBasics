



import { test, expect } from '@playwright/test';
// const userData = require('./295_Users.json');
import userData from "./295_Users.json"; // modern JavaScript

// const fs = require("fs"); // using the file system module to read the JSON file
//if we are using the file system module to read the JSON file,
//  we can use the readFileSync method to read the file and
// parse it into a JavaScript object
// we can write back the data to the JSON file using the writeFileSync method of the file system module

test('Verify Element by Filter', async ({ page }) => {

    console.log(userData.username);
    console.log(userData.password);

    //from the file system module use readFileSync to read the JSON file and parse it into a JavaScript object
    // const fileData = fs.readFileSync("295_Users.json", "utf-8");
    // const user = JSON.parse(fileData);







});