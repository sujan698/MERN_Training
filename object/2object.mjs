let studentInfo = {
    name: 'ram',
    surname: 'karki',
    age: 32,
    city: 'New York'
};
//get object property value
console.log(studentInfo.name); //output: { name: 'ram' }
console.log(studentInfo.surname); //output: { surname: 'karki' }
console.log(studentInfo.age); //output: { age: 32 }
console.log(studentInfo.city); //output: { city: 'New York' }

//change the object property value
studentInfo.name = 'shyam';
studentInfo.surname = 'karki';
console.log(studentInfo.name); //output: { name: 'shyam' }
console.log(studentInfo.surname); //output: { surname: '

//delete the object property

delete studentInfo.age;
console.log(studentInfo); //output: { name: 'shyam', surname: 'karki', city: 'New York' }
//studentInfo.age is deleted

//add new property to object

studentInfo.age = 33;
console.log(studentInfo); //output: { name: 'shyam', surname: 'karki', city: 'New York', age: 33 }