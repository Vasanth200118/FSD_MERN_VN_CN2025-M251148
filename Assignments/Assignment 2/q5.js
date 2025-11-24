let a=[1,2,3,4,5,9,100]

function sum(aa){  //Sum Of A Array
    sum=0;
    for(i=0;i<aa.length;i++)
        {
            sum=sum+aa[i]
        }
console.log(sum)
}       

sum(a)

//Find Largest number
let b=[1,2,3,49,100,150]
i=0
max=0
while(i<b.length){
        if(b[i]>max){
            max=b[i]
        }
        i++;
}
console.log(max)
