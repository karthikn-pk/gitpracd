const cart=["tshirts","kurta","pants","jeans"];

let promise=createOrder(cart);

promise.then(function (orderid) {
    console.log("cart is valid")
    return orderid;
    
})
.then(function (orderid) {
    console.log("payment done");
    return proceedToPayment(orderid);
    
})
.then(function ({msg,amt}) {
    console.log(msg ,amt);
    return showOrderSummary(msg,amt);
})
.then(function ({msg,amt}) {
    console.log("you wallter has been updated by ",amt);
    
    
})
.catch(function (err) {
    console.log(err.message);
    
})

function createOrder(cart){
    let pr = new Promise(function(resolve,reject){

    if(!validateCart(cart)){
        const err=new Error("card not valid")
        reject(err);
    }
    const orderid=123;
    if(orderid){

        resolve(orderid);
    }
    });
    return pr;
};

function proceedToPayment(orderid) {
    return new Promise(function (resolve,reject) {
        resolve({msg:`payment successfull for order id ${orderid}`, amt:500})
        
    })
    
}
function showOrderSummary(info,amt) {
    return new Promise(function (resolve,reject) {
        if(amt>500){
            resolve({msg:`you have order items more than ${amt} rs`,info})
        }else{
            reject(new Error("buy more to get discount"));
        }
    })
    
}
function validateCart(cart){
    return true;
}