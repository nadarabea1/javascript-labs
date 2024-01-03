var contact=[
    {name:'Nada',phone:"123"}, 
    {name:'Ali',phone:"123"}
]
do{ 
    var op=prompt("Enter Operation (add - search)")

    switch(op){
        case 'add':
                contact.push(add())
                break;
        case `search`:
                search()
                break;
    }
    var ans=confirm("Do you want to continue")
}while(ans)


function add(){
    let name=prompt("Enter name od contact")
    let phone= prompt("Enter phone number")

    let obj={
        name: `${name}`,
        phone: `${phone}`
    }
    return obj
}

function search(){
    let search=prompt("Enter do you want to search")
    let searchResults = contact.filter(con =>
        con.name.toLowerCase().includes(search.toLowerCase()) ||
        con.phone.includes(search)
    );
    if (search.length > 0) {
        for (const result of searchResults) {
            document.write(`Name: ${result.name}||Phone Number: ${result.phone}<br />`);
        }
    } else {
        alert('No matching contacts found.');
    }
}