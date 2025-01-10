let words="sujan";

let letters =words.split("");
let Letters=letters.map((value,i)=>{
    if(i===0){
        return value.toUpperCase();
    }
    return value;
});
console.log(Letters.join(""));

