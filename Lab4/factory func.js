function Person4(fullName, money, sleepMode, healthRate){
    return {
        fullName,
        money,
        sleepMode,
        healthRate,

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
}

var person4=new Person4("Nada", 100)
person4.sleep(7)
person4.eat(2)
person4.buy(1)
console.log(`Person from Factory function`)
console.log(person4)