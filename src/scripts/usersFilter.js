function toggleVisibilityGuides(vars){
    vars = vars.split(",");
    let guideButtonsArr = document.querySelectorAll('.user');
      for (let i = 0; i < guideButtonsArr.length; i++) {
        let btn = guideButtonsArr[i];
        if (vars.includes(btn.id)) {
          btn.style.display = 'block';
        } else {
          btn.style.display = 'none';
        }
      }
  }