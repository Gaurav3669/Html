// const placeorder = (startProduction) => {
//     setTimeout(()=>{
//         console.log("Order is placed");
//         startProduction();
//     }, 5000);
// };

// const startProduction = (printID) => {
//     setTimeout(()=>{
//         console.log("Id printed");
//         printID();
//     }, 5000);
// };






// const printID = (productName) => {
//     setTimeout(()=>{
//         console.log("Id printed");
//         productName();
//     }, 5000);
// };

// const productName = (productDesc) => {
//     setTimeout(()=>{
//         console.log("productName printed");
//         productDesc();
//     }, 5000);
// };

// const productDesc = (productDesc) => {
//     setTimeout(()=>{
//         console.log("productDesc printed");
//         productDesc();
//     }, 5000);
// };










// console.log("Order is now going to take");
// placeorder(()=>{
//     console.log('Pass to production');
//     startProduction(()=>{
//         console.log('Passing to id');
//         PrintID(()=>{
//             console.log('pass to product name');
//             productName(()=>{
//             console.log('pass to product desc');
//             productdesc(()=>{
//                 console.log('All task are done')
//             })
//             })

//         })

//     })

// })

function getbread(callback){
    setTimeout(()=>{
        const getbread='🍞'
        console.log("Here is the bread",getbread);
        callback();
    
        
    }, 1000);
};

function gettikki(callback){
    setTimeout(()=>{
        const gettikki= '🍔'
        console.log("Here is the tikki",gettikki);
        callback();
    
        
    }, 1000);
};

function getsauce(callback){
    setTimeout(()=>{
        const getsauce= '🫙'
        console.log("This is a sauce",getsauce);
        callback();
    
        
    }, 5000);
};


getbread(()=>{
        console.log("Here is the bread");
    gettikki(()=>{
        console.log("Kere is the tikki");
        getsauce(()=>{
        console.log("Here is the sauce");
        })
    })
})