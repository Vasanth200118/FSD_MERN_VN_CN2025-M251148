function placeOrder(callback){
    console.log("Order placed");
    callback();
}

function cookFood(callback){
    setTimeout(()=>{
        console.log("Food Cooking");
    },1000)
        callback();
    }

function deliverFood(){
    setTimeout(()=>
        {
            console.log("Food Delivered")
        },5000)
}
placeOrder(()=>{
    cookFood(()=>{
        deliverFood(()=>{
            
        })
    })
})

