input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # . # . .
        # # # # #
        . . # . #
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . #
        # # # # #
        # . # . .
        . # . # .
        . # . # .
        `)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . # . .
        # # # # #
        # . # . #
        . # . # .
        . # . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . #
        # # # # #
        # . # . .
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        # . # . .
        # # # # #
        . . # . #
        . # . # .
        # . . # .
        `)
    basic.showLeds(`
        . . # . #
        # # # # #
        # . # . .
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        # . # . .
        # # # # #
        . . # . #
        . # . # .
        # . . # .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # . # . #
        # # # # #
        . . # . .
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
	
})
