var heroesFilterModal = document.getElementById("heroesFilterModal");
var filterImgButton = document.getElementById("filterImgButton");
var filterSpan = document.getElementById("filterSpan");
var heroesList = document.getElementById("heroesList");
filterImgButton.onclick = function(){
    heroesFilterModal.style.display = "block";
}

filterSpan.onclick = function(){
    heroesFilterModal.style.display = "none";
}

function displayModal(){
    persons.forEach((person, index) =>{
    let currIndex = index;
    let filterbtn = document.createElement("button");
    filterbtn.classList.add(...["varBtn", "variable1"]);
    if (currIndex != 0){
        let img = new Image(135, 135);
        img.src = person.avatar;
        filterbtn.innerHTML = person.name;
        filterbtn.value = person.name;
        filterbtn.id = person.element;
        filterbtn.appendChild(img);
        filterbtn.addEventListener('click', function(){
            let guideButtonsArr = document.querySelectorAll('.guideButton');
            for (let i = 0; i < guideButtonsArr.length; i++) {
            let btn = guideButtonsArr[i];
            let k = btn.children[1].innerHTML;
            let currCharacter = persons[k].name;
            if (currCharacter === this.innerText && btn.children[13].innerHTML == 1) {
                btn.style.display = 'flex';
            } else {
                btn.style.display = 'none';
        }
      }
        })
    }
    if (currIndex === 0){
        let allBtn = document.createElement("button");
        allBtn.classList.add(...["varBtn", "canc", "variables1"]);
        heroesList.appendChild(allBtn);
        allBtn.addEventListener('click', function(){
            let guideButtonsArr = document.querySelectorAll('.guideButton');
            for (let i = 0; i < guideButtonsArr.length; i++) {
            let btn = guideButtonsArr[i];
            if (btn.children[13].innerHTML == 1) {
                btn.style.display = 'flex';
            } else {
                btn.style.display = 'none';
        }
      }
        })
        filterbtn.style.display = "none";
    }
    heroesList.appendChild(filterbtn);
    });
}

function toggleVisibility(...vars) {
    let variables = document.querySelectorAll('.variable1');
    for (let i = 0; i < variables.length; i++) {
      let variable = variables[i];
      if (vars.includes(variable.id)) {
        variable.style.display = 'inline';
      } else {
        variable.style.display = 'none';
      }
    }
  }
