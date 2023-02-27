var mainBlock = document.getElementById('mainBlock');


function displayNewsButton(){
    let newsButtonArr = document.querySelectorAll('.newsButton');
    for(let i = 0; i < newsButtonArr.length; i++){
        let newsButton = newsButtonArr[i];
        newsButton.onclick = nModal;
    }
}

var nModal = function newsModal(){

    let myModal = document.createElement("div");
    let modalContent = document.createElement("div");
    let newsTitle = document.createElement("div");
    let img = document.createElement("img");
    let scrollContent = document.createElement("div");
    let contentNews = document.createElement("div");

    contentNews.classList.add("contentNews");
    scrollContent.classList.add("scrollContent");
    img.classList.add("contentImg");
    img.src = this.children[3].src;
    img.alt = "";
    newsTitle.classList.add("titleModal")
    myModal.classList.add("modal");
    modalContent.classList.add("modal-content");

    newsTitle.innerHTML = this.children[2].innerHTML;
    contentNews.innerHTML = this.children[1].innerHTML;

    let close = document.createElement("span");
    close.classList.add("close");
    close.innerHTML = '&times;';
    modalContent.appendChild(close);
    
    modalContent.appendChild(newsTitle);
    scrollContent.appendChild(img);
    scrollContent.appendChild(contentNews);
    modalContent.appendChild(scrollContent);
    if(this.children[0].innerText == "admin" || this.children[0].innerText == "moder"){
        let delbtn = document.createElement("a");
        delbtn.classList.add("delBtn");
        delbtn.href = 'deleteNews.php?id='+this.children[4].innerHTML;
        delbtn.innerHTML = "Удалить новость";
        modalContent.appendChild(delbtn);
    }
    myModal.appendChild(modalContent);
    mainBlock.appendChild(myModal);
    myModal.style.display = "block";
    close.addEventListener('click', function(){
        myModal.remove();
    })
}