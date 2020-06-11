var limitOfWords; 
function limit(){
    limitOfWords = document.getElementById("limit").value;
   document.getElementById("limit_demo").innerHTML = "Your word-limit is : " + limitOfWords;
}
function text(){
    var array = document.getElementById("text").value;
    var count = 0;
    var len = array.length;
    for(var i=0;i<len;i++){
        if((array[i]==" ")||(array[i]=="\n")||(array[i]=='\t')){
        count=count+1;
        }
    }
    total = count + 1;
    rest = limitOfWords - total
    document.getElementById("text_demo1").innerHTML = "You have written "+ total + " words!";
    document.getElementById("text_demo2").innerHTML = "You have to write "+ rest + " words more!";
    if(rest == -1){
        alert("You have exhausted the entered word-limit!");
    }
}

