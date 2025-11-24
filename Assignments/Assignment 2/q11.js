function SmsPack(num){

    switch(num){
        case 1:
            console.log("1 --> Data pack")
            break
        case 2:
             console.log("2 --> talk time")
             break
        case 3:
             console.log("3 --> Recharge Validity")
             break
        default:
             console.log("Anything else --> Invalid Choice")
             break
    }
}
SmsPack(1)
SmsPack(2)
SmsPack(3)
SmsPack()