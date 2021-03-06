

const tagsToIgnore = ['SCRIPT', 'NOSCRIPT', 'STYLE', 'SOURCE']
replaceText(document.body)

function replaceText(element) {
    if (tagsToIgnore.includes(element.nodeName)) { return }
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/coronavirus/gi)) {
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span class="rainbow">$1</span>')
            element.replaceWith(newElement)
        }
    }
}