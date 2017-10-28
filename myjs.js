var getBackground = document.getElementById("Background");

document.getElementById("Menu").addEventListener("click", function(){
    document.getElementById("Controls").style.bottom = "4%";
});

function changeImg (stuff){
    var val = document.getElementById("FileName").value;
    if (val == "horse"){
        stuff.style.backgroundImage = "url('img/bg1.jpg')";
    } else if (val == "night"){
        stuff.style.backgroundImage = "url('img/bg2.jpg')";
    } else if (val == "mountain"){
        stuff.style.backgroundImage = "url('img/bg3.jpg')";
    } else if (val.indexOf("epic") != -1){
        stuff.style.backgroundImage = "url('img/bg4.jpg')";
    } else if (val == val){
        stuff.style.backgroundImage = "url("+val+")";
    } ;
};

var TitleInput = document.getElementById("TitleInp");
var DescriptionInput = document.getElementById("DescriptionInp");

function Title(){
    TitleInput.addEventListener("keyup", function(ev){
        document.getElementById("Title").innerHTML = "<h1>"+TitleInput.value+"</h1>"
    });
};


function Description(){
    DescriptionInput.addEventListener("keyup", function(ev){
        document.getElementById("Description").innerHTML = DescriptionInput.value
    });
};

var ColorInput = document.getElementById("ColorInp");

function ColorChg(){
    ColorInput.addEventListener("change", function(){
        document.getElementById("Title").style.color = ColorInput.value;
        document.getElementById("Description").style.color = ColorInput.value;
    });
};

var hor = 0;
var vert = 0;

function MoveImgLeft(){
    vert = vert;
    hor = hor - 10;
    getBackground.style.backgroundPosition = hor+"px "+vert+"px";
};

function MoveImgRight(){
    vert = vert;
    hor = hor + 10;
    getBackground.style.backgroundPosition = hor+"px "+vert+"px";
};

function MoveImgUp(){
    hor = hor;
    vert = vert - 10;
   getBackground.style.backgroundPosition =  hor+"px "+vert+"px";
};

function MoveImgDown(){
    hor = hor;
    vert = vert + 10;
    getBackground.style.backgroundPosition = hor+"px "+vert+"px";
};

var height = 300;

function ZoomImgIn(){
    height = height + 10;
    getBackground.style.height = height+"px";
};

function ZoomImgOut(){
    height = height - 10;
    getBackground.style.height = height+"px";
};

document.body.addEventListener("keydown", function(ev){
    console.log(ev.keyCode);
    
    if (ev.keyCode == 37){
        MoveImgLeft();
    } else if (ev.keyCode == 38){
        MoveImgUp();
    } else if (ev.keyCode == 39){
        MoveImgRight();
    } else if (ev.keyCode == 40){
        MoveImgDown();
    } else if (ev.keyCode == 187){
        ZoomImgIn();
    } else if (ev.keyCode == 189){
        ZoomImgOut();
    };
});

function CreateNewDivs(){
    var DivTitle = document.createElement("div");
    var DivDescription = document.createElement("div");
    var DivBackground = document.createElement("div");
    document.getElementById("Display").appendChild(DivBackground);
    DivBackground.appendChild(DivTitle);
    DivBackground.appendChild(DivDescription);
    DivTitle.className =  "DivTitles";
    DivDescription.className =  "DivDescriptions";
    DivBackground.className =  "DivBackgrounds";
    changeImg(DivBackground);
    DivTitle.innerHTML = "<h1>"+TitleInput.value+"</h1>";
    DivDescription.innerHTML = DescriptionInput.value;
    DivTitle.style.color = ColorInput.value;
    DivDescription.style.color = ColorInput.value;
    DivBackground.className = "col-xs-12 col-sm-6 col-md-4 col-lg-3";
};

document.getElementById("+").addEventListener("click", function(){
    CreateNewDivs();
});


document.getElementById("FileName").addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
        changeImg(getBackground);
    };
});

Title();
Description();
ColorChg();