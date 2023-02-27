var mainBlock = document.getElementById('mainBlock');

function addImg(){
    let charIdDivArr = document.querySelectorAll('.hiddenVar');
    let guideButtonArr = document.querySelectorAll('.guideButton');
    for(let i = 0; i < charIdDivArr.length; i++){
        let charIdDiv = charIdDivArr[i];
        let charId = Number.parseInt(charIdDiv.innerHTML);
        let img = new Image(80, 80);
        let imgBox = document.createElement("div");
        imgBox.classList.add("imgBox")
        let guideButton = guideButtonArr[i];
        img.src = persons[charId].avatar;
        imgBox.appendChild(img);
        guideButton.appendChild(imgBox);
    }
}

function displayGuideButton(){
    addImg();
    let guideTitleDivArr = document.querySelectorAll('.hiddenTitle');
    let creatorIdArr = document.querySelectorAll('.hiddenCreatorId');
    let guideButtonArr = document.querySelectorAll('.guideButton');
    let guideIdArr = document.querySelectorAll('.guideId');
    for(let i = 0; i < guideTitleDivArr.length; i++){
        let titleBox = document.createElement("div");
        let titleArea = document.createElement("div");
        let guideButton = guideButtonArr[i];
        let guideId = document.createElement("div");
        let currSostCheck = document.createElement("div");
        currSostCheck.classList.add("currSostCheck");
        currSostCheck.innerHTML = 1;
        guideId.classList.add("hiddenGuideId");
        guideId.innerHTML = guideIdArr[i].innerHTML;
        titleArea.classList.add("titleArea")
        titleBox.classList.add("titleBox");
        titleArea.innerHTML = guideTitleDivArr[i].innerText;
        titleBox.appendChild(titleArea);
        guideButton.appendChild(titleBox);
        guideButton.appendChild(currSostCheck);
        guideButton.id = creatorIdArr[i].innerText;
        guideButton.onclick = gModal;
    }
}

 var gModal = function guideModal(){
    let charImg = new Image(230, 230);
    let weaponImg = new Image(230, 230);
    charImg.src = persons[Number.parseInt(this.children[1].innerHTML)].avatar;
    weaponImg.src = weapons[Number.parseInt(this.children[3].innerHTML)].avatar;

    let myModal = document.createElement("div");
    let weaponBox = document.createElement("div");
    let modalContent = document.createElement("div");
    let guideContent = document.createElement("div");
    let titleGuide = document.createElement("div");
    let contentGuide = document.createElement("div");
    let artLine = document.createElement("span");

    myModal.classList.add("modal");
    weaponBox.classList.add(...["imgBox", "show"]);
    charImg.classList.add(...["imgBox", "show"]);
    titleGuide.classList.add(...["titleBox", "show"]);
    contentGuide.classList.add(...["titleBox", "contentBox", "show"]);
    guideContent.classList.add("guideContent")
    modalContent.classList.add("modal-content");
    artLine.classList.add("artShowLine");

    titleGuide.innerHTML = this.children[7].innerHTML;
    weaponBox.innerText = weapons[Number.parseInt(this.children[3].innerHTML)].name;
    weaponBox.appendChild(weaponImg);
    contentGuide.innerHTML = this.children[8].innerHTML;
    let close = document.createElement("span");
    close.classList.add("close");
    close.innerHTML = '&times;';

    

    modalContent.appendChild(close);
    guideContent.appendChild(charImg);
    
    guideContent.appendChild(titleGuide);
    guideContent.appendChild(contentGuide);
    guideContent.appendChild(weaponBox);
    guideContent.appendChild(artLine);
    
    if(this.children[4].innerHTML != ""){
        let art1Img = new Image(80, 80);
        let artBox = document.createElement("div");
        let textArt = document.createElement("div");
        artBox.classList.add("artCont");
        textArt.innerText = artifacts[Number.parseInt(this.children[4].innerHTML)].name;
        art1Img.src = artifacts[Number.parseInt(this.children[4].innerHTML)].avatar;
        artBox.appendChild(textArt);
        artBox.appendChild(art1Img);
        artLine.appendChild(artBox);
    }
    if(this.children[5].innerHTML != ""){
        let art2Img = new Image(80, 80);
        let artBox = document.createElement("div");
        let textArt = document.createElement("div");
        artBox.classList.add("artCont");
        textArt.innerText = artifacts[Number.parseInt(this.children[5].innerHTML)].name;
        art2Img.src = artifacts[Number.parseInt(this.children[5].innerHTML)].avatar;
        artBox.appendChild(textArt);
        artBox.appendChild(art2Img);
        artLine.appendChild(artBox);
    }
    if(this.children[6].innerHTML != ""){
        let art3Img = new Image(80, 80);
        let artBox = document.createElement("div");
        let textArt = document.createElement("div");
        artBox.classList.add("artCont");
        textArt.innerText = artifacts[Number.parseInt(this.children[6].innerHTML)].name;
        art3Img.src = artifacts[Number.parseInt(this.children[6].innerHTML)].avatar;
        artBox.appendChild(textArt);
        artBox.appendChild(art3Img);
        artLine.appendChild(artBox);
    }
    if(this.children[9].innerText == "admin" || this.children[9].innerText == "moder" || this.children[10].innerHTML == this.children[2].innerHTML){
        let delbtn = document.createElement("a");
        delbtn.classList.add("delBtn");
        delbtn.href = 'delete.php?id='+this.children[0].innerHTML;
        delbtn.innerHTML = "Удалить<br>руководство";
        guideContent.appendChild(delbtn);
    }
    
    modalContent.appendChild(guideContent);
    myModal.appendChild(modalContent);
    mainBlock.appendChild(myModal);
    myModal.style.display = "block";
    close.addEventListener('click', function(){
        myModal.remove();
    })
}


