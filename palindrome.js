function palindrome(){

    var x = document.getElementById("string").value; 
    var y ="";
    for(i=x.length-1;i>=0;i--){
        y = y + x[i];
    }
    if(x==y){
        window.alert(("string").value = x + " IS A PALINDROME");
    }else{
        window.alert(("string").value= x + " IS NOT A PALINDROME");
    }
}