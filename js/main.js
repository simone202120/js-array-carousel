const immagini = [ "img/01.jpg",
                   "img/02.jpg",
                   "img/03.jpg",
                   "img/04.jpg",
                   "img/05.jpg",
                ];

let img = document.querySelector (".img");
let imgarray = document.querySelectorAll('.img');
let imgselez="";

for(i = 0; i< immagini.length; i++){
    img.innerHTML +=  ` <div class="img">
                        <img class="img" src="${immagini[i]}">
                        </div> `;
}

imgarray[imgselez].classList.Add(".show")
let up = document.querySelector("up");
let down = document.querySelector("down");