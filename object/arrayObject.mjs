let product = [
    {
      name: "laptop",
      price: 100000,
      quantity: 10,
      category: "Electronics",
    },
    {
      name: "mobile",
      price: 20000,
      quantity: 20,
      category: "Electronics",
    },
    {
      name: "harry porter",
      price: 500,
      quantity: 20,
      category:"Book",
  },
  ];
//to return all the name of the  object
  let proName =product.map((item)=>{
    return item.name;

  });
  console.log(proName);
  //to return all the price of the  object
  let proPrice =product.map((item)=>{
    return item.price;
  });
  console.log(proPrice);
//to return all the category of the  object
  let category=product.map((item)=>{
    return item.category;
  });
  console.log(category);

  //to return all the quantity of object
  let quantity=product.map((item)=>{
    return item.quantity;
  });
  console.log(quantity);


  let detail=product.map((item,i)=>{
    return`${item.name} cost NRs. ${item.price} and its category is ${item.category}`
  });
  console.log(detail);

  let allDetail=product.map((item,i)=>{
    return `The total cost of ${item.name}  is NRs. ${item.price*item.quantity}`
  });
  console.log(allDetail);

  //filter those product  whose category is electronics
  
let electronicsProduct=product.filter((item,i)=>{
    return item.category==="Electronics";
});
console.log(electronicsProduct);

//filter those product which price is less than Rs.1000

let priceLessThan100=product.filter((item,i)=>{
    return item.price<=1000;
});
console.log(priceLessThan100);

//filter those product whose category is electronics ["laptop","mobile"]

let categoryElectronics=product.filter((item,i)=>{
    return item.category==="Electronics";

});
console.log(categoryElectronics);

let finalOutput=categoryElectronics.map((item,i)=>{
    return item.name;
});
console.log(finalOutput);