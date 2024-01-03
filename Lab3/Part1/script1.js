var user=prompt("Enter username")
var passwd=prompt("Enter password")

if(user =="admin" && passwd=="421$$"){
    document.write("Welcome login success")
}
else{
    if(user !="admin")document.write("UserName is wrong!!", `</br>`)
    if(passwd !="421$$")document.write("Password is wrong!!", `</br>`)
    
}
