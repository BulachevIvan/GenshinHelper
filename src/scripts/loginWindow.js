var closeBtn = document.getElementsByClassName('close')[0];
var modalLogin = document.getElementById('modalWindow');
var modalLoginBtn = document.getElementById('modalLoginBtn');
var changeToReg = document.getElementById('changeToReg');
var changeToLog = document.getElementById('changeToLog');
var loginContent = document.getElementById('loginContent');
var regContent = document.getElementById('regContent');

modalLoginBtn.onclick = function(){
    modalLogin.style.display = "block";
}

closeBtn.addEventListener('click', function(){
    modalLogin.style.display = "none";
})

changeToReg.onclick = function(){
    loginContent.style.display = "none";
    regContent.style.display = "flex";
}

changeToLog.onclick = function(){
    regContent.style.display = "none";
    loginContent.style.display = "flex";
}