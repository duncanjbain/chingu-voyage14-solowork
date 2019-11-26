let elementsToUpdateFontSize = document.getElementsByClassName('fonts-card-example');

function updateFontSizeFromField(newFontSize) {
    for (var i = 0; i < elementsToUpdateFontSize.length; i++) {
        elementsToUpdateFontSize[i].style.fontSize = newFontSize.value + 'px';
    }
}

function resetFontExample() {
    for (var i = 0; i < elementsToUpdateFontSize.length; i++) {
        elementsToUpdateFontSize[i].style.fontSize = "40px";
    }
}

function updateFontExampleText(newExampleText) {
    for (var i = 0; i < elementsToUpdateFontSize.length; i++) {
        elementsToUpdateFontSize[i].textContent = newExampleText.value;
    }
}