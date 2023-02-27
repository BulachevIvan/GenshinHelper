function toggleVisibilityGuides(vars){
    vars = vars.split(",");
    let guideButtonsArr = document.querySelectorAll('.guideButton');
      for (let i = 0; i < guideButtonsArr.length; i++) {
        let btn = guideButtonsArr[i];
        if (vars.includes(btn.id)) {
          btn.style.display = 'flex';
          btn.children[13].innerHTML = 1;
        } else {
          btn.style.display = 'none';
          btn.children[13].innerHTML = 0;
        }
      }
  }