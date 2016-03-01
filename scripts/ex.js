function myFunction() {
    var a = Math.floor(((Math.random() * 16) - 1)+1).toString(16);
    var b = Math.floor(((Math.random() * 16) - 1)+1).toString(16);
    var c = Math.floor(((Math.random() * 16) - 1)+1).toString(16);
    var d = Math.floor(((Math.random() * 16) - 1)+1).toString(16);
    var e = Math.floor(((Math.random() * 16) - 1)+1).toString(16);
    var f = Math.floor(((Math.random() * 16) - 1)+1).toString(16);
    
    var num = a + b + c + d + e + f;
    
    var y = num;
     
    document.getElementById("demo").innerHTML = "#" + y;
    
    document.getElementById("color").style.backgroundColor = "#" + y;
    
    document.getElementById("color2").style.backgroundColor = "#" + y;
    
    document.getElementById("wrapper").style.borderColor = "#" + y;
    
}

function btnC() {
    
    var a = Math.floor(((Math.random() * 16) - 1)+1).toString(16);
    var b = Math.floor(((Math.random() * 16) - 1)+1).toString(16);
    var c = Math.floor(((Math.random() * 16) - 1)+1).toString(16);
    var d = Math.floor(((Math.random() * 16) - 1)+1).toString(16);
    var e = Math.floor(((Math.random() * 16) - 1)+1).toString(16);
    var f = Math.floor(((Math.random() * 16) - 1)+1).toString(16);
    
    var num = a + b + c + d + e + f;
    
    var x = num;
    
    document.getElementById("btnColor").style.backgroundColor = "#" + x;
    
    document.getElementById("demo2").innerHTML = "#" + x;
    
}
