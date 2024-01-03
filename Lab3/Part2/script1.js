var count=Number(prompt("Enter Number "))
var ar=[]

for (let i = 1; i <= count; i++) {
    let num=Number(prompt(`Enter Number ${i}`))
    if(!isNaN(num))ar.push(num)
}
var sum=0
var avg=0
for (let i of ar){
    sum+=i
}
avg=sum/ar.length
document.write(`Sumation = ${sum} <br />`)
document.write(`Average = ${avg} <br />`)