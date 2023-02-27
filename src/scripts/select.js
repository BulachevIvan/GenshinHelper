var modalSingle1 = document.getElementById('myModalSingle1');
var modalSingle2 = document.getElementById('myModalSingle2');
var modalMultiple1 = document.getElementById('myModalMultiple1');

var heroesList = document.getElementById('heroesList');
var weaponList = document.getElementById('weaponList');

var btnSingle1 = document.getElementById("myBtnSingle1");
var btnSingle2 = document.getElementById("myBtnSingle2");
var btnMultiple1 = document.getElementById("myBtnMultiple1");

var spanSingle1 = document.getElementsByClassName("close")[0];
var spanSingle2 = document.getElementsByClassName("close")[1];
var spanMultiple1 = document.getElementsByClassName("close")[2];

var singleVariable1ButtonImg = document.getElementById("singleVariable1ButtonImg");

var selectedSingleVariable1 = document.getElementById("myBtnSingle1");
var selectedSingleVariable2 = document.getElementById("myBtnSingle2");
var selectedMultipleVariables1 = document.getElementById("selectedMultipleVariables1");


btnSingle1.onclick = function() {
    modalSingle1.style.display = "block";
}
btnSingle2.onclick = function() {
    modalSingle2.style.display = "block";
}
btnMultiple1.onclick = function() {
    modalMultiple1.style.display = "block";
}


spanSingle1.onclick = function() {
    modalSingle1.style.display = "none";
}
spanSingle2.onclick = function() {
    modalSingle2.style.display = "none";
}
spanMultiple1.onclick = function() {
    modalMultiple1.style.display = "none";
}


var selectCurrentChar = function(){
    btnSingle1.innerHTML = this.value + '<img src="'+this.children[0].src+'" width="135px" height="135px"/>';
    let personIdHiddenField = document.getElementById("personId");
    personIdHiddenField.value = persons.findIndex((person) => person.name == this.value);
}
persons.forEach((person, index) =>{
    let currIndex = index;
    let btn = document.createElement("button");
    btn.innerHTML = person.name;
    btn.value = person.name;
    btn.classList.add(...["varBtn", "variable1"]);
    btn.id = person.element;
    btn.onclick = selectCurrentChar;
    let img = new Image(135, 135);
    img.src = person.avatar;
    btn.appendChild(img);
    if (currIndex === 0){
        btn.style.display = "none";
    }
    heroesList.appendChild(btn);
});

var selectCurrentWeapon = function(){
    btnSingle2.innerHTML = this.value + '<img src="'+this.children[1].src+'" width="135px" height="135px"/>';
    let weaponIdHiddenField = document.getElementById("weaponId");
    weaponIdHiddenField.value = weapons.findIndex((weapon) => weapon.name == this.value);
}
weapons.forEach((weapon, index) =>{
    let currIndex = index;
    let btn = document.createElement("button");
    let textDiv = document.createElement("div");
    textDiv.classList.add("textDiv");
    textDiv.innerHTML = weapon.name;
    btn.value = weapon.name;
    btn.classList.add(...["varBtn", "variable2"]);
    btn.id = weapon.weaponType;
    btn.style.overflow = "hidden";
    btn.onclick = selectCurrentWeapon;
    let img = new Image(135, 135);
    img.src = weapon.avatar;
    btn.appendChild(textDiv);
    btn.appendChild(img);
    if (currIndex === 0){
        btn.style.display = "none";
    }
    weaponList.appendChild(btn);
});

var artArr = new Array(3);
var i = 0;

var selectCurrentArtifact = function(){
    if (i == 0){
        selectedMultipleVariables1.innerHTML = '<div class="artCont"><div class="textArt">'+ this.value + '</div><img src="'+this.children[1].src+'" width="80px" height="80px"/></div>';
        let artifactIdHiddenField = document.getElementById("artifaсtId");
        artifactIdHiddenField.value = artifacts.findIndex((artifact) => artifact.name == this.value);
        i++;
    }
    else if (i == 1){
        selectedMultipleVariables1.innerHTML += '<div class="artCont"><div class="textArt">'+ this.value + '</div><img src="'+this.children[1].src+'" width="80px" height="80px"/></div>';
        let artifactIdHiddenField2 = document.getElementById("artifaсtId2");
        artifactIdHiddenField2.value = artifacts.findIndex((artifact) => artifact.name == this.value);
        i++;
    }
    else if (i == 2){
        selectedMultipleVariables1.innerHTML += '<div class="artCont"><div class="textArt">'+ this.value + '</div><img src="'+this.children[1].src+'" width="80px" height="80px"/></div>';
        let artifactIdHiddenField3 = document.getElementById("artifaсtId3");
        artifactIdHiddenField3.value = artifacts.findIndex((artifact) => artifact.name == this.value);
        i = 0;
    }
}
artifacts.forEach((artifact, index) => {
    let currIndex = index;
    let btn = document.createElement("button");
    let textDiv = document.createElement("div");
    textDiv.classList.add("textDiv");
    textDiv.innerHTML = artifact.name;
    btn.value = artifact.name;
    btn.classList.add("varBtn");
    btn.style.overflow = "hidden";
    btn.onclick = selectCurrentArtifact;
    let img = new Image(135, 135);
    img.src = artifact.avatar;
    btn.appendChild(textDiv);
    btn.appendChild(img);
    if (currIndex === 0){
        btn.style.display = "none";
    }
    artifactList.appendChild(btn);
});

var mainBlock = document.getElementById('mainBlock');

function saveError(){
    let title = document.getElementById('guideTitle');
    let content = document.getElementById('contentTitle');
    let personAlert = document.getElementById('personId');
    let weaponAlert = document.getElementById('weaponId');
    let artAlert = document.getElementById('artifaсtId');
    if (title.value == "" || content.value == "" || personAlert.value == "" || weaponAlert.value == "" || artAlert.value == ""){
        alert("Заполните все поля!")
    }
}
