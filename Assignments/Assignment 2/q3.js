function msg(Name){
    mes="1.Hello,"+Name+" Welcome to Javascript"
    message="Hello,"+Name+" Welcome to Javascript"
    console.log(mes)
    console.log("2.The UpperCase of Message is "+ message.toUpperCase())
    console.log("3.There are " +(((message.length)<=10)?"10 characters are there":"More than 10 characters"));
    console.log("4.The Word Javascript is there or not : "+((message.search('Javascript'))?"True":"False"))
}
msg("Vasanth")

     