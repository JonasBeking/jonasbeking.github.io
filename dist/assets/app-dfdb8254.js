(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const reducedStyle = "";
const burgerButton = document.querySelector("#burger-button");
const navigationMenu = document.querySelector("#navigation-menu");
const expandableMenu = document.querySelector("#expandable-menu-container");
burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("open");
  navigationMenu.classList.toggle("open");
  expandableMenu.classList.toggle("open");
});
function selectProject(projectSelector) {
  let activeProjectSelectors = document.getElementsByClassName("project-title selected");
  for (let projectSelector2 of activeProjectSelectors) {
    projectSelector2.classList.remove("selected");
    let project2 = document.getElementById(projectSelector2.attributes.getNamedItem("controls").value);
    project2.classList.remove("expanded");
  }
  projectSelector.classList.add("selected");
  let project = document.getElementById(projectSelector.attributes.getNamedItem("controls").value);
  project.classList.add("expanded");
}
document.querySelectorAll(".project-title").forEach((selector) => {
  selector.addEventListener("click", () => {
    selectProject(selector);
  });
});
const rapidPrototypesList = document.getElementById("rapid-prototypes-list");
let prototypes = rapidPrototypesList.querySelectorAll("li");
let technologies = document.querySelectorAll(".technology-container");
let prototypeIndex = 0;
let highlightedTechnologies = [
  ["nodejs", "electronjs", "python", "expressjs", "c-language", "cmake", "assembler"],
  ["angularjs", "nodejs", "c-language", "cmake", "expressjs"],
  ["reactjs", "nodejs", "expressjs", "c-language", "cmake", "android", "mongodb"],
  ["angularjs", "reactjs", "nodejs", "android", "capacitorjs", "sass", "java", "kotlin"]
];
function setTechnologyHighlights() {
  for (let element of prototypes) {
    element.classList.remove("highlight");
  }
  prototypes[prototypeIndex].classList.add("highlight");
  for (let element of technologies) {
    element.classList.remove("highlight");
  }
  let technologiesToHighlight = highlightedTechnologies[prototypeIndex];
  for (let tech of technologiesToHighlight) {
    let elem = document.getElementById(tech);
    elem.classList.add("highlight");
  }
}
setTechnologyHighlights();
setInterval(() => {
  prototypeIndex = (prototypeIndex + 1) % prototypes.length;
  setTechnologyHighlights();
}, 5e3);
console.log(prototypes);
document.getElementById("try-editor-button").addEventListener("click", () => {
  window.location.href = "script-editor.html";
});
