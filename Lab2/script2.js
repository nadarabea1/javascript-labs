var str=prompt("Enter string")
var count={
    a:0,
    e:0,
    o:0,
    u:0,
    i:0
}
for (let i of str) {
    switch(i){
        case 'a':
            count['a']++;
            break;
        case 'e':
            count['e']++;
            break;
        case 'o':
                count['o']++;
                break;
        case 'u':
            count['u']++;
            break;
        case 'i':
            count['i']++;
            break;
        
    }
}

for( let i in count){
    document.write(`${i} : ${count[i]}`)
    document.write(`<br/>`)
}