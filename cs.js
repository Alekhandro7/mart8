var canvas = document.createElement("canvas")
document.body.appendChild(canvas)

var GAME = {
    width: 1000,
    height: 665,
    heightwall: 500,
    color: "gray",
}

canvas.width = GAME.width
canvas.height = GAME.height
var canvasContext = canvas.getContext("2d")

var SOUNDWIN = {
    src: new Audio('./muz/z_uki-pobeda.mp3')
}

var SOUNDWRONG = {
    src: new Audio('./muz/naval-alarm (1).mp3')
}

function func() {
    word = document.getElementById("text")
    if (word.value === "МАРТА") {
        drawBackGround1()
        canvasContext.fillStyle = "Green"
        canvasContext.font = "52pt Times New Roman"
        canvasContext.fillText("Поздравляем, вы выиграли!!!", 10, 400)
        canvasContext.fillStyle = "Green"
        canvasContext.font = "52pt Times New Roman"
        canvasContext.fillText("Кодовая фраза:", 10, 460)
        canvasContext.fillStyle = "Green"
        canvasContext.font = "52pt Times New Roman"
        canvasContext.fillText("Красота спасёт мир!!!", 10, 520)
        SOUNDWIN.src.play()
    }
    else {
        drawBackGround2()
        SOUNDWRONG.src.play()
    }
}

function drawBackGround1() {
    base_img = new Image()
    base_img.src = "./girls.jpg"
    canvasContext.drawImage(base_img, 0, 0)
}

function drawBackGround2() {
    base_img = new Image()
    base_img.src = "./warning.jpg"
    canvasContext.drawImage(base_img, 0, 0)
}