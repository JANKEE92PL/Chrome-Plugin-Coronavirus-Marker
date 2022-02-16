replaceText(document.body)
// const tagsToIgnore = ['SCRIPT', 'NOSCRIPT', 'STYLE', 'SOURCE']

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        element.textContent = element.textContent.replace(/coronavirus/gi, "")
    }
}