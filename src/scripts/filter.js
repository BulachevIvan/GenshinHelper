
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

    function toggleVisibilityWeapon(...vars) {
        let variables = document.querySelectorAll('.variable2');
        for (let i = 0; i < variables.length; i++) {
          let variable = variables[i];
          if (vars.includes(variable.id)) {
            variable.style.display = 'inline';
          } else {
            variable.style.display = 'none';
          }
        }
      }

    
    