/* Convert a sentence where only the first letter of each word should be capitalized,
 and the rest of the letters should be in lowercase.

Example Input:
"hello world from javascript"

Example Output:
"Hello World From Javascript" */


let sentence = "hello world from javascript";

let words = sentence.split("");


let output=words.map((value,i)=>{
    if(i===0 || words[i-1]===" "){
        return value.toUpperCase();
    }
    return value;
});

console.log(output.join(""));



