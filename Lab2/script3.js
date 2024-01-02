var hours=prompt("Enter hours 1-24")

if(hours >0 && hours <12){
    document.write(`Time: ${hours} AM`)
}
else if(hours >12 && hours <24){
    document.write(`Time: ${hours-12} PM`)
}
else if(hours ==12){
    document.write(`Time: ${hours} PM`)

}
else if(hours ==24){
    document.write(`Time: 12 AM`)
}
else{
    document.write(`${hours} is invaild time`)
}
