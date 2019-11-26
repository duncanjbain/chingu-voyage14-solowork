function updateFontSizeFromField(newFontSize) {
    let elementsToUpdateFontSize = document.getElementsByClassName('fonts-card-example');
    for (var i = 0; i < elementsToUpdateFontSize.length; i++) {
        elementsToUpdateFontSize[i].style.fontSize = newFontSize.value + 'px';
    }
}