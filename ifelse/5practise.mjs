/* age 0 to 18 =>underage  age>=0&&age<=18
age 19 to 60 =>adult age>=19&&age<=64
age 61 and above =>senior citizen age>=65
 */

let age=65;
if(age>=0&&age<=18){
    console.log("underage");
}
else if(age>=19&&age<=64){
    console.log("adult");
}
else{
    console.log("senior citizen");  
    }