class Person2{
    constructor(fullName , money, sleepMode, healthRate){
        this.fullName=fullName
        this.money=money
        this.sleepMode=sleepMode
        this.healthRate=healthRate
    }

    sleep(hours){
        if(hours ==7){
            this.sleepMode="Happy"
        }
        else if (hours<7 )this.sleepMode="Tired"
        else this.sleepMode="Lazy"
    }
    eat(meals){
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
    
    buy(items){
        if (items==1)this.money-=10
    }
    
}

var person2=new Person2("Nada", 100)
person2.sleep(7)
person2.eat(2)
person2.buy(1)
console.log(`Person from classes`)
console.log(person2)