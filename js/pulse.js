let contSlider = document.querySelector(".pulse .cont_slider");
let lines_selected = document.querySelector(".show_selected");
const slider = document.querySelector('.slider');
const sections = document.querySelectorAll('.slider section');
const old_imgs = document.querySelectorAll(".pulse .img_slider");



/* PRESENTACION IMG */
const pres_img = document.querySelector(".presentation img");
/* PRESENTACION IMG */

/* AIRBUS IMG */
let contSliderAirbus = document.querySelector(".airbus .cont_slider");
const airbus_img = document.querySelector(".airbus .img_slider");
/* AIRBUS IMG */

/* HOBBIE IMG */
let contSliderHobbie = document.querySelector(".hobbie .cont_slider");
const hobbie_img = document.querySelector(".hobbie .img_slider");
/* HOBBIE IMG */


for(let i = 0; i < old_imgs.length; i++) {
    let line = document.createElement("div");
    line.classList.add('index_img');

    lines_selected.appendChild(line);
}

const lines = document.querySelectorAll(".index_img");


const refactorIMG = (img, refactorWidth) => {
    let refactor = img.width / refactorWidth;
    if (img.width != refactorWidth) {
        const height = img.height / refactor;
        
        return [height, refactorWidth];
    }
};


let imgs = []
old_imgs.forEach((img, i) => {
    const nueva_img = refactorIMG(img, 550);
    img.width = nueva_img[1];
    img.height = nueva_img[0];
    imgs[i] = img;
});



let pointed = 0;

contSlider.style.width = 550 + 'px';
contSlider.style.height = imgs[0].height + 'px';

/* PRESENTACION */
let new_pres_img = refactorIMG(pres_img, 320);
pres_img.width = new_pres_img[1];
pres_img.height = new_pres_img[0];
/* PRESENTACION */

/* AIRBUS */
let airbus_new_size = refactorIMG(airbus_img, 650);
airbus_img.width = airbus_new_size[1];
airbus_img.height = airbus_new_size[0];
contSliderAirbus.style.width = airbus_new_size[1] + 'px';
contSliderAirbus.style.height = airbus_new_size[0] + 'px';
/* AIRBUS */

/* HOBBIE */
let hobbie_new_size = refactorIMG(hobbie_img, 700);
hobbie_img.width = hobbie_new_size[1];
hobbie_img.height = hobbie_new_size[0];
contSliderHobbie.style.width = hobbie_new_size[1] + 'px';
contSliderHobbie.style.height = hobbie_new_size[0] + 'px';
/* HOBBIE */



let currentIMGWidth = imgs[0].width;
let currentIMGHeight = imgs[0].height;
let nextIMGWidth = imgs[1].width;
let nextIMGHeight = imgs[1].height;
let previousIMGWidth = imgs[imgs.length - 1].width;
let previousIMGHeight = imgs[imgs.length - 1].height;


slider.style.width = currentIMGWidth + 'px';


const getIndex = (value) => {
    if (value < 0) {
        return imgs.length - 1;
    }
    return Math.floor(value % 3);
};

let moviendo = false;

let duration = 700;

function animateBackground(index) {
    const lineToChange = lines[index];
    lineToChange.classList.add("selected");
    lines[getIndex(index - 1)].classList.remove("selected");
}

animateBackground(pointed);


function moverD() {
    moviendo = true;
    pointed = Math.floor(pointed % 3);
    
    animateBackground(getIndex(pointed + 1));
    
    nextIMGWidth = imgs[getIndex(pointed + 1)].width;
    nextIMGHeight = imgs[getIndex(pointed + 1)].height;
    currentIMGWidth = imgs[getIndex(pointed)].width;
    currentIMGHeight = imgs[getIndex(pointed)].height;
    previousIMGWidth = imgs[getIndex(pointed - 1)].width;
    previousIMGHeight = imgs[getIndex(pointed - 1)].height;
    
    slider.style.transition = 'margin-left 0.7s ease';
    if (pointed === 0) {
        slider.style.marginLeft = '-' + (currentIMGWidth) + 'px';
    } else {
        slider.style.marginLeft = '-' + (currentIMGWidth) + 'px';
    }
    slider.style.width = nextIMGWidth + 'px';
    slider.style.height = nextIMGHeight + 'px';
    
    contSlider.style.height = nextIMGHeight + 'px';

    setTimeout(() => {
        slider.style.transition = 'none';
        slider.appendChild(slider.querySelector('section'));
        
        if (pointed === 2) {
            slider.style.marginLeft = '0';
        } else {
            slider.style.marginLeft = '0';
        }
        
        moviendo = false;
    }, 700);
    
    pointed += 1;

}

//imgs.forEach((image) => {
sections.forEach((image) => {
    image.addEventListener('click', function () {
        if (moviendo === false) {
            moverD();
        }
    });
});

