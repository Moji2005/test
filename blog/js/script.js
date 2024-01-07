let $ = document
// navbar var
let listNavbar = $.querySelectorAll(".items__show")
let classItemNavbar;
let elemItemsNavbar;
let flag = false
let arrow;
let hamberger = $.getElementById("hamberger__navbar");
let flagSrc = false
let listNavbarMobile = $.querySelector(".lists__navbar-mobile")
let itemsShowMobile = $.querySelectorAll(".cursor")
let classItemNavbarMobile;
let elemItemsNavbarMobile;
let flagMobile = false
let arrowR;

// end navabar var


// navabar fn
listNavbar.forEach(elem => {
    elem.addEventListener("click" , (e) => {
        try {
            if (classItemNavbar) {
                if (classItemNavbar !== e.target.dataset.class) {
                    elemItemsNavbar.classList.add("disNone")
                    if (flag) {
                        arrow.firstElementChild.style.animation = "arrowRevers .3s both"
                        flag = false
                    }
                }
            }
            classItemNavbar = e.target.dataset.class
            elemItemsNavbar = $.querySelector(`.${classItemNavbar}`)
            arrow = elemItemsNavbar.parentElement.parentElement.firstElementChild
            if (!flag) {
                arrow.firstElementChild.style.animation = "arrow .3s both"
                flag = true
            } else {
                arrow.firstElementChild.style.animation = "arrowRevers .3s both"
                flag = false
            }
            // elem.addEventListener("close" , () => {
            //     console.log("object");
            // })
            elemItemsNavbar.classList.toggle("disNone") 
        } catch (error) {
            console.log(error.message);
        }

    })
})

hamberger.addEventListener("click" , () => {
    let imgSrc = hamberger.firstElementChild
    if (!flagSrc) {
        imgSrc.setAttribute("src" , "images/icon-close.svg")
        listNavbarMobile.style.animation = "opener .5s both"
        listNavbarMobile.style.display = "block"
        flagSrc = true
    } else {
        imgSrc.setAttribute("src" , "images/icon-hamburger.svg")
        listNavbarMobile.style.animation = "closer .8s both"
        flagSrc = false
        if (elemItemsNavbarMobile) {
            let time = setInterval(() => {
                elemItemsNavbarMobile.style.display = "none"
                flagMobile = false
                clearInterval(time)
            }, 1000);
        }
    }
})
// hamberger

itemsShowMobile.forEach(elem => {
    elem.addEventListener("click" , (e) => {
        if (classItemNavbarMobile) {
            if (classItemNavbarMobile) {
                if (e.target.className == "cursor") {
                    let elem = e.target.nextElementSibling.className
                    if (elem !== classItemNavbarMobile) {
                        arrowR.style.animation = "arrowRevers .3s both"
                        elemItemsNavbarMobile.style.display = "none"
                        flagMobile = false
                    }
                }
            }
            elemItemsNavbarMobile.style.display = 'none'
        }

        classItemNavbarMobile = elem.parentElement.dataset.class
        elemItemsNavbarMobile = $.querySelector(`.${classItemNavbarMobile}`)
        if (!flagMobile) {
            try {
                arrowR = e.target.firstElementChild.firstElementChild
            } catch (err) {
                console.log("null arrowR");
            }
            if (arrowR) {
                arrowR.style.animation = "arrow .3s both"
                elemItemsNavbarMobile.style.display = "block"
                flagMobile = true
            }
        } else {
            try {
                arrowR = e.target.firstElementChild.firstElementChild
            } catch (err) {
                console.log("null arrowR");
            }
            if (arrowR) {
                arrowR.style.animation = "arrowRevers .3s both"
                elemItemsNavbarMobile.style.display = "none"
                flagMobile = false
            }
        }
        
    })
})
// end navbaar fn