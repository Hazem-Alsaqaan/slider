
// start slider

// start information
let sliderImg = Array.from(document.querySelectorAll(".slider-container img"));

let imgCount = sliderImg.length;
let currentImg = 1;

let previous = document.querySelector("#prev");
let next = document.querySelector("#next");

// end information

// start created ul li
let indicator = document.querySelector("#indicator");
let indicatorUl = document.createElement("ul");

for(let i = 1; i <= imgCount; i++){
    let listNum = document.createElement("li");
    listNum.setAttribute("data-index", i);
    listNum.appendChild(document.createTextNode(i));
    indicatorUl.appendChild(listNum);
}
indicator.appendChild(indicatorUl);
let sliderLi = Array.from(document.querySelectorAll("#indicator ul li"));
// end created ul li

for(let i = 0; i < sliderLi.length; i++){
    sliderLi[i].onclick = function(){
        currentImg = parseInt(this.getAttribute("data-index"));
        checker();
    }
}

// start functions
previous.onclick = function(){
    if(previous.classList.contains("disabled")){
        return false;
    }else{
        currentImg--
        checker();
    }
}
next.onclick = function(){
    if(next.classList.contains("disabled")){
        return false;
    }else{
        currentImg++
        checker();
    }
}




function checker(){
    remove();

    sliderImg[currentImg - 1].classList.add("active");
    sliderLi[currentImg - 1].classList.add("active");

    if(currentImg == 1){
        previous.classList.add("disabled");
    }else{
        previous.classList.remove("disabled");
    }
    if(currentImg == imgCount){
        next.classList.add("disabled");
    }else{
        next.classList.remove("disabled");
    }
}





function remove(){
    sliderImg.forEach(function(img){
        img.classList.remove("active");
    })
    sliderLi.forEach(function(li){
        li.classList.remove("active");
    })
}
// end functions




// end slider

