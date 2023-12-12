import { handleRevealPartnerAnimation } from "./script/reveal"

handleRevealPartnerAnimation();

// Key Point Animation
let observer = new IntersectionObserver(entries => {
    if (window.innerWidth > 600) {
        if (entries[0].intersectionRatio > 0.3) {
            keyPoint[0].classList.add("visible")
            window.setTimeout(() => {
                keyPoint[1].classList.add("visible")
            }, 150)
        } if (entries[0].target == keyPoint[2] & entries[0].intersectionRatio > 0.3) {
            keyPoint[2].classList.add("visible")
            window.setTimeout(() => {
                keyPoint[3].classList.add("visible")
            }, 150)
            keyPoint.forEach(key => {
                observer.unobserve(key)
            })
        } 
    } else {
        if (entries[0].intersectionRatio > 0.3) {
            entries[0].target.classList.add("visible")
            observer.unobserve(entries[0].target)
        }
    }
}, {
    threshold: [0.3, 0.01]
})


let keyPoint = Array.from(document.querySelector(".keyPoint").children)

keyPoint.forEach(grid => {
    observer.observe(grid)
})


//How work Animation

let workObserver = new IntersectionObserver(entries => {
    if (entries[0].intersectionRatio > 0.3) {
        entries[0].target.classList.add("visible")
        workObserver.unobserve(entries[0].target)
    }
}, {
    threshold: [0.3]
})

let workImg = document.querySelector(".howImg")

workObserver.observe(workImg)

// Test modifier le btn git




//1200px redi font-size p 
//1000 go for the isMobile
//Img Responsive
//Build IsMobile Version