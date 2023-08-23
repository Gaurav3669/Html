async function delay(time)
{
    return new Promise((resolve,reject) => {
           setTimeout(()=>{
            resolve()
           },time)
    })
}
async function placeorder()
{
    await delay(2000);
    console.log("order placed");
}
async function startProduction()
{
    await delay(2000);
    console.log("Product is taken");
}
async function printID()
{
    await delay(2000);
    console.log("Id is taken");
}
async function productName()
{
    await delay(2000);
    console.log("Product name is taken");
}
async function productDesc()
{
    await delay(2000);
    console.log("Product desc taken");
}
async function main() {
   console.log("Order is placed");
   await placeorder();
   console.log("Product is in production");
   await startProduction();
   console.log("id printing started");
   await printID();
   console.log("Product name started");
   await productName();
   console.log("Product description started");
   await productDesc();

} main()

