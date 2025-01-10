let ar1 =[20,23,45,67,88];

let ar2=ar1.filter((value,i)=>{
    if (value%2===0){
        return true;
    }
    return false;
})
console.log(ar2);