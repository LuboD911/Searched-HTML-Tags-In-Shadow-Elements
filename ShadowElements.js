function elementsIterator(items) {
    for (let item of items) {
        shadowDomCheck(item);
    }
}

function shadowDomCheck(element) {
    if (element.shadowRoot != null) {
        if (element.shadowRoot.childNodes != null) {
            for(let child of element.shadowRoot.childNodes){
                 if (child.outerHTML.startsWith("<" + searchedElement)) {
                        listShadowElements.push(child.outerHTML);
                    }
                 }

            elementsIterator(element.shadowRoot.childNodes);
        };
    }
    if (element.childNodes != null) {
        elementsIterator(element.childNodes);
    }
}

var listShadowElements = [];
var searchedElement = "div";


function test(){
try {
                                                // IN THAT ELEMENT/ELEMENTS search for searchedElement
    elementsIterator(document.querySelectorAll("rass-sign"));
    return listShadowElements;

} catch (e) {
    console.log(e)
    document.querySelector("body").setAttribute("debug", e);
    return 'error';

 }
 }
