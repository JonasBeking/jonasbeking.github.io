

const burgerButton = document.querySelector("#burger-button")
const navigationMenu = document.querySelector("#navigation-menu")
const expandableMenu = document.querySelector("#expandable-menu-container")
burgerButton.addEventListener("click",() => {
    burgerButton.classList.toggle("open")
    navigationMenu.classList.toggle("open")
    expandableMenu.classList.toggle("open")
})


function selectProject(projectSelector) {
    let activeProjectSelectors = document.getElementsByClassName("project-title selected")


    for(let projectSelector of activeProjectSelectors) {
        projectSelector.classList.remove("selected")
        let project = document.getElementById(projectSelector.attributes.getNamedItem("controls").value)
        project.classList.remove("expanded")


    }
    projectSelector.classList.add("selected")
    let project = document.getElementById(projectSelector.attributes.getNamedItem("controls").value)
    project.classList.add("expanded")


}



document.querySelectorAll(".project-title").forEach((selector) => {
    selector.addEventListener("click",() => {
        selectProject(selector)
    })
})

const rapidPrototypesList = document.getElementById("rapid-prototypes-list")
let prototypes = rapidPrototypesList.querySelectorAll("li")
let technologies = document.querySelectorAll(".technology-container")
let msgs = ["1","2","3","4"]
let prototypeIndex = 0
let highlightedTechnologies = [
    ["nodejs","electronjs","python","expressjs","c-language","cmake","assembler"],
    ["angularjs","nodejs","c-language","cmake","expressjs"],
    ["reactjs","nodejs","expressjs","c-language","cmake","android","mongodb"],
    ["angularjs","reactjs","nodejs","android","capacitorjs","sass","java","kotlin"]
]


function setTechnologyHighlights() {
    for(let element of prototypes) {
        element.classList.remove("highlight")
    }
    prototypes[prototypeIndex].classList.add("highlight")
    for(let element of technologies) {
        element.classList.remove("highlight")
    }
    let technologiesToHighlight = highlightedTechnologies[prototypeIndex]
    for(let tech of technologiesToHighlight) {
        let elem = document.getElementById(tech)
        elem.classList.add("highlight")
    }


}

setTechnologyHighlights()
setInterval(() => {
    prototypeIndex = (prototypeIndex + 1) % prototypes.length
    setTechnologyHighlights()
},5000)

console.log(prototypes)

document.getElementById('try-editor-button').addEventListener('click',() => {
    window.location.href = "script-editor.html"
})

