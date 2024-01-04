const perMethods= {
    sleep(hours){
        if(hours ==7){
            this.sleepMode="Happy"
        }
        else if (hours<7 )this.sleepMode="Tired"
        else this.sleepMode="Lazy"
    },
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
    },
    
    buy(items){
        if (items==1)this.money-=10
    }
    
}

function Person3(fullName, money, sleepMode, healthRate){
    let person =Object.create(perMethods)
    person.fullName=fullName
    person.money=money
    person.sleepMode=sleepMode
    person.healthRate=healthRate
    return person
}



var person3=new Person3("Nada", 100)
person3.sleep(7)
person3.eat(2)
person3.buy(1)
console.log(`Person from OOLO`)
console.log(person3)