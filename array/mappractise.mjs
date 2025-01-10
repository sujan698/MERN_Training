

let ar1=["s","u","j","a","n"];

let ar2=ar1.map((value,i)=>{
    if(i===0){
        return value.toUpperCase();
    }
    return value;
}       
);
console.log(ar2);
