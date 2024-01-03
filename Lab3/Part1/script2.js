function cal(num1,num2){
    var result;
    if(!isNaN(num1) && !isNaN(num2)){
    if(op=="sum"){
        result=num1+num2
    }
    else if(op=="subtract"){
        result=num1-num2
    }
    else if(op=="division"){
        result=num1/num2
    }
    else if(op=="moduls"){
        result=num1%num2
    }
    else{
        document.write(`Invaild operation `,`<br/>`)
    
    }
    }
    return result;
}

var num1=Number(prompt("Enter Number 1"))
var result=num1
do{
    var op=prompt("Enter Operation(sum - subtract - division - moduls)")
    var num2=Number(prompt("Enter Number 2"))
    result=cal(result,num2)
    var ans=confirm("Do you continue?")
    
}while(ans)
document.write(`Result = ${result}<br/>`)