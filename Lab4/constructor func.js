function Person1(fullName, money, sleepMode, healthRate){
    this.fullName=fullName
    this.money=money
    this.sleepMode=sleepMode
    this.healthRate=healthRate
}
Person1.prototype.sleep = function(hours){
    if(hours ==7){
        this.sleepMode="Happy"
    }
    else if (hours<7 )this.sleepMode="Tired"
    else this.sleepMode="Lazy"
}
Person1.prototype.eat= function(meals){
    switch(meals){
        case 3:
            this.healthRate=100
            break
        case 2:
            this.healthRate=75
            break;
        case 1 :
            this.healthRate=50
            break
    }
}

Person1.prototype.buy= function(items){
    if (items==1)this.money-=10
}

var person1=new Person1("Nada", 100)
person1.sleep(7)
person1.eat(2)
person1.buy(1)
console.log(`Person from constructor function`)
console.log(person1)