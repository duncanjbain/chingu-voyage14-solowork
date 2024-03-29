let customTextElements = document.getElementsByClassName('fonts-card-example');

function updateFontSizeFromField(newFontSize) {
    for (var i = 0; i < customTextElements.length; i++) {
        customTextElements[i].style.fontSize = newFontSize.value + 'px';
    }
}

function resetFontExample() {
    for (var i = 0; i < customTextElements.length; i++) {
        customTextElements[i].style.fontSize = "24px";
        customTextElements[i].textContent = "A shining crescent far beneath the flying vessel.";
    }
}

function updateFontExampleText(newExampleText) {
    if (newExampleText.value === "") {
        for (var i = 0; i < customTextElements.length; i++) {
            customTextElements[i].textContent = "A shining crescent far beneath the flying vessel.";
        }
    }
    else {
        for (var i = 0; i < customTextElements.length; i++) {
            customTextElements[i].textContent = newExampleText.value;
        }
    }
}