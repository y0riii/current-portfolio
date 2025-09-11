const menuToggle = document.querySelector(".menu-toggle")
const workBtn = document.querySelector(".btn")
const sideBar = document.querySelector(".sidebar")
const pageLinks = document.querySelectorAll(".page-link")
const work = document.querySelector(".work")
const leftCurtain = document.querySelector(".left-curtain")
const rightCurtain = document.querySelector(".right-curtain")
const html = document.documentElement
const body = document.getElementsByTagName("BODY")[0]
const sections = document.querySelectorAll("section")
const listContainer = document.querySelector(".list-container")
const effects = document.querySelectorAll(".effect-name")
const links = [
    "https://github.com/y0riii/disney",
    "https://github.com/Ahmed99125/LMS",
    "https://github.com/y0riii/modern-portfolio",
    "https://github.com/y0riii/online-library",
    "https://github.com/yousseffe/Furniture_Home",
    "https://github.com/Ahmed99125/Chess",
    "https://github.com/y0riii/device-controller",
    "https://github.com/y0riii/sorting-algorithms-simulator",
    "https://github.com/Nerosegnofic/2D-Drawing-App",
    "https://github.com/y0riii/Zig-Zag-AI",
    "https://github.com/y0riii/flappy-bird-ai",
    "https://github.com/y0riii/self-driving-car",
    "https://github.com/George-Raafat/AI_Project",
    "https://github.com/y0riii/memory-game",
    "https://github.com/Ahmed99125/OOP---Assignment-3",
]

let active = false
function toggleMenu() {
    if (menuToggle.classList.contains("active") && active == true) {
        active = false
        leftCurtain.style.left = "0";
        rightCurtain.style.right = "0"
        body.style.overflowY = "auto"
        body.style.overflowX = "hidden"
        setTimeout(() => {
            document.documentElement.style.setProperty("overflow-y", "auto")
            sideBar.style.display = "flex"
            sections.forEach(section => {
                section.style.display = "flex"
            })
            listContainer.style.display = "none"
            leftCurtain.style.left = "-50%";
            rightCurtain.style.right = "-50%"
        }, 1500)
        setTimeout(() => {
            leftCurtain.style.display = "none";
            rightCurtain.style.display = "none"
        }, 2500)
    }
    leftCurtain.style.display = "flex";
    rightCurtain.style.display = "flex"
    menuToggle.classList.toggle("active")
    sideBar.classList.toggle("active")
}

function handleWork() {
    active = true
    body.scrollTo(0, 0)
    html.style.overflowY = "hidden"
    setTimeout(() => {
        leftCurtain.style.left = "0";
        rightCurtain.style.right = "0"
    }, 500)
    setTimeout(() => {
        sideBar.style.display = "none"
        sections.forEach(section => {
            section.style.display = "none"
        })
        listContainer.style.display = "flex"
        leftCurtain.style.left = "-50%";
        rightCurtain.style.right = "-50%"
    }, 2000)
}

function eyeball() {
    const eye = document.querySelectorAll(".eye")
    eye.forEach((eye) => {
        let x = eye.getBoundingClientRect().left + (eye.clientWidth / 2)
        let y = eye.getBoundingClientRect().top + (eye.clientHeight / 2)
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270
        eye.style.transform = "rotate("+rotation+"deg)"
    })
}

work.addEventListener("click", handleWork)
workBtn.addEventListener("click", () => {
    toggleMenu()
    handleWork()
})
body.addEventListener("mousemove", eyeball)
menuToggle.addEventListener("click", toggleMenu)
pageLinks.forEach(link => {
    link.addEventListener("click", toggleMenu)
})
for(let i=0; i<effects.length; ++i) {
    effects[i].addEventListener("click", () => {
        window.open(links[i], "_blank")
    })
}