var lColor = []

function showCard(color) {
    document.body.style.background = color;

    lColor.push(color)

    if (lColor == color){
        console.log("dobře")
        lColor = []
    } else {
        console.log("špatně")
        lColor = []
    }
}