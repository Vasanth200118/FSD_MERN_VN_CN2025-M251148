function examStarted(callback){
    console.log("Exams Started")
    callback();
}

function evaluateAns(callback){
    setTimeout(()=>{
        console.log("Evaluating the Answer Papers")
    },2000)
    
    callback();

}
function resultDeclare(){
    setTimeout(()=>{
        console.log("Results are declared");
    },5000)
}

examStarted(()=>{
    evaluateAns(()=>{
        resultDeclare()
    })
})