fetch("index.html")
    .then(res => res.text())
    .then(replaceHTML);

function replaceHTML(text) {
    document.open();
    document.write(text);
    document.close();
}