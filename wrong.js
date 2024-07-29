fetch("index.html")
    .then(res => res.text())
    .then(replaceHTML)
    .then(fixSpelling);

function replaceHTML(text) {
    document.open();
    document.write(text);
    document.close();
}
/*
// 1.
logoText = document.querySelector("p.logo-text");
logoText.style.color = "#384241";

// 2.
header = document.querySelector("header");
header.style.justifyContent = "normal";

// 3.
header.style.borderBottomColor = "lightgray";

// 4.
recipeName = document.querySelector("h1#recipe-name");
recipeName.textContent = "Frozen Cheesecake";

// 5.
timeContainerSpan = document.querySelector("div.time-container span:first-of-type");
timeContainerSpan.classList.add("material-icons");

// 6.
timeContainerSpanTime = document.querySelector("div.time-container span.time");
timeContainerSpanTime.textContent = "60+ min";

// 7.
imageContainerImg = document.querySelector(".image-container img");
imageContainerImg.src = "assets/frozen-cheesecake-slice.jpg";

// 8.
articleIngredientsContainer = document.querySelector("article.ingredients-container");
articleIngredientsContainer.style.backgroundColor = "#f9f9f9";

// 9.
ingredientsListBottom = document.querySelector("ul.ingredients-list-bottom");
ingredientsListBottom.innerHTML = "<li>15st digestivetex</li><li>Lite smör</li>";

// 10.
ingredientsListPasteChild3 = document.querySelector("ul.ingredients-list-paste > li:nth-child(3)");
ingredientsListPasteChild3.textContent = "3tsk vaniljsocker";

// 11.
ingredientsListPaste = document.querySelector("ul.ingredients-list-paste")
ingredientsListPaste.insertAdjacentHTML("beforeend","<li>400g naturell philadelphiaost</li>")

// 12.
instructionsContainerH3 = document.querySelector(".instructions-container > h3");
instructionsContainerH3.classList.remove("shadow");

// 13.
instructionsList = document.querySelector(".instructions-list");
instructionsList.children[0].textContent = instructionsList.children[0].textContent.replace("digestivetex", "digistivetex");
instructionsList.children[1].textContent = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
instructionsList.children[8].textContent = "Ställ in i frysen över natten.";
*/

fixSpelling();

function fixSpelling() {
    html = document.querySelector("html");
    html.innerHTML = html.innerHTML.replaceAll("digistivetex", "digestivekex");
    html.innerHTML = html.innerHTML.replaceAll("digestivetex", "digestivekex");
    html.innerHTML = html.innerHTML.replaceAll("ägggulor", "äggulor");
    html.innerHTML = html.innerHTML.replaceAll("lösbara kanter", "löstagbara kanter");
    html.innerHTML = html.innerHTML.replaceAll("av en en rund", "av en rund");
    html.innerHTML = html.innerHTML.replaceAll("som en tjockt", "som ett tjockt");
    html.innerHTML = html.innerHTML.replaceAll("relativ hårt", "relativt hårt");
    html.innerHTML = html.innerHTML.replaceAll("hårdare en", "hårdare än");
}
