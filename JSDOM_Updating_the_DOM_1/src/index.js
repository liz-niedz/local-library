import "./styles.css";

/**
  Write the addheadings() function here
*/ function addHeadings() {
  const headings = document.querySelectorAll("article");
  const newElement = document.createElement("h2")
}

/**
  Write the styleTutorialsAndArticles() function here
*/ function styleTutorialsAndArticles() {
  const articles = document.querySelectorAll("article");
  for(let article of articles) {
    if(article.includes("Tutorial") === true) {
      article.classList.add("tutorial")
    } else {
      article.classList.add("article")
    }
  }
}

/**
  Write the separateAllTutorials() function here
*/ function seperateAllTutorials() {
  const section = document.querySelector("div");
  const tutorials = document.querySelector(".tutorial");
  section.removeChild(tutorials)
  
  const newElement = document.createElement("div");
  newElement.classList.add(".tutorials")
  
}
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
