let B = 0
let Y = 0
let X = 0
sensors.i2cLcdInit(39)
sensors.rockerPin(AnalogPin.P4, AnalogPin.P5, DigitalPin.P6)
sensors.i2cLcdDisplay_Control(Item._clear)
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P3)
    Y = pins.analogReadPin(AnalogPin.P4)
    B = pins.digitalReadPin(DigitalPin.P5)
    sensors.i2cLcdShowNumber(1, 1, X)
    sensors.i2cLcdShowNumber(2, 1, Y)
    if (B == 0) {
        sensors.i2cLcdDisplay_Control(Item._clear)
        basic.pause(500)
    }
    basic.pause(500)
})
