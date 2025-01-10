let fatherInfo = {
    name: 'Jiban',
    surname: 'Bhattarai',
    age: 50,
    city: 'New York'
};

fatherInfo.age = 56;//this will change age to 56
fatherInfo.occupation = 'Business';//this will add new property to object
fatherInfo.city = 'Kathmandu';//this will change city to Kathmandu

console.log(fatherInfo); //output: { name: 56, surname: 'Bhattarai', age: 50, city: 'New York', occupation: 'Business' }