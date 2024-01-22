var counter=0;
let images=["html.jpeg", "python.jpeg", "javascript.jpeg", "java.jpeg"];
document.getElementById("bg").style.backgroundImage=`url("images/${images[counter]}")`;

document.getElementById("next").addEventListener("click", function(){
    if(counter <images.length-1){
        counter++;
    }
    else{
        counter=0;
    }
    document.getElementById("bg").style.backgroundImage=`url("images/${images[counter]}")`;

    
});

document.getElementById("prev").addEventListener("click", function(){
    if(counter != 0){
        counter--;
    }
    else{
        counter=images.length-1;
    }
    document.getElementById("bg").style.backgroundImage=`url("images/${images[counter]}")`;

    
});
