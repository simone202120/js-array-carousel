const imagesArray = [ "img/01.jpg",
                   "img/02.jpg",
                   "img/03.jpg",
                   "img/04.jpg",
                   "img/05.jpg",
                ];

let itemsDom = document.querySelector (".items");
let slideAttiva= 0;

for(let i = 0; i< imagesArray.length; i++){
    itemsDom .innerHTML +=  ` <div class="item">
                        <img class="img-slide" src="${imagesArray[i]}">
                        </div> `;
}

const itemList = document.getElementsByClassName("item");
itemList [slideAttiva].classList.add("show");

const up= document.querySelector(".up");
up.addEventListener ("click",
function() {

    itemList[slideAttiva].classList.remove("show");
    slideAttiva++;
    itemList[slideAttiva].classList.add("show");
    down.classList.remove("hidden"); 

    if(slideAttiva ==itemList.length -1 )
        up.classList.add("hidden");
    }
)

const down= document.querySelector(".down");
down.addEventListener ("click",
function() {

    itemList[slideAttiva].classList.remove("show");
    slideAttiva--;
    itemList[slideAttiva].classList.add("show");

    up.classList.remove("hidden"); 

    if(slideAttiva ==0)
        down.classList.add("hidden");

    }

)