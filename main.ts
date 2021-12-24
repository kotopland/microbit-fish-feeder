input.onButtonPressed(Button.A, function () {
    Minutt = 0
    Hours = 0
    counter = 0
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(0)
    FeedFish()
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showLeds(`
        . # # . #
        # # # # #
        # . # # #
        # # # # #
        . # # . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + Hours + (":" + Minutt))
    basic.pause(1000)
    basic.showLeds(`
        . # # . #
        # # # # #
        # . # # #
        # # # # #
        . # # . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(5700)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showLeds(`
        . # # . #
        # # # # #
        # . # # #
        # # # # #
        . # # . #
        `)
})
function FeedFish () {
    while (true) {
        if (Hours == 12) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            counter += 1
            basic.showNumber(counter)
            basic.pause(5700)
            pins.digitalWritePin(DigitalPin.P1, 0)
            Hours = 0
            Minutt = 0
        }
        basic.pause(500)
    }
}
let counter = 0
let Hours = 0
let Minutt = 0
basic.showLeds(`
    . # # . #
    # # # # #
    # . # # #
    # # # # #
    . # # . #
    `)
basic.forever(function () {
    basic.pause(60000)
    if (Minutt < 59) {
        Minutt += 1
    } else {
        Minutt = 0
        if (Hours < 23) {
            Hours += 1
        } else {
            Hours = 0
        }
    }
})
