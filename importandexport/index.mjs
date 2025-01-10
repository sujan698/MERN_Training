import {name} from "./first.mjs";
import {age} from "./folder/second.mjs";
import { isMarried } from "./folder/folder1/third.mjs";//named export
 import education from "./first.mjs";//default export

console.log(name);
console.log(age);
console.log(isMarried); 
console.log(education);