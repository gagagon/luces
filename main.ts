function LISTA () {
    lista = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    ]
}
input.onButtonPressed(Button.A, function () {
    numero_leds += 1
    if (numero_leds == 25) {
        numero_leds = 0
    }
    basic.showString("" + (numero_leds))
})
input.onButtonPressed(Button.B, function () {
    let y = 0
    let x = 0
    led.plot(x, y)
})
let lista: number[] = []
let numero_leds = 0
numero_leds = 0
