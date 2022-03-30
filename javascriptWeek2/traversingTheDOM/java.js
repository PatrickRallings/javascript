const headerElem = document.getElementsByTagName('header')
console.log(headerElem)

const sectionElem = document.getElementsByTagName('section')
console.log(sectionElem)

const sectionElemCurrent = document.querySelector('.current')
console.log(sectionElemCurrent)

const afterSsectionCurrent = sectionElemCurrent.nextElementSibling
console.log(afterSsectionCurrent)

const h2Node = document.querySelector('h2')
console.log(h2Node)

const h2Highlight = document.querySelector('h2.highlight')
const divContHighlight = h2Highlight.parentElement.parentElement
console.log(divContHighlight)

const h2SectionArray = Array.from(document.querySelectorAll('h2')).map(h2Map => h2Map.parentElement)
console.log(h2SectionArray)