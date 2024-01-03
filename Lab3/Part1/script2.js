var num1=Number(prompt("Enter Number 1"))
var op=prompt("Enter Operation(sum - subtract - division - moduls)")
var num2=Number(prompt("Enter Number 2"))
var result

if(!isNaN(num1) && !isNaN(num2)){
if(op=="sum"){
    result=num1+num2
    document.write(`Sumation= ${num1}+${num2} = ${result}`)
}
else if(op=="subtract"){
    result=num1-num2
    document.write(`Subtraction= ${num1}-${num2} = ${result}`)
}
else if(op=="division"){
    result=num1/num2
    document.write(`division= ${num1}/${num2} = ${result}`)
}
else if(op=="moduls"){
    result=num1%num2
    document.write(`Moduls= ${num1}%${num2} = ${result}`)
}
else{
    document.write(`Invaild operation`)

}
}