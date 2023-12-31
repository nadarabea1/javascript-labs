var firstName= prompt("Enter your first Name :")
var lastName= prompt("Enter your last Name :")
var fullName= `${firstName} ${lastName}`

var confirm= confirm(`Is ${fullName} your fullname?`)
if(!confirm){
    fullName=`No Name ;)`
}
var age =Number(prompt("Enter your birth year: "))

document.write(`Welcome, ${fullName}. You are ${2023-age} years old.`)
document.write(`<br>`)


var num1=Number(prompt("Enter the first number: "))
var num2=Number(prompt("Enter the second number: "))

document.write(`${num1} + ${num2} = ${num1+num2}`)