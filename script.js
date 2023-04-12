function Onc(){
    alert('hey!! you click the button!!!' );

}

function play(){
    var music = new Audio("system operating.mp3");
    var music2 = new Audio("ac.mp3");
    music.play();
    setTimeout(play2, 5)
    music2.play();
    document.getElementById("object").style.animationPlayState = "running";
    document.getElementById("details").style.display = "block";
    alert("Lastio: System operating....\t\nwish granted")
    
}

function play2(){
    var music2 =new Audio("system operating.mp3");
    music2.play
}

function menu(){
    document.getElementById("menu2").style.display = 'block';
    document.getElementById("menu22").style.display = 'block';
    document.getElementById("set").style.display =  "block";
    
    var m = new Audio("wowo.mp3");
    m.play();
}

function menu2(){
    document.getElementById("menu2").style.display = "none";
    document.getElementById("menu22").style.display = 'none';
    var n= new Audio("thank you.mp3")
    n.play();
    document.getElementById("set").style.display = "none";
}

function bye(){
    var b =new Audio("last.mp3");
    b.play();
    alert("good bye po!")
}
