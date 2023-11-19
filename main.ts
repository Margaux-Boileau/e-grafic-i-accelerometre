function moure_la_gota2 () {
    led.plot(x, y)
    basic.pause(50)
    basic.clearScreen()
    if (input.acceleration(Dimension.X) <= 150 && x > 0) {
        x = x - 1
    }
    if (input.acceleration(Dimension.X) > 150 && x < 4) {
        x = x + 1
    }
    if (input.acceleration(Dimension.Y) <= 150 && y > 0) {
        y = x - 1
    }
    if (input.acceleration(Dimension.Y) > 150 && y < 4) {
        y = y + 1
    }
}
function estacio_meteorologica () {
    led.plotBarGraph(
    input.temperature(),
    50
    )
}
let y = 0
let x = 0
x = 0
y = 0
basic.forever(function () {
    estacio_meteorologica()
})
