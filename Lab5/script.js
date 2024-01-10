class Person{
    #healthRate=0
    constructor(fullName , money, sleepMode, healthRate){
        this.fullName=fullName
        this.money=money
        this.sleepMode=sleepMode
        this.#healthRate=healthRate
    }
    get healthRate(){
        return this.#healthRate
    }
    set healthRate(rate){
        if(rate >=0 && rate <=100)this.#healthRate=rate
        else if(rate <0)this.#healthRate=0
        else this.#healthRate=100
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
class Employee extends Person{
    #salary=0
    constructor(fullName , money, sleepMode, healthRate,id, email, workMode, salary, isManager){
        super(fullName , money, sleepMode, healthRate)
        this.id=id
        this.email=email
        this.workMode=workMode
        this.#salary=salary
        this.isManager=isManager
    }
    get salary(){
        return this.#salary
    }
    set salary(sal){
        if(sal <1000)this.#salary=1000
        else this.#salary=sal

    }
    work(hours){
        if(hours ==8){
            this.workMode="Happy"
        }
        else if (hours>8 )this.workode="Tired"
        else this.workMode="Lazy"
    }
}
class Office{
    constructor(name, employees){
        this.name=name
        this.employees=employees
    }
    
    getEmployee(empID){
        const emp=this.employees.find(item => item.id == empID)
        if(emp){
            document.write(`ID :${emp.id} </br> 
            Email: ${emp.email} </br> 
            Name: ${emp.fullName} </br> 
            Money: ${emp.money} </br> 
            SleepMode: ${emp.sleepMode} </br> 
            HealthRate: ${emp.healthRate} </br> 
            workMode: ${emp.workMode} </br> 
            `)
            if(!emp.isManager)document.write(`Salary: ${emp.salary} </br> </br>`)
            }
        else{
            document.write(`ID "${empID}" Not found </br>`)
            }
        
    }
    getAllEmployees(){
        for (const emp of this.employees){
            this.getEmployee(emp.id)
        }

    }
    hire(emp){
        this.employees.push(emp)
    }
    fire(empID){
        this.employees=this.employees.filter(item => item.id != empID)
    }
}

const office =new Office("iti",[])
function add(isManager){
    const name =prompt("Enter full name")
    const money =Number(prompt("Enter money"))
    const sleepMode =prompt("Enter Sleep Mode")
    const healthRate =prompt("Enter Health Rate")
    const id =Number(prompt("Enter ID"))
    const email =prompt("Enter Email")
    const workMode =prompt("Enter Work mode")
    const salary=Number(prompt("Enter Salary"))
    const emp=new Employee(name,money,sleepMode,healthRate,id,email, workMode,salary,isManager)
    office.hire(emp)
}
do{
    var q=true
    var user= prompt(`Menu 
    add new employee (Type 'add nrml') 
    add new Manager (Type 'add mngr')
    quite (type q)
    `)
    switch(user){
        case 'add nrml':
            add(false)
            break;
        case 'add mngr':
            add(true)
            break;
        case 'q':
            q=false
    }
}while(q)
office.getAllEmployees()