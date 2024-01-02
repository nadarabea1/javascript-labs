do{
    var age=prompt("Enter your age");
}while(age<=0)

if(age >=1 && age <=10){
    document.write("Child")
    document.write(`</br>`)
}
else if(age >=11 && age <=18){
    document.write("Teenager")
    document.write(`</br>`)

}
else if(age >=19 && age <=50){
    document.write("Grown up")
    document.write(`</br>`)

}
else if(age >50){
    document.write("Old")
    document.write(`</br>`)

}

