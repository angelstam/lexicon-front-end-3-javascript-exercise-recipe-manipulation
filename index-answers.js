let recipeName = document.querySelector("h1#recipe-name");
console.log("1: recipe name", recipeName.textContent);

console.log("2: recipe name tag", recipeName.tagName);

let paragraphDescription = document.querySelector("p.description");
console.log("3: paragraph description font size",
    window.getComputedStyle(paragraphDescription)["font-size"]);

let imageContainerImage = document.querySelector(".image-container img");
console.log("4: image alt", imageContainerImage.alt);

console.log("5: image dimensions and url", {
    url: imageContainerImage.src,
    height: imageContainerImage.height,
    width: imageContainerImage.width
});

let ingredientsListPaste = document.querySelector(".ingredients-list-paste");
console.log("6: ingredients in paste", ingredientsListPaste.children.length)

console.log("7: fourth element", ingredientsListPaste.children[3]);

let instructionsList = document.querySelector(".instructions-list");
console.log("8: instruction objects", Array.from(instructionsList.children).map(
    (element, index) => {return {order: ++index, text: element.textContent.trim()}}));