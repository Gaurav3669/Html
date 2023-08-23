const placeorder = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("order placed");
            resolve();
        },2000)
    });
};
const startPrinting = () =>{
    setTimeout(()=>{
        console.log("Printing Started");
        reject();
    },2000);
};
const startProduction=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Product Name");
            reject();
        },2000);
    });
};

console.log("Order is now going to place");
placeorder()
.then(() => {
  console.log("Product is in production...");
  return startProduction();
})
.then(() => {
    console.log("Id is in printing");
    return idprint();
})
.then(() => {
    console.log("Product name started printing...");
    return productname();
})
.then(() => {
    console.log("Product description started");
    return productdescription();
})
