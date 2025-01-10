let date=new Date();
let year=date.getFullYear();
let month=date.getMonth();
let day=date.getDate();
let hour=date.getHours();
let minute=date.getMinutes();
let second=date.getSeconds();
let dateStr=`Date is:${year}-${month}-${day} ${hour}:${minute}:${second}`;

console.log(dateStr.toLocaleString());

