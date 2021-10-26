let Umidità = 0
basic.forever(function () {
    Umidità = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    Umidità,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(Umidità)
    }
})
