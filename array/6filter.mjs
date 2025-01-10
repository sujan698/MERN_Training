//array filter

let input =[10,20,30];
let output = input.filter((value) => {
    if(value===10||value===30){
        return true;
    }
    return false;
});
console.log(output);