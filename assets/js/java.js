//header
const links = [...document.querySelectorAll(".menu-link")];
links.forEach(item => item.addEventListener("mouseenter", handleHoverLink));

const line = document.createElement("div");
line.className = "line-effect";
document.body.appendChild(line);

function handleHoverLink(e) {
    const{left, top, width, height} = e.target.getBoundingClientRect();
    // console.log({left, top, width, height});
    const offsetBottom = 14;
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    line.style.top = `${top + height + offsetBottom}px`;
}

const menuHover = document.querySelector(".fpt-menu");
menuHover.addEventListener("mouseleave", function() {
    line.style.width = 0;
})

//header-menu
const menu = document.querySelector(".header-menu");
window.addEventListener("scroll", function(e) {
    const scrollY =  window.pageYOffset;
    // console.log(scrollY);
    if(scrollY >= 206) {
        menu && menu.classList.add("is-fixed");
    }else {
        
        menu && menu.classList.remove("is-fixed");
    }
})

// sidebar

const bar = document.querySelector(".side-bar__menu");
const overlay = document.querySelector(".side-overlay");
const closeIcon = document.querySelector(".icon-close");
const cartIcon = document.querySelector(".header-cart-icon");
const addItem = document.querySelector(".slider-btn__add");

function removebar(e) {
    bar.classList.toggle("is-show")
    overlay.classList.toggle("is-show")
}


overlay.addEventListener("click", removebar)
closeIcon.addEventListener("click", removebar)
cartIcon.addEventListener("click", removebar)

addItem.addEventListener("click", removebar)


// slider chuyen anh
// const slider = document.querySelector(".slider-container");
// const sliderMain = document.querySelector(".slider-quantily");
// const sliderItem = document.querySelectorAll(".slider-app a");
// const nextBtn = document.querySelector(".slider-next");
// const prevvBtn = document.querySelector(".slider-prev");

// const sliderItemWidh = sliderItem[0].offsetWidth;
// const sliderLenght =sliderItem.length;

// let postionX = 0;
// let index = 0;

// prevvBtn.addEventListener("click", function()  {
//     handleChangeSlider(-1);
// });

// nextBtn.addEventListener("click", function()  {
//     handleChangeSlider(1);
// });
// function handleChangeSlider(direction) {
//     if (direction === 1) {
//         if (index >= sliderLenght -1) {
//             index = sliderLenght -1;
//             return;
//         }
//         postionX = postionX - sliderItemWidh;
//         sliderMain.style = `transform: translateX(${postionX}px)`;
//         index++;
//     }else if (direction === -1) {
//         if (index <= 0) {
//             index = 0;
//             return;
//         }

//         postionX = postionX + sliderItemWidh;
//         sliderMain.style = `transform: translateX(${postionX}px)`;
//         index--;
//     }

// }




// -----------------2-----------------------------

const tabItem = document.querySelectorAll(".item-size");
[...tabItem].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(e) {
    [...tabItem].forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");
}

const btnClick = document.querySelector(".btn-click");
btnClick.addEventListener("click", handleClickBtn);
const index2 = 0

function handleClickBtn (e) {
    index2 = index2 + 1;
    console.log(index2)
}