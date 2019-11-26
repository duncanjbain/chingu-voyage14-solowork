let elementsToUpdateFontSize = document.getElementsByClassName('fonts-card-example');
let originalElements = document.getElementsByClassName('fonts-card-example');

function updateFontSizeFromField(newFontSize) {
    for (var i = 0; i < elementsToUpdateFontSize.length; i++) {
        elementsToUpdateFontSize[i].style.fontSize = newFontSize.value + 'px';
    }
}

function resetFontExample() {
    for (var i = 0; i < elementsToUpdateFontSize.length; i++) {
        elementsToUpdateFontSize[i].style.fontSize = "24px";
        elementsToUpdateFontSize[i].textContent = "A shining crescent far beneath the flying vessel.";
    }
}

function updateFontExampleText(newExampleText) {
    if (newExampleText.value === "") {
        for (var i = 0; i < elementsToUpdateFontSize.length; i++) {
            elementsToUpdateFontSize[i].textContent = "A shining crescent far beneath the flying vessel.";
        }
    }
    else {
        for (var i = 0; i < elementsToUpdateFontSize.length; i++) {
            elementsToUpdateFontSize[i].textContent = newExampleText.value;
        }
    }
}